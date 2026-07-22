<?php

test('privacy page is publicly available', function () {
    $this->get(route('privacy'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/Privacy'));
});
