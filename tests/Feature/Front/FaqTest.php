<?php

test('faq page is publicly available', function () {
    $this->get(route('faq'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/Faq'));
});
