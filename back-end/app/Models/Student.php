<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'name',
        'date_of_birth',
        'father_name',
        'mother_name',
        'date_of_entry',
        'grade_id',
        'section_id',
    ];


    public function grade()
    {
        return $this->belongsTo(Grade::class);
    }

    public function section()
    {
        return $this->belongsTo(Section::class);
    }

}
