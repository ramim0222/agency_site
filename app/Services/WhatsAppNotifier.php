<?php

namespace App\Services;

use App\Models\Lead;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class WhatsAppNotifier
{
    /**
     * Notify the studio owner about a new lead.
     * Uses WHATSAPP_NOTIFY_WEBHOOK when configured; otherwise logs the payload
     * so local/dev environments still get a clear paper trail.
     */
    public function notifyNewLead(Lead $lead): void
    {
        $message = $this->formatMessage($lead);
        $webhook = config('services.whatsapp.notify_webhook');

        if (! filled($webhook)) {
            Log::info('WhatsApp lead notification (no webhook configured)', [
                'lead_id' => $lead->id,
                'message' => $message,
            ]);

            return;
        }

        try {
            Http::timeout(8)
                ->acceptJson()
                ->post($webhook, [
                    'lead_id' => $lead->id,
                    'name' => $lead->name,
                    'email' => $lead->email,
                    'phone' => $lead->phone,
                    'service_type' => $lead->service_type,
                    'budget' => $lead->budget,
                    'timeline' => $lead->timeline,
                    'message' => $lead->message,
                    'text' => $message,
                ])
                ->throw();
        } catch (\Throwable $e) {
            Log::warning('WhatsApp lead notification failed', [
                'lead_id' => $lead->id,
                'error' => $e->getMessage(),
            ]);
        }
    }

    protected function formatMessage(Lead $lead): string
    {
        $service = str_replace('_', ' ', $lead->service_type);
        $budget = str_replace('_', ' ', $lead->budget);
        $timeline = str_replace('_', ' ', $lead->timeline);

        return implode("\n", array_filter([
            "New Kiln quote request #{$lead->id}",
            "Name: {$lead->name}",
            "Service: {$service}",
            "Budget: {$budget}",
            "Timeline: {$timeline}",
            "Email: {$lead->email}",
            "Phone: {$lead->phone}",
            $lead->message ? "Message: {$lead->message}" : null,
        ]));
    }
}
