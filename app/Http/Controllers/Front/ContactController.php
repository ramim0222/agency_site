<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Requests\Front\StoreLeadRequest;
use App\Mail\LeadReceived;
use App\Models\Lead;
use App\Services\WhatsAppNotifier;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function show(): Response
    {
        return Inertia::render('Front/Contact');
    }

    public function store(StoreLeadRequest $request, WhatsAppNotifier $whatsApp): RedirectResponse
    {
        $data = $request->validated();

        $lead = Lead::create([
            ...$data,
            'status' => 'new',
            'referrer' => $data['referrer'] ?? $request->headers->get('referer'),
            'landing_page' => $data['landing_page'] ?? $request->headers->get('referer'),
        ]);

        $notifyTo = config('mail.lead_notify_to') ?: config('mail.from.address');

        if (filled($notifyTo)) {
            Mail::to($notifyTo)->send(new LeadReceived($lead));
        }

        $whatsApp->notifyNewLead($lead);

        return redirect()
            ->route('thank-you')
            ->with('leadName', $lead->name)
            ->with('fireConversion', true);
    }

    public function thankYou(): Response
    {
        return Inertia::render('Front/ThankYou', [
            'leadName' => session('leadName'),
            // Pulled so a refresh doesn't re-fire the Meta Pixel Lead event.
            'fireConversion' => (bool) session()->pull('fireConversion'),
        ]);
    }
}
