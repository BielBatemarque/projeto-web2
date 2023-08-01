import { Route, Routes } from "react-router-dom";
import { ListarFilmes } from '../../pages/ListarFilme/index';
import { CadastrarFilmes } from '../../pages/cadastrarFilmes/index';
import { LoginScreen } from "../../pages/LoginPage";
import { HomePage } from "../../pages/HomePage";
import { ListarAvaliacoes } from "../../pages/ListarAvaliacoes";
import { CadastrarUsuario } from "../../pages/CadastrarUsuario";
import { AvaliarFilme} from '../../pages/AvaliarFilme/index';
import { EditarFilmes } from "../../pages/EditarFilme";
import { EditarAvaliacao } from "../../pages/EditarAvaliacao";

export const Content = () => {
    return(
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/cadastrarFilme/" element={ <CadastrarFilmes />}/>
            <Route path="/HomePage/" element={<HomePage />} />
            <Route path="/listarFilmes/" element={<ListarFilmes />}/>
            <Route path="/ListarAvaliacoes/" element={<ListarAvaliacoes />}/>
            <Route path="cadastrarUsuario" element={<CadastrarUsuario />}/>
            <Route path="/avaliarFilme/:id" element={<AvaliarFilme />} />
            <Route path="/editarFilme/:id" element={<EditarFilmes />} />
            <Route path="/editarAvaliacao/:id" element={<EditarAvaliacao />}/>
        </Routes>        
    );
}