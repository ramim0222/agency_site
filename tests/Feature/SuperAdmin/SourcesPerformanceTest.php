<?php

use App\Models\Lead;
use App\Models\User;

test('guests cannot view sources performance', function () {
    $this->get(route('admin.sources.index'))->assertRedirect(route('login'));
});

test('sources page aggregates channels campaigns and landings', function () {
    $user = User::factory()->create();

    Lead::factory()->create([
        'utm_source' => 'facebook',
        'utm_medium' => 'paid_social',
        'utm_campaign' => 'fb-retarget-q2',
        'landing_page' => '/landing/saas-starter',
        'status' => 'won',
        'created_at' => now()->subDays(3),
    ]);

    Lead::factory()->create([
        'utm_source' => 'facebook',
        'utm_medium' => 'paid_social',
        'utm_campaign' => 'fb-retarget-q2',
        'landing_page' => '/landing/saas-starter',
        'status' => 'new',
        'created_at' => now()->subDays(2),
    ]);

    Lead::factory()->create([
        'utm_source' => 'google',
        'utm_medium' => 'cpc',
        'utm_campaign' => 'g-brand-search',
        'landing_page' => '/landing/mobile-mvp',
        'status' => 'contacted',
        'created_at' => now()->subDays(1),
    ]);

    Lead::factory()->create([
        'utm_source' => 'organic',
        'utm_medium' => 'seo',
        'utm_campaign' => null,
        'landing_page' => '/contact',
        'status' => 'lost',
        'created_at' => now()->subDays(40),
    ]);

    $this->actingAs($user)
        ->get(route('admin.sources.index', ['preset' => '30d']))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('SuperAdmin/Sources/Index')
            ->where('range.preset', '30d')
            ->where('summary.total', 3)
            ->where('summary.won', 1)
            ->has('bySource', 6)
            ->has('campaigns')
            ->has('landings')
            ->where('campaigns.0.campaign', 'fb-retarget-q2')
            ->where('campaigns.0.count', 2)
            ->where('campaigns.0.conversionRate', 50)
            ->where('landings.0.path', '/landing/saas-starter')
        );
});

test('leads list can filter by campaign and landing from sources links', function () {
    $user = User::factory()->create();

    Lead::factory()->create([
        'utm_campaign' => 'fb-retarget-q2',
        'utm_source' => 'facebook',
        'utm_medium' => 'paid_social',
        'landing_page' => '/landing/saas-starter',
    ]);

    Lead::factory()->create([
        'utm_campaign' => 'other-camp',
        'utm_source' => 'google',
        'utm_medium' => 'cpc',
        'landing_page' => '/contact',
    ]);

    $this->actingAs($user)
        ->get(route('admin.leads.index', [
            'campaign' => 'fb-retarget-q2',
            'source' => 'facebook',
        ]))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->where('meta.total', 1)
            ->where('filters.campaign', 'fb-retarget-q2')
        );

    $this->actingAs($user)
        ->get(route('admin.leads.index', [
            'landing' => '/landing/saas-starter',
        ]))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->where('meta.total', 1)
            ->where('filters.landing', '/landing/saas-starter')
        );
});
