import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

export const EditarFilmes = () => {
    const [filme, setFilme] = useState({
      titulo: '',
      descricao: '',
      ano: '',
    });
  
    // Obtenha o ID do filme da URL usando o hook useParams
    const { id } = useParams();
  
    // Use o hook useEffect para buscar os dados do filme a ser editado quando o componente for montado
    useEffect(() => {
      fetch(`http://localhost:8000/api/filmes/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setFilme(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [id]);
  
    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch(`http://localhost:8000/api/filmes/${id}/editar`, {
          method: 'PUT', // Use o método PUT para atualizar o filme
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(filme),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data); // Exibir mensagem de sucesso
          })
          .catch((error) => {
            console.error(error); // Exibir mensagem de erro
          });
      };
  
    // Função para lidar com as mudanças nos campos do formulário
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFilme((prevFilme) => ({
        ...prevFilme,
        [name]: value,
      }));
    };
  
    return (
      <>
        <h1>Editar Filme:</h1>
        <form className='editar-filme' onSubmit={handleSubmit}>
          <div>
            <label>Título:</label>
            <input
              type="text"
              name="titulo"
              value={filme.titulo}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Descrição:</label>
            <textarea
              name="descricao"
              value={filme.descricao}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label>Ano:</label>
            <input
              type="number"
              name="ano"
              value={filme.ano}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Salvar</button>
        </form>
      </>
    );
  };