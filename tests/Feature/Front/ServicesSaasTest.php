<?php

test('saas subscriptions service page is publicly available', function () {
    $this->get(route('services.saas'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/ServicesSaas'));
});

test('saas catalog remains reachable from service funnel', function () {
    $this->get(route('saas'))->assertOk();
    $this->get(route('saas.category', 'billing'))->assertOk();
});
