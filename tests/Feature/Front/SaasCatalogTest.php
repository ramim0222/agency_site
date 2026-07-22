<?php

test('saas catalog is publicly available', function () {
    $this->get(route('saas'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/Saas'));
});

test('saas category filter route resolves and 404s unknown', function () {
    $this->get(route('saas.category', 'billing'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('Front/Saas')
            ->where('categorySlug', 'billing')
        );

    $this->get(route('saas.category', 'does-not-exist'))->assertNotFound();
});

test('saas product stub resolves by slug and 404s unknown', function () {
    $this->get(route('saas.show', 'ledger-meter'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('Front/SaasShow')
            ->where('slug', 'ledger-meter')
        );

    $this->get(route('saas.show', 'missing-product'))->assertNotFound();
});
