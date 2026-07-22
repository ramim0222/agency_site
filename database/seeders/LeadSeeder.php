<?php

namespace Database\Seeders;

use App\Models\Lead;
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
    }
}
