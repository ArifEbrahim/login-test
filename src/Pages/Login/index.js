import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const url = 'https://api.bybits.co.uk/auth/token'
  const headers = {
    'environment': 'mock',
    'Content-Type': 'application/json'
  }

  const handleClick = () => {
    const data = {
      username, 
      password,
      "type":"USER_PASSWORD_AUTH"
    }
    axios.post(url, headers, data)
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <label htmlFor='username'>User Name</label>
        <input type='text' id='username' data-testid='username-input' onChange={(e) => setUsername(e.target.value)} value={username}/>
        <label htmlFor='password'>Password</label>
        <input type='text' id='password' data-testid='password-input'onChange={(e) => setPassword(e.target.value)} value={password}/>
        <button type='button' onClick={handleClick}>Sign in</button>
      </form>
    </div>

  )
}
