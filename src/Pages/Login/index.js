import React from 'react';
import axios from 'axios';

export default function Login() {

  const onClick = () => axios.post();

  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <label htmlFor='username'>User Name</label>
        <input type='text' name='username' id='username' data-testid='username-input'/>
        <label htmlFor='password'>Password</label>
        <input type='text' name='password' id='password' data-testid='password-input'/>
        <button type='button' onClick={onClick}>Sign in</button>
      </form>
    </div>

  )
}
