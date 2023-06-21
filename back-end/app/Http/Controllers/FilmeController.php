<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Filme;

class FilmeController extends Controller{
    public function listarFilmes(){
        $filmes = Filme::all();
        return response()->json($filmes);
    }

    public function cadastrarFilme(Request $request){
        $request->validate([
            'titulo' => 'required|string',
            'descricao' => 'required|string',
            'ano' => 'required|integer',
            'imagem' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Criar um novo filme com base nos dados recebidos
        $filme = new Filme();
        $filme->titulo = $request->input('titulo');
        $filme->descricao = $request->input('descricao');
        $filme->ano = $request->input('ano');

        if ($request->hasFile('imagem')) {
            $imagem = $request->file('imagem');
            $nomeImagem = time() . '_' . $imagem->getClientOriginalName();
            $caminhoImagem = $imagem->storeAs('imagens', $nomeImagem, 'public');
            $filme->imagem = $caminhoImagem;
        }

        $filme->save();

        return response()->json('Filme cadastrado com sucesso!');

    }

    public function avaliarFilme(Request $request, $id){
        // Lógica para avaliar um filme com o ID fornecido

        // Retorna uma resposta em JSON com uma mensagem de sucesso
        return response()->json(['mensagem' => 'Filme avaliado com sucesso']);
    }
}
