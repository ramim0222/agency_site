<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'resend' => [
        'key' => env('RESEND_KEY'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | WhatsApp lead notifications
    |--------------------------------------------------------------------------
    |
    | Optional webhook that receives a JSON payload whenever a new lead is
    | created from the contact form. Point this at CallMeBot, Twilio, Make,
    | n8n, or any WhatsApp Business API bridge. When empty, notifications
    | are written to the application log instead.
    |
    */
    'whatsapp' => [
        'notify_webhook' => env('WHATSAPP_NOTIFY_WEBHOOK'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Meta (Facebook) Pixel
    |--------------------------------------------------------------------------
    |
    | When set, the base pixel script loads site-wide and the thank-you page
    | fires a Lead conversion event after a successful quote submit.
    |
    */
    'facebook' => [
        'pixel_id' => env('FACEBOOK_PIXEL_ID'),
    ],

];
