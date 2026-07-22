<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Inertia\Inertia;
use Inertia\Response;

class SourceController extends Controller
{
    public function index(): Response
    {
        $leads = Lead::query()
            ->whereNull('archived_at')
            ->get(['utm_source', 'utm_medium', 'referrer', 'landing_page']);
        $total = $leads->count();

        $sources = collect(Lead::SOURCES)->map(function (string $key) use ($leads, $total) {
            $count = $leads->filter(fn (Lead $lead) => $lead->source === $key)->count();

            return [
                'key' => $key,
                'label' => Lead::sourceLabel($key),
                'count' => $count,
                'pct' => $total > 0 ? round(($count / $total) * 100) : 0,
            ];
        })->values()->all();

        return Inertia::render('SuperAdmin/Sources/Index', [
            'sources' => $sources,
            'total' => $total,
        ]);
    }
}
