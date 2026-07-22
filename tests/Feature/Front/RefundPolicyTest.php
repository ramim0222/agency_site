<?php

test('refund policy page is publicly available', function () {
    $this->get(route('refund-policy'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/RefundPolicy'));
});
