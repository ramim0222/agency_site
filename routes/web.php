<?php

use App\Http\Controllers\Front\ContactController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SuperAdmin\DashboardController;
use App\Http\Controllers\SuperAdmin\LeadController;
use App\Http\Controllers\SuperAdmin\SourceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Front/Home');
})->name('home');

Route::get('/services/web-development', function () {
    return Inertia::render('Front/ServicesWebDevelopment');
})->name('services.web-development');

Route::get('/services/web-apps', function () {
    return Inertia::render('Front/ServicesWebApps');
})->name('services.web-apps');

Route::get('/portfolio', function () {
    return Inertia::render('Front/Portfolio');
})->name('portfolio');

Route::get('/portfolio/{slug}', function (string $slug) {
    $projects = require resource_path('data/front/portfolio.php');
    $exists = collect($projects)->contains(fn (array $project) => ($project['slug'] ?? null) === $slug);

    if (! $exists) {
        abort(404);
    }

    // Full case-study body lives in resources/js/data/front/portfolio.js
    return Inertia::render('Front/PortfolioShow', [
        'slug' => $slug,
    ]);
})->name('portfolio.show');

Route::get('/saas', function () {
    return Inertia::render('Front/Saas');
})->name('saas');

Route::get('/saas/category/{category}', function (string $category) {
    $registry = require resource_path('data/front/saas.php');

    if (! in_array($category, $registry['categories'], true)) {
        abort(404);
    }

    return Inertia::render('Front/SaasCategory', [
        'categorySlug' => $category,
    ]);
})->name('saas.category');

Route::get('/saas/{slug}', function (string $slug) {
    $registry = require resource_path('data/front/saas.php');

    if (! in_array($slug, $registry['products'], true)) {
        abort(404);
    }

    return Inertia::render('Front/SaasShow', [
        'slug' => $slug,
    ]);
})->name('saas.show');

Route::get('/contact', [ContactController::class, 'show'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])
    ->middleware('throttle:8,1')
    ->name('contact.store');
Route::get('/thank-you', [ContactController::class, 'thankYou'])->name('thank-you');

Route::middleware('auth')->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');

    Route::get('/leads', [LeadController::class, 'index'])->name('leads.index');
    Route::get('/leads/export', [LeadController::class, 'export'])->name('leads.export');
    Route::patch('/leads/bulk-status', [LeadController::class, 'bulkUpdateStatus'])->name('leads.bulk-status');
    Route::patch('/leads/{lead}/status', [LeadController::class, 'updateStatus'])->name('leads.status');
    Route::post('/leads/{lead}/activities', [LeadController::class, 'storeActivity'])->name('leads.activities.store');
    Route::patch('/leads/{lead}/archive', [LeadController::class, 'archive'])->name('leads.archive');
    Route::patch('/leads/{lead}/restore', [LeadController::class, 'restore'])->name('leads.restore');
    Route::delete('/leads/{lead}', [LeadController::class, 'destroy'])->name('leads.destroy');
    Route::get('/leads/{lead}', [LeadController::class, 'show'])->name('leads.show');

    Route::get('/sources', [SourceController::class, 'index'])->name('sources.index');
});

// Legacy Breeze dashboard name — send authenticated users to the ops desk.
Route::middleware('auth')->get('/dashboard', function () {
    return redirect()->route('admin.dashboard');
})->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
