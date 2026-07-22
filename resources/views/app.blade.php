<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>Kiln — Product Engineering Studio</title>
        <meta name="description" content="Kiln builds web platforms, mobile apps, and SaaS products for businesses that need working software, not just a plan.">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="dark font-sans antialiased">
        @inertia
    </body>
</html>
