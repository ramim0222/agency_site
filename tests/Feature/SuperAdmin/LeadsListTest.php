<?php

use App\Models\Lead;
use App\Models\User;

test('leads list supports filters sort and view props', function () {
    $user = User::factory()->create();

    Lead::factory()->create([
        'name' => 'Alpha Client',
        'email' => 'alpha@example.com',
        'service_type' => 'website',
        'status' => 'new',
        'utm_source' => 'facebook',
        'utm_medium' => 'paid_social',
    ]);

    Lead::factory()->create([
        'name' => 'Beta Client',
        'email' => 'beta@example.com',
        'service_type' => 'saas',
        'status' => 'contacted',
        'utm_source' => 'google',
        'utm_medium' => 'cpc',
    ]);

    $this->actingAs($user)
        ->get(route('admin.leads.index', [
            'status' => 'new',
            'source' => 'facebook',
            'service' => 'website',
            'q' => 'Alpha',
            'sort' => 'name',
            'dir' => 'asc',
            'view' => 'kanban',
        ]))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('SuperAdmin/Leads/Index')
            ->where('filters.view', 'kanban')
            ->where('filters.status', 'new')
            ->where('filters.source', 'facebook')
            ->where('filters.service', 'website')
            ->where('filters.q', 'Alpha')
            ->where('meta.total', 1)
            ->has('leads', 1)
            ->where('leads.0.name', 'Alpha Client')
        );
});

test('lead status can be updated and bulk updated', function () {
    $user = User::factory()->create();
    $leadA = Lead::factory()->create(['status' => 'new']);
    $leadB = Lead::factory()->create(['status' => 'new']);

    $this->actingAs($user)
        ->patch(route('admin.leads.status', $leadA), ['status' => 'contacted'])
        ->assertRedirect();

    expect($leadA->fresh()->status)->toBe('contacted');

    $this->actingAs($user)
        ->patch(route('admin.leads.bulk-status'), [
            'ids' => [$leadA->id, $leadB->id],
            'status' => 'quoted',
        ])
        ->assertRedirect();

    expect($leadA->fresh()->status)->toBe('quoted');
    expect($leadB->fresh()->status)->toBe('quoted');
});

test('leads export downloads csv for selected ids', function () {
    $user = User::factory()->create();
    $lead = Lead::factory()->create([
        'name' => 'Export Me',
        'email' => 'export@example.com',
    ]);

    $response = $this->actingAs($user)
        ->get(route('admin.leads.export', ['ids' => [$lead->id]]));

    $response->assertOk();
    $response->assertHeader('content-disposition');
    expect($response->streamedContent())->toContain('Export Me');
    expect($response->streamedContent())->toContain('export@example.com');
});

test('guests cannot mutate or export leads', function () {
    $lead = Lead::factory()->create();

    $this->patch(route('admin.leads.status', $lead), ['status' => 'contacted'])
        ->assertRedirect(route('login'));

    $this->get(route('admin.leads.export'))->assertRedirect(route('login'));
});
