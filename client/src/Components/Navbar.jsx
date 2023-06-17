import React, { useContext } from 'react'
import { Link }              from 'react-router-dom';
import { AuthContext }       from '../Context/authContext.jsx';
import Logo                  from '../assets/img/logo.svg';
import WriteLogo             from '../assets/img/edit.png';

const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <Link to={'/'}>
                    <img src={Logo} alt=''/>
                </Link>
            </div>        
            
            <div className='links'>
                <Link className='link' to='/moments'>
                    <h6>Моменты</h6>
                </Link>
                <Link className='link' to='/'>
                    <h6>Статьи</h6>
                </Link>

                <Link to="/profile" className='link'>
                    <span>{currentUser?.username}</span>
                </Link>
                {currentUser ? (
                    <span onClick={logout} className='link'>Выйти</span>
                ) : (
                    <Link className="link" to="/login">
                        Войти
                    </Link>
                )}
                
                {/* <Link className="link" to='/writepost' >
                    <img className="logo" src={WriteLogo} alt="" />
                </Link> */}
                <Link className="link" to='/writepost'>Написать статью</Link>
            </div>        
        </div>
    </div>
  )
}

export default Navbar