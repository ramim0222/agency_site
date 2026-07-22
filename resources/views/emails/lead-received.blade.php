<x-mail::message>
# New quote request

**{{ $lead->name }}** just submitted a project brief from the contact form.

<x-mail::panel>
**Service:** {{ str_replace('_', ' ', $lead->service_type) }}  
**Budget:** {{ str_replace('_', ' ', $lead->budget) }}  
**Timeline:** {{ str_replace('_', ' ', $lead->timeline) }}  
**Email:** {{ $lead->email }}  
**Phone / WhatsApp:** {{ $lead->phone }}
</x-mail::panel>

@if ($lead->message)
**Message**

{{ $lead->message }}
@endif

@if ($lead->utm_source || $lead->referrer)
---

**Attribution**

- UTM source: {{ $lead->utm_source ?: '—' }}
- UTM medium: {{ $lead->utm_medium ?: '—' }}
- UTM campaign: {{ $lead->utm_campaign ?: '—' }}
- Referrer: {{ $lead->referrer ?: '—' }}
- Landing page: {{ $lead->landing_page ?: '—' }}
@endif

Reply to them directly at {{ $lead->email }} or WhatsApp {{ $lead->phone }}.

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
