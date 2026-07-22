<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    public const SERVICE_TYPES = [
        'website',
        'web_app',
        'mobile_app',
        'saas',
    ];

    public const BUDGETS = [
        'under_5k',
        '5k_15k',
        '15k_40k',
        '40k_plus',
        'not_sure',
    ];

    public const TIMELINES = [
        'asap',
        '1_3_months',
        '3_6_months',
        'flexible',
    ];

    /**
     * @var list<string>
     */
    protected $fillable = [
        'service_type',
        'budget',
        'timeline',
        'name',
        'email',
        'phone',
        'message',
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
        'referrer',
        'landing_page',
        'status',
    ];
}
