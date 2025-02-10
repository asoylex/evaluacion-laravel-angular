<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $fillable = [
        'name',
    ];

    public function grade()
    {
        return $this->belongsTo(Grade::class);
    }

    public function students()
    {
        return $this->hasMany(Student::class);
    }
}
