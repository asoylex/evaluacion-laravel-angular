<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
class StudentController extends Controller
{
    public function index()
    {
        return response()->json([
            'name' => 'Test User',
        ]);
    }

    public function create(Request $request)
    {
        try {
            $data = [

                'name' => $request->name,
                'father_name' => $request->father_name,
                'mother_name' => $request->mother_name,
                'date_of_birth' => $request->date_of_birth,
                'date_of_entry' => $request->date_of_entry,
                'grade_id' => $request->grade_id,
                'section_id' => $request->section_id,
            ];

            $student = Student::create($data);

            return response()->json($student);

        } catch (\Throwable $th) {
            return response()->json($th->getMessage());
        }
    }


    public function show($id)
    {
        try {
            $student = Student::with('grade', 'section')->where('grade_id', $id)->get();
            return response()->json($student);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage());
        }
    }
}
