<?php

test('web apps service page is publicly available', function () {
    $this->get(route('services.web-apps'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/ServicesWebApps'));
});

test('contact accepts webapp service query context', function () {
    $this->get('/contact?service=webapp')
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/Contact'));
});
