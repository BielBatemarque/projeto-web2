<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAvaliacoesTable extends Migration{
    public function up(){
        Schema::create('avaliacoes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('filme_id');
            $table->unsignedBigInteger('user_id');
            $table->integer('nota');
            $table->text('descricao')->nullable();
            $table->timestamps();

            // Defina as chaves estrangeiras
            $table->foreign('filme_id')->references('id')->on('filmes')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('usuarios')->onDelete('cascade');
        });
    }

    public function down(){
        Schema::dropIfExists('avaliacoes');
    }
}
