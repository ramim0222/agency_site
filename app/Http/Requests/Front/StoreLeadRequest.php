<?php

namespace App\Http\Requests\Front;

use App\Models\Lead;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreLeadRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'service_type' => ['required', 'string', Rule::in(Lead::SERVICE_TYPES)],
            'budget' => ['required', 'string', Rule::in(Lead::BUDGETS)],
            'timeline' => ['required', 'string', Rule::in(Lead::TIMELINES)],
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:40'],
            'message' => ['nullable', 'string', 'max:2000'],
            'utm_source' => ['nullable', 'string', 'max:120'],
            'utm_medium' => ['nullable', 'string', 'max:120'],
            'utm_campaign' => ['nullable', 'string', 'max:120'],
            'utm_term' => ['nullable', 'string', 'max:120'],
            'utm_content' => ['nullable', 'string', 'max:120'],
            'referrer' => ['nullable', 'string', 'max:500'],
            'landing_page' => ['nullable', 'string', 'max:500'],
        ];
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'service_type.required' => 'Pick the kind of build you need.',
            'budget.required' => 'Choose a budget range so we can scope honestly.',
            'timeline.required' => 'Tell us roughly when you need to launch.',
            'name.required' => 'Add your name so we know who to reply to.',
            'email.required' => 'We need an email to send the quote.',
            'email.email' => 'That email doesn’t look valid.',
            'phone.required' => 'Add a phone or WhatsApp number we can reach.',
        ];
    }
}
