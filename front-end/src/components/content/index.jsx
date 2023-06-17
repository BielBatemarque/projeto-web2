import { Route, Routes } from "react-router-dom";
import { ListarFilmes } from '../../pages/ListarFilme/index';
import { CadastrarFilmes } from '../../pages/cadastrarFilmes/index';

export const Content = () => {
    return(
        <Routes>
            <Route path="/cadastrarFilme/" element={ <CadastrarFilmes />}/>
            <Route path="/listarFilme/" element={<ListarFilmes />}/>
        </Routes>        
    );
}