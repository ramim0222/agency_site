<?php

test('web development service page is publicly available', function () {
    $this->get(route('services.web-development'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/ServicesWebDevelopment'));
});

test('contact accepts website service query context', function () {
    $this->get('/contact?service=website')
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/Contact'));
});
