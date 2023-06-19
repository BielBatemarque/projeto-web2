import './Menu.css';
import { MenuItem } from "../MenuItem";

export const Menu = () => {
    return(
        <nav className='navbar'>
          <MenuItem text={'Filmes'} linkl={'/listarFilmes/'}/>
          <MenuItem text={'Avaliações'} linkl={'/listarAvaliacoes/'}/>
        </nav>
    );
}