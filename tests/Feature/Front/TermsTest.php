<?php

test('terms page is publicly available', function () {
    $this->get(route('terms'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/Terms'));
});

test('refund policy stub resolves for legal cross-links', function () {
    $this->get(route('refund-policy'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/RefundPolicy'));
});
