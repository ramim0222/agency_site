<?php

namespace Database\Seeders;

use App\Models\Lead;
use App\Models\LeadActivity;
use App\Models\User;
use Illuminate\Database\Seeder;

class LeadSeeder extends Seeder
{
    /**
     * Seed a realistic mix for the SuperAdmin dashboard.
     */
    public function run(): void
    {
        Lead::factory()->count(4)->today()->create();
        Lead::factory()->count(6)->thisWeek()->create();
        Lead::factory()->count(14)->create();

        $userId = User::query()->value('id');
        $sample = Lead::query()->latest()->take(5)->get();

        foreach ($sample as $index => $lead) {
            LeadActivity::query()->create([
                'lead_id' => $lead->id,
                'user_id' => $userId,
                'type' => ['note', 'call', 'email', 'whatsapp', 'note'][$index] ?? 'note',
                'body' => [
                    'Qualified — timeline fits this quarter.',
                    'Intro call done. Sending a scope outline.',
                    'Follow-up email with case studies.',
                    'WhatsApp ping — they asked about mobile.',
                    'Budget confirmed in the mid band.',
                ][$index] ?? 'Logged from seed.',
                'created_at' => now()->subHours($index + 1),
                'updated_at' => now()->subHours($index + 1),
            ]);
        }
    }
}
