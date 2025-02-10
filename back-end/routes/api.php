<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;


Route::post('/login', [ AuthController::class, 'login']);


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/crear-alumno', [StudentController::class, 'create']);
    Route::get('/consultar-alumno/{id}', [StudentController::class, 'show']);
});


