<?php

use App\Models\Lead;
use App\Models\User;

test('guests cannot view the admin dashboard', function () {
    $this->get(route('admin.dashboard'))->assertRedirect(route('login'));
});

test('authenticated users see lead overview props', function () {
    $user = User::factory()->create();

    Lead::factory()->today()->create([
        'utm_source' => 'facebook',
        'utm_medium' => 'paid_social',
        'status' => 'new',
    ]);

    Lead::factory()->create([
        'utm_source' => 'google',
        'utm_medium' => 'cpc',
        'status' => 'contacted',
        'created_at' => now()->subDays(3),
    ]);

    $this->actingAs($user)
        ->get(route('admin.dashboard'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('SuperAdmin/Dashboard')
            ->has('stats')
            ->where('stats.newToday', 1)
            ->where('stats.total', 2)
            ->has('bySource', 6)
            ->has('byStatus', 5)
            ->has('recentLeads', 2)
            ->has('filters')
        );
});

test('leads index and detail are auth gated', function () {
    $user = User::factory()->create();
    $lead = Lead::factory()->create();

    $this->get(route('admin.leads.index'))->assertRedirect(route('login'));
    $this->get(route('admin.leads.show', $lead))->assertRedirect(route('login'));
    $this->get(route('admin.sources.index'))->assertRedirect(route('login'));

    $this->actingAs($user)
        ->get(route('admin.leads.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('SuperAdmin/Leads/Index'));

    $this->actingAs($user)
        ->get(route('admin.leads.show', $lead))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('SuperAdmin/Leads/Show')
            ->where('lead.id', $lead->id)
        );

    $this->actingAs($user)
        ->get(route('admin.sources.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('SuperAdmin/Sources/Index'));
});
