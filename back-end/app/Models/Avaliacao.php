<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Avaliacao extends Model{
    use HasFactory;
    protected $table = 'avaliacoes';

    protected $fillable = ['filme_id', 'user_id', 'nota', 'descricao'];

    public function filme(){
        return $this->belongsTo(Filme::class, 'filme_id');
    }

    public function usuario(){
        return $this->belongsTo(Usuario::class, 'user_id');
    }
}
