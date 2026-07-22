<?php

test('campaign landing resolves by slug and 404s unknown', function () {
    $this->get(route('landing.show', 'saas-starter'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('Front/CampaignLanding')
            ->where('slug', 'saas-starter')
        );

    $this->get(route('landing.show', 'mobile-mvp'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('Front/CampaignLanding')
            ->where('slug', 'mobile-mvp')
        );

    $this->get(route('landing.show', 'does-not-exist'))->assertNotFound();
});
