import { useParams } from 'react-router-dom';
import './EditarAvaliacao.css';
import { useState, useEffect } from 'react';

export const EditarAvaliacao = () => {
  const { id } = useParams();
  console.log(id);

  const [avaliacao, setAvaliacao] = useState({
    filme_id: '',
    user_id: '',
    nota: '',
    descricao: '',
  });

  useEffect(() => {
    fetch(`http://localhost:8000/api/avaliacoes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAvaliacao(data);
      })
      .catch((error) => {
        console.error('Erro ao obter a avaliação:', error);
      });
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAvaliacao({
      ...avaliacao,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/api/avaliacoes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(avaliacao),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Avaliação atualizada com sucesso!', data);
      })
      .catch((error) => {
        console.error('Erro ao atualizar a avaliação:', error);
      });
  };

  return (
    <div className="editarAvaliacao">
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
        <button type="submit">Atualizar Avaliação</button>
      </form>
    </div>
  );
};