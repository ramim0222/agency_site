<?php

use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\Facades\Notification;

test('admin reset password link screen can be rendered', function () {
    $response = $this->get('/admin/forgot-password');

    $response->assertStatus(200);
});

test('legacy forgot-password path redirects to admin route', function () {
    $response = $this->get('/forgot-password');

    $response->assertRedirect('/admin/forgot-password');
});

test('reset password link can be requested', function () {
    Notification::fake();

    $user = User::factory()->create();

    $response = $this->post('/admin/forgot-password', ['email' => $user->email]);

    $response->assertSessionHas('status');
    Notification::assertSentTo($user, ResetPassword::class);
});

test('admin reset password screen can be rendered', function () {
    Notification::fake();

    $user = User::factory()->create();

    $this->post('/admin/forgot-password', ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class, function ($notification) {
        $response = $this->get('/admin/reset-password/'.$notification->token);

        $response->assertStatus(200);

        return true;
    });
});

test('legacy reset-password path redirects to admin route', function () {
    $response = $this->get('/reset-password/sample-token?email=test@example.com');

    $response->assertRedirect('/admin/reset-password/sample-token?email=test%40example.com');
});

test('password can be reset with valid token', function () {
    Notification::fake();

    $user = User::factory()->create();

    $this->post('/admin/forgot-password', ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class, function ($notification) use ($user) {
        $response = $this->post('/admin/reset-password', [
            'token' => $notification->token,
            'email' => $user->email,
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('Auth/ResetPassword')
                ->where('resetComplete', true)
            );

        return true;
    });
});
