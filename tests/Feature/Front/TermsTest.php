<?php

test('terms page is publicly available', function () {
    $this->get(route('terms'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/Terms'));
});

test('privacy and refund policy stubs resolve for legal cross-links', function () {
    $this->get(route('privacy'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/Privacy'));

    $this->get(route('refund-policy'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/RefundPolicy'));
});
