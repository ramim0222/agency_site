<?php

require __DIR__.'/vendor/autoload.php';
$app = require __DIR__.'/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$samples = [
    ['facebook', 'paid_social', 'fb-retarget-q2', '/landing/saas-starter', 'won'],
    ['facebook', 'paid_social', 'fb-retarget-q2', '/landing/saas-starter', 'new'],
    ['facebook', 'paid_social', 'fb-lookalike-saas', '/landing/website-refresh', 'quoted'],
    ['google', 'cpc', 'g-brand-search', '/landing/mobile-mvp', 'won'],
    ['google', 'cpc', 'g-brand-search', '/landing/mobile-mvp', 'contacted'],
    ['google', 'cpc', 'g-demo-request', '/contact', 'lost'],
    ['organic', 'seo', null, '/landing/website-refresh', 'new'],
];

foreach ($samples as [$source, $medium, $campaign, $landing, $status]) {
    App\Models\Lead::factory()->create([
        'utm_source' => $source,
        'utm_medium' => $medium,
        'utm_campaign' => $campaign,
        'landing_page' => $landing,
        'status' => $status,
        'created_at' => now()->subDays(rand(1, 20)),
        'updated_at' => now(),
    ]);
}

echo 'leads='.App\Models\Lead::count().PHP_EOL;
