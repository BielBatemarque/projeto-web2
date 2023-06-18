import { Route, Routes } from "react-router-dom";
import { ListarFilmes } from '../../pages/ListarFilme/index';
import { CadastrarFilmes } from '../../pages/cadastrarFilmes/index';
import { LoginScreen } from "../../pages/LoginPage";
import { HomePage } from "../../pages/HomePage";

export const Content = () => {
    return(
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/cadastrarFilme/" element={ <CadastrarFilmes />}/>
            <Route path="/listarFilme/" element={<ListarFilmes />}/>
            <Route path="/HomePage/" element={<HomePage />} />
        </Routes>        
    );
}