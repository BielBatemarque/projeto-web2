import { useEffect, useState } from 'react';
import './listarFilmes.css';
import { Menu } from '../../components/menu';
import { Link } from 'react-router-dom';

export const ListarFilmes = () => {
    const [filmes, setFilmes] = useState([]);

    
    const handleFetchFilmes = async () => {
        const api = 'http://localhost:8000/api/filmes';
        const response = await fetch(api);
        const json = await response.json();
        
        setFilmes(json);
    }
    
    useEffect(() => {
        handleFetchFilmes();
    }, []);

    const handleExcluirFilme = async (id) => {
        try {
          await fetch(`http://localhost:8000/api/filmes/${id}`, {
            method: 'DELETE',
          });
          handleFetchFilmes();
        } catch (error) {
          console.error('Erro ao excluir filme:', error);
        }
      };
    
    return(
        <div>
            {filmes.map(filme => (
                <div key={filme.id}>
                    <p key={filme.id}>{filme.titulo}</p>
                    <Link to={`/avaliarFilme/:${filme.id}`}>Avaliar Filme</Link><br />
                    <Link to={`/editarFilme/${filme.id}`}>Editar Filme</Link> <br />
                    <button onClick={() => handleExcluirFilme(filme.id)}>Excluir Filme</button>
                </div>
            ))}
            <Link to={'/cadastrarFilme/'}>Cadastrar Novo Filme</Link>
        </div>
    );
}