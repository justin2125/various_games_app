import React, { useState } from "react";
const Login = () => {
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const handleSubmit = () => {
    e.preventDefault()
    console.log(Email)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label for='Email'>Email: </label>
      <input value={Email} onChange={(e)}type='Email' placeholder='blahblah@aol.com' id='Email' name='Email'/>
      <label for='Password'>Password: </label>
      <input   value={Pass} onChange={(e)} type='Password' placeholder='**********' id='Password' name='Password'/>
      <button>Login</button>
    </form>
  )
}
export default Login