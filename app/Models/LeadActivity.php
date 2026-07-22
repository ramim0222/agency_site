<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class LeadActivity extends Model
{
    public const TYPES = [
        'note',
        'call',
        'email',
        'whatsapp',
    ];

    /**
     * @var list<string>
     */
    protected $fillable = [
        'lead_id',
        'user_id',
        'type',
        'body',
    ];

    public function lead(): BelongsTo
    {
        return $this->belongsTo(Lead::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public static function typeLabel(string $type): string
    {
        return match ($type) {
            'note' => 'Note',
            'call' => 'Call',
            'email' => 'Email',
            'whatsapp' => 'WhatsApp',
            default => Str::headline($type),
        };
    }
}
