import { useParams } from 'react-router-dom';
import './EditarAvaliacao.css';

export const EditarAvaliacao = () => {
    const { id } = useParams();
    console.log(id);
    return(
        <div className="editarAvaliacao">
            <form >
        <div>
          <label>
            Filme ID:
            <input
              type="text"
              name="filme_id"
            />
          </label>
        </div>
        <div>
          <label>
            User ID:
            <input
              type="text"
              name="user_id"
            />
          </label>
        </div>
        <div>
          <label>
            Nota:
            <input
              type="number"
              name="nota"
            />
          </label>
        </div>
        <div>
          <label>
            Descrição:
            <textarea
              name="descricao"
            ></textarea>
          </label>
        </div>
        <button type="submit">Avaliar</button>
      </form>
        </div>
    );
}