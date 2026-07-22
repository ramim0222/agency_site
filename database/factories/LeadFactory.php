<?php

namespace Database\Factories;

use App\Models\Lead;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lead>
 */
class LeadFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $sourcePreset = fake()->randomElement([
            'facebook',
            'google',
            'organic',
            'referral',
            'whatsapp',
            'other',
        ]);

        $facebookCampaigns = ['fb-retarget-q2', 'fb-lookalike-saas', 'fb-brand-awareness'];
        $googleCampaigns = ['g-brand-search', 'g-competitor', 'g-demo-request'];
        $landingPages = [
            '/landing/saas-starter',
            '/landing/website-refresh',
            '/landing/mobile-mvp',
            '/contact',
        ];

        [$utmSource, $utmMedium, $utmCampaign, $referrer, $landing] = match ($sourcePreset) {
            'facebook' => [
                'facebook',
                'paid_social',
                fake()->randomElement($facebookCampaigns),
                null,
                fake()->randomElement(['/landing/saas-starter', '/landing/website-refresh', '/contact']),
            ],
            'google' => [
                'google',
                'cpc',
                fake()->randomElement($googleCampaigns),
                null,
                fake()->randomElement(['/landing/mobile-mvp', '/landing/saas-starter', '/contact']),
            ],
            'organic' => [
                'organic',
                'seo',
                null,
                'https://www.bing.com/search?q=kiln',
                fake()->randomElement(['/contact', '/landing/website-refresh']),
            ],
            'referral' => [
                null,
                null,
                null,
                'https://partner.example.com/directory',
                '/contact',
            ],
            'whatsapp' => [
                'whatsapp',
                'direct',
                null,
                null,
                '/contact',
            ],
            default => [null, null, null, null, fake()->randomElement($landingPages)],
        };

        return [
            'service_type' => fake()->randomElement(Lead::SERVICE_TYPES),
            'budget' => fake()->randomElement(Lead::BUDGETS),
            'timeline' => fake()->randomElement(Lead::TIMELINES),
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'phone' => fake()->numerify('+1##########'),
            'message' => fake()->optional(0.7)->paragraph(),
            'utm_source' => $utmSource,
            'utm_medium' => $utmMedium,
            'utm_campaign' => $utmCampaign,
            'utm_term' => null,
            'utm_content' => null,
            'referrer' => $referrer,
            'landing_page' => $landing,
            'status' => fake()->randomElement(Lead::STATUSES),
            'created_at' => fake()->dateTimeBetween('-45 days', 'now'),
            'updated_at' => now(),
        ];
    }

    public function today(): static
    {
        return $this->state(fn () => [
            'created_at' => now()->subHours(fake()->numberBetween(0, 10)),
            'updated_at' => now(),
            'status' => 'new',
        ]);
    }

    public function thisWeek(): static
    {
        return $this->state(fn () => [
            'created_at' => now()->startOfWeek()->addHours(fake()->numberBetween(1, 48)),
            'updated_at' => now(),
        ]);
    }
}
