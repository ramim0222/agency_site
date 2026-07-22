<?php

test('careers page is publicly available', function () {
    $this->get(route('careers'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/Careers'));
});
