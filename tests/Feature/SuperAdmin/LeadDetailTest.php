<?php

use App\Models\Lead;
use App\Models\LeadActivity;
use App\Models\User;

test('lead detail shows brief contact links and activities', function () {
    $user = User::factory()->create();
    $lead = Lead::factory()->create([
        'name' => 'Detail Client',
        'email' => 'detail@example.com',
        'phone' => '+15551234567',
        'service_type' => 'saas',
        'message' => 'Need a SaaS MVP.',
        'utm_source' => 'google',
        'utm_medium' => 'cpc',
        'utm_campaign' => 'spring',
    ]);

    LeadActivity::create([
        'lead_id' => $lead->id,
        'user_id' => $user->id,
        'type' => 'note',
        'body' => 'Qualified — good budget fit.',
    ]);

    $waText = rawurlencode('Hi Detail Client, this is Kiln following up on your SaaS inquiry.');
    $mailto = 'mailto:detail@example.com?subject='.rawurlencode('Following up — your SaaS project');

    $this->actingAs($user)
        ->get(route('admin.leads.show', $lead))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('SuperAdmin/Leads/Show')
            ->where('lead.name', 'Detail Client')
            ->where('lead.email', 'detail@example.com')
            ->where('lead.whatsappHref', "https://wa.me/15551234567?text={$waText}")
            ->where('lead.mailtoHref', $mailto)
            ->has('activities', 1)
            ->where('activities.0.body', 'Qualified — good budget fit.')
            ->has('activityTypes', 4)
        );
});

test('authenticated users can log activity on a lead', function () {
    $user = User::factory()->create();
    $lead = Lead::factory()->create();

    $this->actingAs($user)
        ->post(route('admin.leads.activities.store', $lead), [
            'type' => 'call',
            'body' => 'Spoke for 12 minutes. Sending quote tomorrow.',
        ])
        ->assertRedirect();

    $this->assertDatabaseHas('lead_activities', [
        'lead_id' => $lead->id,
        'user_id' => $user->id,
        'type' => 'call',
        'body' => 'Spoke for 12 minutes. Sending quote tomorrow.',
    ]);
});

test('leads can be archived restored and deleted', function () {
    $user = User::factory()->create();
    $lead = Lead::factory()->create(['name' => 'Archive Me']);

    $this->actingAs($user)
        ->patch(route('admin.leads.archive', $lead))
        ->assertRedirect(route('admin.leads.index'));

    expect($lead->fresh()->archived_at)->not->toBeNull();

    $this->actingAs($user)
        ->get(route('admin.leads.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->where('meta.total', 0));

    $this->actingAs($user)
        ->patch(route('admin.leads.restore', $lead))
        ->assertRedirect();

    expect($lead->fresh()->archived_at)->toBeNull();

    $this->actingAs($user)
        ->delete(route('admin.leads.destroy', $lead))
        ->assertRedirect(route('admin.leads.index'));

    $this->assertDatabaseMissing('leads', ['id' => $lead->id]);
});

test('guests cannot view or mutate lead detail', function () {
    $lead = Lead::factory()->create();

    $this->get(route('admin.leads.show', $lead))->assertRedirect(route('login'));
    $this->post(route('admin.leads.activities.store', $lead), [
        'type' => 'note',
        'body' => 'Nope',
    ])->assertRedirect(route('login'));
    $this->delete(route('admin.leads.destroy', $lead))->assertRedirect(route('login'));
});
