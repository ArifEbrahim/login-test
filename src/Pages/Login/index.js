import React from 'react'

export default function Login() {
  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <label htmlFor='username'>User Name</label>
        <input type='text' name='username' id='username' data-testid='user-name-input'/>
      </form>
    </div>

  )
}
