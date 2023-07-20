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
        ]);

        // Criar um novo filme com base nos dados recebidos
        $filme = new Filme();
        $filme->titulo = $request->input('titulo');
        $filme->descricao = $request->input('descricao');
        $filme->ano = $request->input('ano');
        $filme->save();

        return response()->json('Filme cadastrado com sucesso!');
    }

    public function avaliarFilme(Request $request, $id){
        // Lógica para avaliar um filme com o ID fornecido

        // Retorna uma resposta em JSON com uma mensagem de sucesso
        return response()->json(['mensagem' => 'Filme avaliado com sucesso']);
    }

    public function editarFilme(Request $request, $id)
    {
        // Encontre o filme pelo ID
        $filme = Filme::find($id);

        // Verifique se o filme foi encontrado
        if (!$filme) {
            return response()->json(['mensagem' => 'Filme não encontrado'], 404);
        }

        // Valide os dados atualizados
        $request->validate([
            'titulo' => 'required|string',
            'descricao' => 'required|string',
            'ano' => 'required|integer',
        ]);

        // Atualize os campos do filme com os dados recebidos
        $filme->titulo = $request->input('titulo');
        $filme->descricao = $request->input('descricao');
        $filme->ano = $request->input('ano');
        $filme->save();

        // Retorna uma resposta em JSON com uma mensagem de sucesso
        return response()->json(['mensagem' => 'Filme atualizado com sucesso']);
    }

}
