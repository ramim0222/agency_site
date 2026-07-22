<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Inertia\Inertia;
use Inertia\Response;

class SourceController extends Controller
{
    public function index(Request $request): Response
    {
        $range = $this->validatedRange($request);
        $leads = $this->leadsInRange($range);

        $total = $leads->count();
        $wonTotal = $leads->where('status', 'won')->count();

        $bySource = collect(Lead::SOURCES)->map(function (string $key) use ($leads, $total) {
            $group = $leads->filter(fn (Lead $lead) => $lead->source === $key);
            $count = $group->count();
            $won = $group->where('status', 'won')->count();
            $statusCounts = collect(Lead::STATUSES)->mapWithKeys(
                fn (string $status) => [$status => $group->where('status', $status)->count()]
            );

            return [
                'key' => $key,
                'label' => Lead::channelLabel($key),
                'shortLabel' => Lead::sourceLabel($key),
                'count' => $count,
                'pct' => $total > 0 ? round(($count / $total) * 100) : 0,
                'won' => $won,
                'conversionRate' => $count > 0 ? round(($won / $count) * 100, 1) : 0,
                'statusCounts' => $statusCounts->all(),
                'leadsHref' => route('admin.leads.index', ['source' => $key], false),
            ];
        })->values();

        $maxSourceCount = max(1, (int) $bySource->max('count'));

        $bySource = $bySource->map(function (array $row) use ($maxSourceCount) {
            $row['barPct'] = round(($row['count'] / $maxSourceCount) * 100);

            return $row;
        })->all();

        $campaigns = $this->campaignRows($leads);
        $landings = $this->landingRows($leads);

        return Inertia::render('SuperAdmin/Sources/Index', [
            'range' => $range,
            'summary' => [
                'total' => $total,
                'won' => $wonTotal,
                'conversionRate' => $total > 0 ? round(($wonTotal / $total) * 100, 1) : 0,
                'channelsWithLeads' => collect($bySource)->where('count', '>', 0)->count(),
            ],
            'bySource' => $bySource,
            'campaigns' => $campaigns,
            'landings' => $landings,
            'statuses' => collect(Lead::STATUSES)->map(fn (string $key) => [
                'key' => $key,
                'label' => Lead::statusLabel($key),
            ])->values()->all(),
        ]);
    }

    /**
     * @return array{preset: string, from: ?string, to: ?string, label: string}
     */
    private function validatedRange(Request $request): array
    {
        $preset = $request->string('preset')->toString();
        $from = $request->string('from')->toString();
        $to = $request->string('to')->toString();

        $validFrom = preg_match('/^\d{4}-\d{2}-\d{2}$/', $from) ? $from : null;
        $validTo = preg_match('/^\d{4}-\d{2}-\d{2}$/', $to) ? $to : null;

        if ($validFrom || $validTo) {
            return [
                'preset' => 'custom',
                'from' => $validFrom,
                'to' => $validTo,
                'label' => trim(($validFrom ?? '…').' → '.($validTo ?? '…')),
            ];
        }

        if (! in_array($preset, ['7d', '30d', '90d', 'all'], true)) {
            $preset = '30d';
        }

        return match ($preset) {
            '7d' => [
                'preset' => '7d',
                'from' => now()->subDays(6)->toDateString(),
                'to' => now()->toDateString(),
                'label' => 'Last 7 days',
            ],
            '90d' => [
                'preset' => '90d',
                'from' => now()->subDays(89)->toDateString(),
                'to' => now()->toDateString(),
                'label' => 'Last 90 days',
            ],
            'all' => [
                'preset' => 'all',
                'from' => null,
                'to' => null,
                'label' => 'All time',
            ],
            default => [
                'preset' => '30d',
                'from' => now()->subDays(29)->toDateString(),
                'to' => now()->toDateString(),
                'label' => 'Last 30 days',
            ],
        };
    }

    /**
     * @param  array{preset: string, from: ?string, to: ?string, label: string}  $range
     * @return Collection<int, Lead>
     */
    private function leadsInRange(array $range): Collection
    {
        $query = Lead::query()->whereNull('archived_at');

        if ($range['from']) {
            $query->whereDate('created_at', '>=', $range['from']);
        }

        if ($range['to']) {
            $query->whereDate('created_at', '<=', $range['to']);
        }

        return $query->get([
            'id',
            'status',
            'utm_source',
            'utm_medium',
            'utm_campaign',
            'referrer',
            'landing_page',
            'created_at',
        ]);
    }

    /**
     * @param  Collection<int, Lead>  $leads
     * @return list<array<string, mixed>>
     */
    private function campaignRows(Collection $leads): array
    {
        $paid = $leads->filter(function (Lead $lead) {
            $source = $lead->source;

            return in_array($source, ['facebook', 'google'], true)
                && filled($lead->utm_campaign);
        });

        return $paid
            ->groupBy(fn (Lead $lead) => strtolower(trim((string) $lead->utm_campaign)))
            ->map(function (Collection $group) {
                /** @var Lead $first */
                $first = $group->first();
                $count = $group->count();
                $won = $group->where('status', 'won')->count();
                $source = $first->source;
                $campaign = (string) $first->utm_campaign;

                return [
                    'campaign' => $campaign,
                    'source' => $source,
                    'sourceLabel' => Lead::channelLabel($source),
                    'medium' => $first->utm_medium,
                    'count' => $count,
                    'won' => $won,
                    'conversionRate' => $count > 0 ? round(($won / $count) * 100, 1) : 0,
                    'leadsHref' => route('admin.leads.index', [
                        'source' => $source,
                        'campaign' => $campaign,
                    ], false),
                ];
            })
            ->sortByDesc('count')
            ->values()
            ->all();
    }

    /**
     * @param  Collection<int, Lead>  $leads
     * @return list<array<string, mixed>>
     */
    private function landingRows(Collection $leads): array
    {
        return $leads
            ->filter(fn (Lead $lead) => filled($lead->landing_page))
            ->groupBy(fn (Lead $lead) => (string) $lead->landing_page)
            ->map(function (Collection $group, string $path) {
                $count = $group->count();
                $won = $group->where('status', 'won')->count();

                return [
                    'path' => $path,
                    'count' => $count,
                    'won' => $won,
                    'conversionRate' => $count > 0 ? round(($won / $count) * 100, 1) : 0,
                    'topSource' => Lead::channelLabel(
                        $group->countBy(fn (Lead $lead) => $lead->source)->sortDesc()->keys()->first() ?? 'other'
                    ),
                    'leadsHref' => route('admin.leads.index', [
                        'landing' => $path,
                    ], false),
                ];
            })
            ->sortByDesc('count')
            ->values()
            ->all();
    }
}
