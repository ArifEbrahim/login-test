import React from 'react'

export default function Login() {
  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <label htmlFor='username'>User Name</label>
        <input type='text' name='username' id='username' data-testid='username-input'/>
        <label htmlFor='password'>Password</label>
        <input type='text' name='password' id='password' data-testid='password-input'/>
      </form>
    </div>

  )
}
