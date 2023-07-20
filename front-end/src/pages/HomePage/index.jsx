import './styles.css';
import cine from '../../assets/cinema.jpg';

export const HomePage = () => {
    return(
        <div className="HomePage">
                <h1>FilmeFlix</h1>
            <div className="homeContent">
                <div className="dv1">
                    <h3>App de Avaliação de Filmes</h3>
                    <div className="txt">
                        <p>Com FilmeFLix você pode adicionar Avaliação a filmes do momento, deixando sua nota e suas consideração a respeito do filme</p>
                    </div>
                </div>
                <div className="dv1"> 
                     <img src={cine} alt="imagem cinema"  className="cinema"/>
                </div>
            </div>
        </div>
    );
}