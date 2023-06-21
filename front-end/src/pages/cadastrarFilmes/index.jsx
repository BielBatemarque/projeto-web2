import { useState } from 'react';
import { Menu } from '../../components/menu';

export const CadastrarFilmes = () => {
    const [filme, setFilme] = useState({
        titulo: '',
        descricao: '',
        ano: '',
        imagem:'',
      });

      const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
          setFilme((prevFilme) => ({
            ...prevFilme,
            [name]: files[0],
          }));
        } else {
          setFilme((prevFilme) => ({
            ...prevFilme,
            [name]: value,
          }));
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append('titulo', filme.titulo);
        formData.append('descricao', filme.descricao);
        formData.append('ano', filme.ano);
        formData.append('imagem', filme.imagem);
      
        fetch('http://localhost:8000/api/filmes', {
          method: 'POST',
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data); // Exibir mensagem de sucesso
            // Limpar o formulário
            setFilme({
              titulo: '',
              descricao: '',
              ano: '',
              imagem: '',
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