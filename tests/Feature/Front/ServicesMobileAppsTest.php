<?php

test('mobile apps service page is publicly available', function () {
    $this->get(route('services.mobile-apps'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/ServicesMobileApps'));
});

test('contact accepts mobile_app service query context', function () {
    $this->get('/contact?service=mobile_app')
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/Contact'));
});
