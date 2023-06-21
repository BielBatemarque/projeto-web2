import { useState } from 'react';
import { Menu } from '../../components/menu/index';

export const AvaliarFilme = () => {
  const [avaliacao, setAvaliacao] = useState({
    filme_id: '', // ID do filme a ser avaliado
    user_id: '', // ID do usuário que está realizando a avaliação
    nota: '',
    descricao: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAvaliacao((prevAvaliacao) => ({
      ...prevAvaliacao,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8000/api/avaliacoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(avaliacao),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAvaliacao({
          filme_id: '',
          user_id: '',
          nota: '',
          descricao: '',
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="avaliarFilme">
      <Menu />
      <h1>Avaliar Filmes</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Filme ID:
            <input
              type="text"
              name="filme_id"
              value={avaliacao.filme_id}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            User ID:
            <input
              type="text"
              name="user_id"
              value={avaliacao.user_id}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Nota:
            <input
              type="number"
              name="nota"
              value={avaliacao.nota}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Descrição:
            <textarea
              name="descricao"
              value={avaliacao.descricao}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <button type="submit">Avaliar</button>
      </form>
    </div>
  );
};