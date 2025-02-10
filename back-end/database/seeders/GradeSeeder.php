<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $grades = ['1ro', '2do', '3ro', '4to', '5to', '6to'];

        foreach ($grades as $grade) {
            \App\Models\Grade::create(['name' => $grade]);
        }
    }
}
