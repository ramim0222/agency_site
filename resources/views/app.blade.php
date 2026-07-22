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

        @if (filled(config('services.facebook.pixel_id')))
            {{-- Meta Pixel base — Lead conversion fires client-side on /thank-you --}}
            <script>
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', @json(config('services.facebook.pixel_id')));
                fbq('track', 'PageView');
            </script>
            <noscript>
                <img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id={{ config('services.facebook.pixel_id') }}&ev=PageView&noscript=1"
                    alt=""
                />
            </noscript>
        @endif
    </head>
    <body class="dark font-sans antialiased">
        @inertia
    </body>
</html>
