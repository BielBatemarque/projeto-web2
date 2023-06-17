<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FilmeController extends Controller
{
    public function listarFilmes(){
        //logica para buscar os filmes no banco de dados
    }

    public function cadastrarFilme(Request $request){
        // Lógica para cadastrar um filme
    }

    public function avaliarFilme(Request $request, $id){
        // Lógica para avaliar um filme com o ID fornecido
    }
}
