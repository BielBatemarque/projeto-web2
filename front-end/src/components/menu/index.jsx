import './Menu.css';
import { MenuItem } from "../MenuItem";

export const Menu = () => {
    return(
        <nav className='navbar'>
          <MenuItem text={'Cadastrar Filme'} />
          <MenuItem text={'Listar Filme'} linkl={'/listarFilme/'}/>
        </nav>
    );
}