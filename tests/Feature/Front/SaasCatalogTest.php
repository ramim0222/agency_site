<?php

test('saas catalog is publicly available', function () {
    $this->get(route('saas'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/Saas'));
});

test('saas product detail resolves by slug and 404s unknown', function () {
    $this->get(route('saas.show', 'ledger-meter'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('Front/SaasShow')
            ->where('slug', 'ledger-meter')
        );

    $this->get(route('saas.show', 'missing-product'))->assertNotFound();
});
