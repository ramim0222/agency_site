<?php

test('registration is disabled — no public register screen', function () {
    $response = $this->get('/register');

    $response->assertNotFound();
});

test('registration post is disabled', function () {
    $response = $this->post('/register', [
        'name' => 'Test User',
        'email' => 'new@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $response->assertNotFound();
    $this->assertGuest();
});
