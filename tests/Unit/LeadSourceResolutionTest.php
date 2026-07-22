<?php

use App\Models\Lead;

test('lead source resolves from utm and referrer signals', function () {
    expect(Lead::resolveSource('facebook', 'cpc', null))->toBe('facebook');
    expect(Lead::resolveSource('google', 'cpc', null))->toBe('google');
    expect(Lead::resolveSource('whatsapp', 'direct', null))->toBe('whatsapp');
    expect(Lead::resolveSource('organic', 'seo', null))->toBe('organic');
    expect(Lead::resolveSource(null, null, 'https://partner.example.com/list'))->toBe('referral');
    expect(Lead::resolveSource(null, null, null))->toBe('other');
});
