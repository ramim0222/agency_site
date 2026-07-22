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

        [$utmSource, $utmMedium, $referrer] = match ($sourcePreset) {
            'facebook' => ['facebook', 'paid_social', null],
            'google' => ['google', 'cpc', null],
            'organic' => ['organic', 'seo', 'https://www.bing.com/search?q=kiln'],
            'referral' => [null, null, 'https://partner.example.com/directory'],
            'whatsapp' => ['whatsapp', 'direct', null],
            default => [null, null, null],
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
            'utm_campaign' => $utmSource ? fake()->slug(2) : null,
            'utm_term' => null,
            'utm_content' => null,
            'referrer' => $referrer,
            'landing_page' => '/contact',
            'status' => fake()->randomElement(Lead::STATUSES),
            'created_at' => fake()->dateTimeBetween('-21 days', 'now'),
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
