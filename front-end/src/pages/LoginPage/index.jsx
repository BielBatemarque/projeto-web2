import { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
    const [listUser, setListUser] = useState([]);
    const [login, setLogin] = useState({
        nome: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin((prevLogin) => ({
          ...prevLogin,
          [name]: value,
        }));
      };

      const handleListLogin = async () => {
        const api = 'http://localhost:8000/api/usuarios';
        const response = await fetch(api);
        const json = await response.json();

        setListUser(json);
      }

      const handleLogin = () => {
        const { nome, email } = login;
        const user = listUser.find((user) => user.nome === nome && user.email === email);
        if (user) {
           const url = window.location;
            window.location = url + 'homePage/';
          console.log('Usuário logado:', user);
        } else {
          console.log('Usuário não encontrado');
        }
      };

      useEffect(() => {
        handleListLogin();
      }, []);

      console.log(login, listUser);

    return(
        <div className="login-page">
           <div className="login">
            <h1 className='nomeSite'>FilmeFLix</h1>
                <div className='form'>
                    <input type="text" placeholder='Usuário' name='nome' onChange={handleChange}/>
                    <input type="text" name="email" id="email" placeholder='email' onChange={handleChange}/>
                    <button type="submit" className='btn' onClick={handleLogin}>Entrar</button>
                </div>
                <p className='cadastrese'>Não Possui conta? <Link to={'/cadastrarUsuario/'}>Cadastre-se</Link></p>
           </div>
           <div className="img">
                <h2 className='logo'>FilmeFlix</h2>
           </div>
        </div>
    );
}