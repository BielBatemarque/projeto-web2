<?php

namespace App\Http\Controllers;

use App\Models\Avaliacao;
use Illuminate\Http\Request;

class AvaliacaoController extends Controller{
    public function listarAvaliacoes(){
        $avaliacoes = Avaliacao::all();
        return response()->json($avaliacoes);
    }

    public function cadastrarAvaliacao(Request $request){
        $request->validate([
            'filme_id' => 'required',
            'user_id' => 'required',
            'nota' => 'required|integer',
            'descricao' => 'nullable|string',
        ]);

        $avaliacao = new Avaliacao();
        $avaliacao->filme_id = $request->input('filme_id');
        $avaliacao->user_id = $request->input('user_id');
        $avaliacao->nota = $request->input('nota');
        $avaliacao->descricao = $request->input('descricao');
        $avaliacao->save();

        return response()->json('Avaliação cadastrada com sucesso!');
    }

    public function editarAvaliacoes(Request $request, $id){
        // Primeiro, vamos validar os campos da requisição como no método de cadastro
        $request->validate([
            'filme_id' => 'required',
            'user_id' => 'required',
            'nota' => 'required|integer',
            'descricao' => 'nullable|string',
        ]);

        // Localize a avaliação a ser atualizada pelo seu ID
        $avaliacao = Avaliacao::find($id);

        // Verifique se a avaliação foi encontrada
        if (!$avaliacao) {
            return response()->json('Avaliação não encontrada!', 404);
        }

        // Atualize os campos da avaliação com os valores da requisição
        $avaliacao->filme_id = $request->input('filme_id');
        $avaliacao->user_id = $request->input('user_id');
        $avaliacao->nota = $request->input('nota');
        $avaliacao->descricao = $request->input('descricao');
        $avaliacao->save();

        return response()->json('Avaliação atualizada com sucesso!');

    }
}
