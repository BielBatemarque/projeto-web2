import { useState } from 'react';
import { Menu } from '../../components/menu';

export const CadastrarFilmes = () => {
    const [filme, setFilme] = useState({
        titulo: '',
        descricao: '',
        ano: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFilme((prevFilme) => ({
          ...prevFilme,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
      
        fetch('http://localhost:8000/api/filmes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(filme),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data); // Exibir mensagem de sucesso
            // Limpar o formulário
            setFilme({
              titulo: '',
              descricao: '',
              ano: '',
            });
          })
          .catch((error) => {
            console.error(error); // Exibir mensagem de erro
          });
      };

    return(
      <div>
        <Menu />
        <form onSubmit={handleSubmit}>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
    );
};