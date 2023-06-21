import { useEffect, useState } from 'react';
import { Menu } from '../../components/menu';
import './ListarAvaliacoes.css';

export const ListarAvaliacoes = () => {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [filmes, setFilmes] = useState([]);

  const handleSubmiteAvaliacoes = async () => {
    const request = await fetch('http://localhost:8000/api/avaliacoes');
    const response = await request.json();

    setAvaliacoes(response);
  }

  const handleSubmiteFilmes = async () => {
    const request = await fetch('http://localhost:8000/api/filmes');
    const response = await request.json();

    setFilmes(response);
  }

  useEffect(() => {
    handleSubmiteAvaliacoes();
    handleSubmiteFilmes();
  }, []);

  console.log(avaliacoes);
  console.log(filmes);

  const findFilmeTitulo = (filmeId) => {
    const filme = filmes.find(filme => filme.id === filmeId);
    return filme ? filme.titulo : '';
  }
  return (
    <div className='listarAvaliacoes'>
      <Menu />
      <div className="content">
        {avaliacoes.map(avaliacao => (
          <div className='avaliacao-info' key={avaliacao.id}>
            <p>{findFilmeTitulo(avaliacao.filme_id)}</p>
            <p>{avaliacao.nota}</p>
            <p>{avaliacao.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );

}