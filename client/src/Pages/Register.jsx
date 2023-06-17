import React from "react";
import { useState }          from "react";
import { Link, useNavigate } from "react-router-dom";
import axios                 from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username:   "",
    email:      "",
    password:   "",
    repassword: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (inputs.password != inputs.repassword) {
        setError("Пароли не совпадают!");
        return null;
      }

      let apiUrl = 'http://localhost:8800/api/auth/register';
      await axios.post(apiUrl, inputs);
      
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };


  return (
    <div className='auth'>
        <h1>Регистрация</h1>
        <form>
            <input 
              required 
              type='text' 
              placeholder='Введите логин...'
              name="username"
              onChange={handleChange}
            />
            <input 
              required 
              type='text' 
              placeholder='Введите email...'
              name="email"
              onChange={handleChange}
            />
            <input 
              required 
              type='password' 
              placeholder='Введите пароль...'
              name="password"
              onChange={handleChange}
            />
            <input 
              required 
              type='password' 
              placeholder='Повторите пароль...'
              name="repassword"
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Зарегистрироваться</button>

            {err && <p>{err}</p>}

            <span>
                Уже имеете аккаунт? 
                <br/><Link className='link' to='/login'>Войти</Link>
            </span>
        </form>
    </div>
  )
}

export default Register