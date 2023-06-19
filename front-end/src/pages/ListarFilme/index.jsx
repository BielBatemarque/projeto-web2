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
        console.log(filmes);
    }, []);
    
    return(
        <div>
            <Menu />
            {filmes.map(filme => (
                <p>{filme.titulo}</p>
                
            ))}
            <Link to={'/CadastrarFilme/'}>Cadastrar Novo Filme</Link>
        </div>
    );
}