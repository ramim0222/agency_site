<?php

test('about page is publicly available', function () {
    $this->get(route('about'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/About'));
});
