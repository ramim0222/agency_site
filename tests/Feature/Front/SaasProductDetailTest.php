<?php

test('saas product detail page is publicly available', function () {
    $this->get(route('saas.show', 'ledger-meter'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('Front/SaasShow')
            ->where('slug', 'ledger-meter')
        );
});

test('saas product detail 404s for unknown slug', function () {
    $this->get(route('saas.show', 'missing-product'))->assertNotFound();
});

test('contact accepts product and plan query context', function () {
    $this->get('/contact?product=ledger-meter&plan=growth')
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/Contact'));
});
