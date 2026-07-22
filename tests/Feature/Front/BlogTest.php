<?php

test('blog index is publicly available', function () {
    $this->get(route('blog'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/Blog'));
});

test('blog post resolves by slug and 404s unknown', function () {
    $this->get(route('blog.show', 'estimating-fixed-bids'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('Front/BlogShow')
            ->where('slug', 'estimating-fixed-bids')
        );

    $this->get(route('blog.show', 'does-not-exist'))->assertNotFound();
});
