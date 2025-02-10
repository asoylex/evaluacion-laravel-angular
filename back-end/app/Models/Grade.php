<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    protected $fillable = [
        'name',
    ];

    public function sections()
    {
        return $this->hasMany(Section::class);
    }

    public function students()
    {
        return $this->hasMany(Student::class);
    }
}
