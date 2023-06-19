import { useState } from 'react';
import './CadastrarUsuario.css';

export const CadastrarUsuario = () => {
    const [novoUser, setNovoUser] = useState({
        nome:'',
        email:'',
        senha: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNovoUser((prevLogin) => ({
          ...prevLogin,
          [name]: value,
        }));
      };

      console.log(novoUser);


    return(
      <div className='form'>
        <h1>Cadastrar Novo Usuário</h1>
        <form action="" className='formCadastrar'>
            <input type="text" name='nome' placeholder='Nome de usuários' onChange={handleChange}/>
            <input type="email" name="email" id="email" placeholder='Email' onChange={handleChange}/>
            <input type="password" name='senha' id='senha' placeholder='senha' onChange={handleChange}/>
            <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
}