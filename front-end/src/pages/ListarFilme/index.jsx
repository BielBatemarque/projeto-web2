import { useEffect, useState } from 'react';
import './listarFilmes.css';

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
            {filmes.map(filme => (
                <p>{filme.titulo}</p>
            ))}
        </div>
    );
}