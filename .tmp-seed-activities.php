<?php

require __DIR__.'/vendor/autoload.php';
$app = require __DIR__.'/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$userId = App\Models\User::query()->value('id');
$leads = App\Models\Lead::query()->latest()->take(3)->get();
$types = ['note', 'call', 'whatsapp'];
$bodies = [
    'Qualified — good fit for this quarter.',
    'Intro call done. Sending scope outline.',
    'WhatsApp follow-up sent with case studies.',
];

foreach ($leads as $index => $lead) {
    App\Models\LeadActivity::query()->create([
        'lead_id' => $lead->id,
        'user_id' => $userId,
        'type' => $types[$index] ?? 'note',
        'body' => $bodies[$index] ?? 'Logged activity.',
        'created_at' => now()->subHours($index + 1),
        'updated_at' => now(),
    ]);
}

echo 'activities='.App\Models\LeadActivity::count().PHP_EOL;
