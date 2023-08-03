<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FilmeController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\AvaliacaoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//Rotas para Filmes
Route::get('/filmes', [FilmeController::class, 'listarFilmes']);
Route::post('/filmes', [FilmeController::class, 'cadastrarFilme']);
Route::post('/filmes/{id}/avaliar', [FilmeController::class, 'avaliarFilme']);
Route::put('/filmes/{id}/editar', [FilmeController::class, 'editarFilme']);
Route::delete('/filmes/{id}', [FilmeController::class, 'excluirFilme']);

//Rotas para Usuários
Route::get('/usuarios', [UsuarioController::class, 'index']);
Route::post('/usuarios', [UsuarioController::class, 'store']);
Route::get('/usuarios/{id}', [UsuarioController::class, 'show']);
Route::put('/usuarios/{id}', [UsuarioController::class, 'update']);
Route::delete('/usuarios/{id}', [UsuarioController::class, 'destroy']);

//Rota para Avaliação
Route::get('/avaliacoes', [AvaliacaoController::class, 'listarAvaliacoes']);
Route::post('/avaliacoes', [AvaliacaoController::class, 'cadastrarAvaliacao']);
Route::put('/avaliacoes/{id}', [AvaliacaoController::class, 'editarAvaliacoes']);
