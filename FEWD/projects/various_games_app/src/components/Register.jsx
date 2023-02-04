import React, { useState } from "react"
const Register = (props) => {
  const [Email, setEmail] = useState('')
  const [Pass, setPass] = useState('')
  const [name,setName] = useState('')
  const handleSubmit = (E) => { 
    E.preventDefault()
    console.log(Email)
  }
  return (
    <div className="Auth-form-container">
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Full name</label>
      <input value={name} name='name' id='name' placeholder='full name'/>
      <label htmlfor='Email'>Email: </label>
      <input value={Email} onChange={(E) => setEmail(E.target.value)} type='Email' placeholder='blahblah@aol.com' id='Email' name='Email'/>
      <label htmlfor='Password'>Password: </label>
      <input   value={Pass} onChange={(E) => setPass(E.target.value)} type='Password' placeholder='**********' id='Password' name='Password'/>
      <button type="submit">Log in</button>
    </form>
    <button onClick={() => props.onFormSwitch('Login')}>Dont have an account? register.</button>
    </div>
  )
}
export default Register 