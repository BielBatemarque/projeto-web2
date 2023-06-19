import { useState } from 'react';
import './CadastrarUsuario.css';
import { useNavigate } from 'react-router-dom';

export const CadastrarUsuario = () => {
    const navigate = useNavigate();
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

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch('http://localhost:8000/api/usuarios', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoUser),
          });

          if (response.ok) {
            const data = await response.json();
            console.log(data); 
            setNovoUser({
              nome: '',
              email: '',
              senha: '',
            });
            navigate('/');
          } else {
            throw new Error('Erro ao cadastrar usuário');
          }
        } catch (error) {
          console.log(error.message);
        }
      };

     
      console.log(novoUser);


    return(
      <div className='form' onSubmit={handleSubmit}>
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