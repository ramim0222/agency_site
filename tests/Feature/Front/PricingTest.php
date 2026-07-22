<?php

test('pricing page is publicly available', function () {
    $this->get(route('pricing'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/Pricing'));
});
