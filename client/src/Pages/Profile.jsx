import React,
     { useState } from 'react'

function Profile() {
  const [username, setUsername] = useState('');
  const [img, setImg] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    // <div className='profile'>
    //   <img src="" alt="" />
    // </div>

    <div className='updateDataHandler'>
      <input 
        type="text"
        id='username'
      />
      <input 
        type="file"
        id='usernameImg'
      />

      <button 
        className='button'
        onClick={submitHandler}
      >
        Сохранить
      </button>
    </div>
  )
}

export default Profile