<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use App\Models\LeadActivity;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class LeadController extends Controller
{
    public function index(Request $request): Response
    {
        $filters = $this->validatedFilters($request);
        $leads = $this->filteredLeads($filters);

        return Inertia::render('SuperAdmin/Leads/Index', [
            'leads' => $leads->map(fn (Lead $lead) => $this->leadRow($lead))->values()->all(),
            'filters' => $filters,
            'meta' => [
                'total' => $leads->count(),
                'sources' => collect(Lead::SOURCES)->map(fn (string $key) => [
                    'value' => $key,
                    'label' => Lead::sourceLabel($key),
                ])->values()->all(),
                'statuses' => collect(Lead::STATUSES)->map(fn (string $key) => [
                    'value' => $key,
                    'label' => Lead::statusLabel($key),
                ])->values()->all(),
                'services' => collect(Lead::SERVICE_TYPES)->map(fn (string $key) => [
                    'value' => $key,
                    'label' => match ($key) {
                        'website' => 'Website',
                        'web_app' => 'Web app',
                        'mobile_app' => 'Mobile app',
                        'saas' => 'SaaS',
                        default => $key,
                    },
                ])->values()->all(),
            ],
        ]);
    }

    public function show(Lead $lead): Response
    {
        $lead->load(['activities.user:id,name']);

        $digits = Lead::whatsappDigits($lead->phone);
        $waText = rawurlencode(
            "Hi {$lead->name}, this is Kiln following up on your {$lead->service_label} inquiry."
        );

        return Inertia::render('SuperAdmin/Leads/Show', [
            'lead' => [
                'id' => $lead->id,
                'name' => $lead->name,
                'email' => $lead->email,
                'phone' => $lead->phone,
                'message' => $lead->message,
                'service' => $lead->service_label,
                'serviceType' => $lead->service_type,
                'budget' => $lead->budget,
                'budgetLabel' => $lead->budget_label,
                'timeline' => $lead->timeline,
                'timelineLabel' => $lead->timeline_label,
                'source' => $lead->source,
                'sourceLabel' => Lead::sourceLabel($lead->source),
                'status' => $lead->status,
                'statusLabel' => Lead::statusLabel($lead->status),
                'utmSource' => $lead->utm_source,
                'utmMedium' => $lead->utm_medium,
                'utmCampaign' => $lead->utm_campaign,
                'utmTerm' => $lead->utm_term,
                'utmContent' => $lead->utm_content,
                'referrer' => $lead->referrer,
                'landingPage' => $lead->landing_page,
                'archived' => $lead->isArchived(),
                'archivedAtLabel' => $lead->archived_at
                    ?->timezone(config('app.timezone'))
                    ->format('M j, Y · g:i A'),
                'createdAtLabel' => $lead->created_at
                    ?->timezone(config('app.timezone'))
                    ->format('M j, Y · g:i A'),
                'mailtoHref' => 'mailto:'.$lead->email.'?subject='.rawurlencode(
                    'Following up — your '.$lead->service_label.' project'
                ),
                'whatsappHref' => $digits !== ''
                    ? "https://wa.me/{$digits}?text={$waText}"
                    : null,
                'statuses' => collect(Lead::STATUSES)->map(fn (string $key) => [
                    'value' => $key,
                    'label' => Lead::statusLabel($key),
                ])->values()->all(),
            ],
            'activities' => $lead->activities->map(fn (LeadActivity $activity) => [
                'id' => $activity->id,
                'type' => $activity->type,
                'typeLabel' => LeadActivity::typeLabel($activity->type),
                'body' => $activity->body,
                'author' => $activity->user?->name ?? 'Kiln Ops',
                'createdAt' => $activity->created_at?->toIso8601String(),
                'createdAtLabel' => $activity->created_at
                    ?->timezone(config('app.timezone'))
                    ->format('M j, Y · g:i A'),
                'createdAtRelative' => $activity->created_at?->diffForHumans(),
            ])->values()->all(),
            'activityTypes' => collect(LeadActivity::TYPES)->map(fn (string $key) => [
                'value' => $key,
                'label' => LeadActivity::typeLabel($key),
            ])->values()->all(),
        ]);
    }

    public function storeActivity(Request $request, Lead $lead): RedirectResponse
    {
        $validated = $request->validate([
            'type' => ['required', 'string', 'in:'.implode(',', LeadActivity::TYPES)],
            'body' => ['required', 'string', 'max:5000'],
        ]);

        $lead->activities()->create([
            'user_id' => $request->user()?->id,
            'type' => $validated['type'],
            'body' => $validated['body'],
        ]);

        return back()->with('success', LeadActivity::typeLabel($validated['type']).' logged.');
    }

    public function archive(Lead $lead): RedirectResponse
    {
        $lead->update(['archived_at' => now()]);

        return redirect()
            ->route('admin.leads.index')
            ->with('success', "Archived {$lead->name}.");
    }

    public function restore(Lead $lead): RedirectResponse
    {
        $lead->update(['archived_at' => null]);

        return back()->with('success', "Restored {$lead->name}.");
    }

    public function destroy(Lead $lead): RedirectResponse
    {
        $name = $lead->name;
        $lead->delete();

        return redirect()
            ->route('admin.leads.index')
            ->with('success', "Deleted {$name}.");
    }

    public function updateStatus(Request $request, Lead $lead): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', 'string', 'in:'.implode(',', Lead::STATUSES)],
        ]);

        $lead->update(['status' => $validated['status']]);

        return back()->with('success', 'Status updated to '.Lead::statusLabel($validated['status']).'.');
    }

    public function bulkUpdateStatus(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'ids' => ['required', 'array', 'min:1'],
            'ids.*' => ['integer', 'exists:leads,id'],
            'status' => ['required', 'string', 'in:'.implode(',', Lead::STATUSES)],
        ]);

        $count = Lead::query()
            ->whereIn('id', $validated['ids'])
            ->update(['status' => $validated['status']]);

        return back()->with(
            'success',
            "Updated {$count} lead".($count === 1 ? '' : 's').' to '.Lead::statusLabel($validated['status']).'.',
        );
    }

    public function export(Request $request): StreamedResponse
    {
        $validated = $request->validate([
            'ids' => ['nullable', 'array'],
            'ids.*' => ['integer', 'exists:leads,id'],
        ]);

        $filters = $this->validatedFilters($request);
        $leads = $this->filteredLeads($filters);

        if (! empty($validated['ids'])) {
            $ids = collect($validated['ids'])->map(fn ($id) => (int) $id)->all();
            $leads = $leads->whereIn('id', $ids)->values();
        }

        $filename = 'kiln-leads-'.now()->format('Y-m-d-His').'.csv';

        return response()->streamDownload(function () use ($leads) {
            $out = fopen('php://output', 'w');
            fputcsv($out, [
                'id',
                'name',
                'email',
                'phone',
                'service_type',
                'source',
                'status',
                'budget',
                'timeline',
                'created_at',
            ]);

            foreach ($leads as $lead) {
                fputcsv($out, [
                    $lead->id,
                    $lead->name,
                    $lead->email,
                    $lead->phone,
                    $lead->service_type,
                    $lead->source,
                    $lead->status,
                    $lead->budget,
                    $lead->timeline,
                    $lead->created_at?->toIso8601String(),
                ]);
            }

            fclose($out);
        }, $filename, [
            'Content-Type' => 'text/csv; charset=UTF-8',
        ]);
    }

    /**
     * @return array{
     *     view: string,
     *     status: ?string,
     *     source: ?string,
     *     service: ?string,
     *     range: ?string,
     *     pipeline: ?string,
     *     q: ?string,
     *     from: ?string,
     *     to: ?string,
     *     campaign: ?string,
     *     landing: ?string,
     *     sort: string,
     *     dir: string,
     *     archived: bool
     * }
     */
    private function validatedFilters(Request $request): array
    {
        $view = $request->string('view')->toString();
        $status = $request->string('status')->toString();
        $source = $request->string('source')->toString();
        $service = $request->string('service')->toString();
        $range = $request->string('range')->toString();
        $pipeline = $request->string('pipeline')->toString();
        $q = trim($request->string('q')->toString());
        $from = $request->string('from')->toString();
        $to = $request->string('to')->toString();
        $campaign = trim($request->string('campaign')->toString());
        $landing = trim($request->string('landing')->toString());
        $sort = $request->string('sort')->toString();
        $dir = strtolower($request->string('dir')->toString());

        return [
            'view' => in_array($view, ['table', 'kanban'], true) ? $view : 'table',
            'status' => in_array($status, Lead::STATUSES, true) ? $status : null,
            'source' => in_array($source, Lead::SOURCES, true) ? $source : null,
            'service' => in_array($service, Lead::SERVICE_TYPES, true) ? $service : null,
            'range' => in_array($range, ['today', 'week'], true) ? $range : null,
            'pipeline' => $pipeline === 'open' ? 'open' : null,
            'q' => $q !== '' ? $q : null,
            'from' => preg_match('/^\d{4}-\d{2}-\d{2}$/', $from) ? $from : null,
            'to' => preg_match('/^\d{4}-\d{2}-\d{2}$/', $to) ? $to : null,
            'campaign' => $campaign !== '' ? $campaign : null,
            'landing' => $landing !== '' ? $landing : null,
            'sort' => in_array($sort, ['name', 'source', 'service', 'status', 'date'], true) ? $sort : 'date',
            'dir' => in_array($dir, ['asc', 'desc'], true) ? $dir : 'desc',
            'archived' => $request->boolean('archived'),
        ];
    }

    /**
     * @param  array<string, mixed>  $filters
     * @return Collection<int, Lead>
     */
    private function filteredLeads(array $filters): Collection
    {
        $query = Lead::query();

        if ($filters['archived']) {
            $query->whereNotNull('archived_at');
        } else {
            $query->whereNull('archived_at');
        }

        if ($filters['status']) {
            $query->where('status', $filters['status']);
        }

        if ($filters['service']) {
            $query->where('service_type', $filters['service']);
        }

        if ($filters['campaign']) {
            $query->where('utm_campaign', $filters['campaign']);
        }

        if ($filters['landing']) {
            $query->where('landing_page', $filters['landing']);
        }

        if ($filters['pipeline'] === 'open') {
            $query->whereIn('status', ['new', 'contacted', 'quoted']);
        }

        if ($filters['range'] === 'week') {
            $query->where('created_at', '>=', now()->startOfWeek());
        } elseif ($filters['range'] === 'today') {
            $query->where('created_at', '>=', now()->startOfDay());
        }

        if ($filters['from']) {
            $query->whereDate('created_at', '>=', $filters['from']);
        }

        if ($filters['to']) {
            $query->whereDate('created_at', '<=', $filters['to']);
        }

        if ($filters['q']) {
            $term = '%'.$filters['q'].'%';
            $query->where(function ($builder) use ($term) {
                $builder->where('name', 'like', $term)
                    ->orWhere('email', 'like', $term)
                    ->orWhere('phone', 'like', $term);
            });
        }

        $leads = $query->get();

        if ($filters['source']) {
            $leads = $leads->filter(fn (Lead $lead) => $lead->source === $filters['source'])->values();
        }

        $sort = $filters['sort'];
        $dir = $filters['dir'] === 'asc' ? 1 : -1;

        return $leads->sort(function (Lead $a, Lead $b) use ($sort, $dir) {
            $left = match ($sort) {
                'name' => strtolower($a->name),
                'source' => $a->source,
                'service' => $a->service_type,
                'status' => array_search($a->status, Lead::STATUSES, true),
                default => $a->created_at?->timestamp ?? 0,
            };
            $right = match ($sort) {
                'name' => strtolower($b->name),
                'source' => $b->source,
                'service' => $b->service_type,
                'status' => array_search($b->status, Lead::STATUSES, true),
                default => $b->created_at?->timestamp ?? 0,
            };

            return ($left <=> $right) * $dir;
        })->values();
    }

    /**
     * @return array<string, mixed>
     */
    private function leadRow(Lead $lead): array
    {
        return [
            'id' => $lead->id,
            'name' => $lead->name,
            'email' => $lead->email,
            'phone' => $lead->phone,
            'service' => $lead->service_label,
            'serviceType' => $lead->service_type,
            'source' => $lead->source,
            'sourceLabel' => Lead::sourceLabel($lead->source),
            'status' => $lead->status,
            'statusLabel' => Lead::statusLabel($lead->status),
            'createdAt' => $lead->created_at?->toIso8601String(),
            'createdAtLabel' => $lead->created_at?->diffForHumans(),
            'createdAtShort' => $lead->created_at?->timezone(config('app.timezone'))->format('M j'),
        ];
    }
}
