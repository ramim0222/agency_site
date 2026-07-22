<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Seed the SuperAdmin login user.
     *
     * Override via .env:
     *   ADMIN_NAME=Kiln Admin
     *   ADMIN_EMAIL=admin@kiln.studio
     *   ADMIN_PASSWORD=password
     */
    public function run(): void
    {
        $email = (string) env('ADMIN_EMAIL', 'admin@kiln.studio');
        $name = (string) env('ADMIN_NAME', 'Kiln Admin');
        $password = (string) env('ADMIN_PASSWORD', 'password');

        User::query()->updateOrCreate(
            ['email' => $email],
            [
                'name' => $name,
                'password' => $password,
                'email_verified_at' => now(),
            ],
        );

        $this->command?->info("Admin user ready: {$email}");
    }
}
