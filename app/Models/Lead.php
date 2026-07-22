<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Lead extends Model
{
    /** @use HasFactory<\Database\Factories\LeadFactory> */
    use HasFactory;

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

    public const STATUSES = [
        'new',
        'contacted',
        'quoted',
        'won',
        'lost',
    ];

    public const SOURCES = [
        'facebook',
        'google',
        'organic',
        'referral',
        'whatsapp',
        'other',
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

    /**
     * @var list<string>
     */
    protected $appends = [
        'source',
        'service_label',
    ];

    public function getSourceAttribute(): string
    {
        return self::resolveSource(
            $this->utm_source,
            $this->utm_medium,
            $this->referrer,
            $this->landing_page,
        );
    }

    public function getServiceLabelAttribute(): string
    {
        return match ($this->service_type) {
            'website' => 'Website',
            'web_app' => 'Web app',
            'mobile_app' => 'Mobile app',
            'saas' => 'SaaS',
            default => Str::headline((string) $this->service_type),
        };
    }

    public static function resolveSource(
        ?string $utmSource,
        ?string $utmMedium,
        ?string $referrer,
        ?string $landingPage = null,
    ): string {
        $haystack = Str::lower(trim(implode(' ', array_filter([
            $utmSource,
            $utmMedium,
            $referrer,
            $landingPage,
        ]))));

        if ($haystack === '') {
            return 'other';
        }

        if (Str::contains($haystack, ['whatsapp', 'wa.me', 'wa_direct'])) {
            return 'whatsapp';
        }

        if (Str::contains($haystack, ['facebook', 'fbclid', 'meta', 'instagram', 'ig'])) {
            return 'facebook';
        }

        if (Str::contains($haystack, ['google', 'gclid', 'adwords', 'youtube'])) {
            return 'google';
        }

        if (
            Str::contains($haystack, ['organic', 'seo'])
            || Str::contains($haystack, ['bing.com', 'duckduckgo', 'yahoo.com'])
        ) {
            return 'organic';
        }

        $refHost = Str::lower((string) (parse_url((string) $referrer, PHP_URL_HOST) ?: ''));

        if (
            filled($referrer)
            && $refHost !== ''
            && ! in_array($refHost, ['localhost', '127.0.0.1'], true)
        ) {
            return 'referral';
        }

        if (filled($utmSource) || filled($utmMedium)) {
            return 'other';
        }

        return 'other';
    }

    public static function sourceLabel(string $source): string
    {
        return match ($source) {
            'facebook' => 'Facebook',
            'google' => 'Google',
            'organic' => 'Organic',
            'referral' => 'Referral',
            'whatsapp' => 'WhatsApp Direct',
            default => 'Other',
        };
    }

    public static function statusLabel(string $status): string
    {
        return match ($status) {
            'new' => 'New',
            'contacted' => 'Contacted',
            'quoted' => 'Quoted',
            'won' => 'Won',
            'lost' => 'Lost',
            default => Str::headline($status),
        };
    }
}
