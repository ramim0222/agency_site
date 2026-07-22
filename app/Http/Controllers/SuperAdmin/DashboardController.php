<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $todayStart = now()->startOfDay();
        $weekStart = now()->startOfWeek();

        $leads = Lead::query()
            ->orderByDesc('created_at')
            ->get([
                'id',
                'name',
                'email',
                'phone',
                'service_type',
                'status',
                'utm_source',
                'utm_medium',
                'referrer',
                'landing_page',
                'created_at',
            ]);

        $sourceCounts = collect(Lead::SOURCES)->mapWithKeys(fn (string $source) => [$source => 0]);
        $statusCounts = collect(Lead::STATUSES)->mapWithKeys(fn (string $status) => [$status => 0]);

        foreach ($leads as $lead) {
            $source = $lead->source;
            if ($sourceCounts->has($source)) {
                $sourceCounts[$source] = $sourceCounts[$source] + 1;
            } else {
                $sourceCounts['other'] = $sourceCounts['other'] + 1;
            }

            $status = in_array($lead->status, Lead::STATUSES, true) ? $lead->status : 'new';
            $statusCounts[$status] = $statusCounts[$status] + 1;
        }

        $total = $leads->count();

        return Inertia::render('SuperAdmin/Dashboard', [
            'stats' => [
                'newToday' => $leads->where('created_at', '>=', $todayStart)->count(),
                'newThisWeek' => $leads->where('created_at', '>=', $weekStart)->count(),
                'total' => $total,
                'openPipeline' => $leads->whereIn('status', ['new', 'contacted', 'quoted'])->count(),
            ],
            'bySource' => $sourceCounts
                ->map(fn (int $count, string $key) => [
                    'key' => $key,
                    'label' => Lead::sourceLabel($key),
                    'count' => $count,
                    'pct' => $total > 0 ? round(($count / $total) * 100) : 0,
                ])
                ->values()
                ->all(),
            'byStatus' => $statusCounts
                ->map(fn (int $count, string $key) => [
                    'key' => $key,
                    'label' => Lead::statusLabel($key),
                    'count' => $count,
                    'pct' => $total > 0 ? round(($count / $total) * 100) : 0,
                ])
                ->values()
                ->all(),
            'recentLeads' => $leads
                ->take(10)
                ->map(fn (Lead $lead) => [
                    'id' => $lead->id,
                    'name' => $lead->name,
                    'email' => $lead->email,
                    'phone' => $lead->phone,
                    'service' => $lead->service_label,
                    'source' => $lead->source,
                    'sourceLabel' => Lead::sourceLabel($lead->source),
                    'status' => $lead->status,
                    'statusLabel' => Lead::statusLabel($lead->status),
                    'createdAt' => $lead->created_at?->toIso8601String(),
                    'createdAtLabel' => $lead->created_at?->diffForHumans(),
                ])
                ->values()
                ->all(),
            'filters' => [
                ['label' => 'New leads', 'href' => route('admin.leads.index', ['status' => 'new'], false)],
                ['label' => 'This week', 'href' => route('admin.leads.index', ['range' => 'week'], false)],
                ['label' => 'Facebook', 'href' => route('admin.leads.index', ['source' => 'facebook'], false)],
                ['label' => 'Google', 'href' => route('admin.leads.index', ['source' => 'google'], false)],
                ['label' => 'WhatsApp', 'href' => route('admin.leads.index', ['source' => 'whatsapp'], false)],
                ['label' => 'Open pipeline', 'href' => route('admin.leads.index', ['pipeline' => 'open'], false)],
            ],
        ]);
    }
}
