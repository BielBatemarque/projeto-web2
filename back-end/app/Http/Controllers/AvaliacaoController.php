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
}
