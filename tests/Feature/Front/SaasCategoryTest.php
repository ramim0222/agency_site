<?php

test('saas category page is publicly available', function () {
    $this->get(route('saas.category', 'billing'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('Front/SaasCategory')
            ->where('categorySlug', 'billing')
        );
});

test('each registered saas category resolves', function () {
    $registry = require resource_path('data/front/saas.php');

    foreach ($registry['categories'] as $category) {
        $this->get(route('saas.category', $category))
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('Front/SaasCategory')
                ->where('categorySlug', $category)
            );
    }
});

test('saas category 404s for unknown slug', function () {
    $this->get(route('saas.category', 'does-not-exist'))->assertNotFound();
});
