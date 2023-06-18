<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;

class UsuarioController extends Controller{
    public function index(){
        $usuarios = Usuario::all();
        return response()->json($usuarios);
    }

    public function store(Request $request){
        $request->validate([
            'nome' => 'required|string',
            'email' => 'required|email|unique:usuarios',
            'senha' => 'required|string',
        ]);

        $usuario = Usuario::create($request->all());
        return response()->json($usuario, 201);
    }

    public function show($id){
        $usuario = Usuario::findOrFail($id);
        return response()->json($usuario);
    }

    public function update(Request $request, $id){
        $usuario = Usuario::findOrFail($id);

        $request->validate([
            'nome' => 'required|string',
            'email' => 'required|email|unique:usuarios,email,' . $id,
            'senha' => 'required|string',
        ]);

        $usuario->update($request->all());
        return response()->json($usuario);
    }

    public function destroy($id){
        $usuario = Usuario::findOrFail($id);
        $usuario->delete();
        return response()->json('Usuário removido com sucesso');
    }
}
