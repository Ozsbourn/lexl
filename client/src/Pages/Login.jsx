import axios                           from 'axios';
import React, { useState, useContext } from 'react';
import { Link, useNavigate }           from 'react-router-dom';
import { AuthContext }                 from "../Context/authContext";



const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });


  const [err, setError] = useState(null);
  const navigate        = useNavigate();
  const {login}         = useContext(AuthContext);


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(inputs);

      navigate('/');
    } catch (err) {
      setError(err.response.data);
    } 
  }



  return (
    <div className='auth'>
        <h1>Вход</h1>
        <form>
            <input required 
                   type='text' 
                   placeholder='Введите логин...'
                   name='username'
                   onChange={handleChange}
            />
            <input required 
                   type='password' 
                   placeholder='Введите пароль...'
                   name='password'
                   onChange={handleChange}
            />
            <button onClick={handleSubmit}>Войти</button>

            {err && <p>{err}</p>}

            <span>
                Ещё не имеете аккаунта? 
                <br/><Link className='link' to='/register'>Зарегистрироваться</Link>
            </span>
        </form>
    </div>
  )
}

export default Login