<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LeadController extends Controller
{
    public function index(Request $request): Response
    {
        $status = $request->string('status')->toString();
        $source = $request->string('source')->toString();
        $range = $request->string('range')->toString();
        $pipeline = $request->string('pipeline')->toString();

        $query = Lead::query()->orderByDesc('created_at');

        if ($status !== '' && in_array($status, Lead::STATUSES, true)) {
            $query->where('status', $status);
        }

        if ($range === 'week') {
            $query->where('created_at', '>=', now()->startOfWeek());
        } elseif ($range === 'today') {
            $query->where('created_at', '>=', now()->startOfDay());
        }

        if ($pipeline === 'open') {
            $query->whereIn('status', ['new', 'contacted', 'quoted']);
        }

        $leads = $query
            ->get()
            ->when(
                $source !== '' && in_array($source, Lead::SOURCES, true),
                fn ($collection) => $collection->filter(fn (Lead $lead) => $lead->source === $source)->values()
            )
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
                'createdAtLabel' => $lead->created_at?->diffForHumans(),
            ])
            ->values()
            ->all();

        return Inertia::render('SuperAdmin/Leads/Index', [
            'leads' => $leads,
            'filters' => [
                'status' => $status !== '' ? $status : null,
                'source' => $source !== '' ? $source : null,
                'range' => $range !== '' ? $range : null,
                'pipeline' => $pipeline !== '' ? $pipeline : null,
            ],
        ]);
    }

    public function show(Lead $lead): Response
    {
        return Inertia::render('SuperAdmin/Leads/Show', [
            'lead' => [
                'id' => $lead->id,
                'name' => $lead->name,
                'email' => $lead->email,
                'phone' => $lead->phone,
                'message' => $lead->message,
                'service' => $lead->service_label,
                'budget' => $lead->budget,
                'timeline' => $lead->timeline,
                'source' => $lead->source,
                'sourceLabel' => Lead::sourceLabel($lead->source),
                'status' => $lead->status,
                'statusLabel' => Lead::statusLabel($lead->status),
                'utmSource' => $lead->utm_source,
                'utmMedium' => $lead->utm_medium,
                'utmCampaign' => $lead->utm_campaign,
                'referrer' => $lead->referrer,
                'landingPage' => $lead->landing_page,
                'createdAtLabel' => $lead->created_at?->timezone(config('app.timezone'))->format('M j, Y · g:i A'),
            ],
        ]);
    }
}
