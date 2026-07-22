<?php

test('portfolio index is publicly available', function () {
    $this->get(route('portfolio'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Front/Portfolio'));
});

test('portfolio case study resolves by slug and 404s unknown', function () {
    $this->get(route('portfolio.show', 'harborline-dispatch'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('Front/PortfolioShow')
            ->where('slug', 'harborline-dispatch')
        );

    $this->get(route('portfolio.show', 'does-not-exist'))->assertNotFound();
});
