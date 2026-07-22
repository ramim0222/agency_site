<?php

test('terms page is publicly available', function () {
    $this->get(route('terms'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/Terms'));
});
