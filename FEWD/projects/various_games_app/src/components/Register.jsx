import React, { useState } from "react"
const Register = () => {
  const [Email, setEmail] = useState('')
  const [Pass, setPass] = useState('')
  const [name,setName] = useState('')
  const handleSubmit = (E) => { 
    E.preventDefault()
    console.log(Email)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Full name</label>
      <label htmlfor='Email'>Email: </label>
      <input value={Email} onChange={(E) => setEmail(E.target.value)} type='Email' placeholder='blahblah@aol.com' id='Email' name='Email'/>
      <label htmlfor='Password'>Password: </label>
      <input   value={Pass} onChange={(E) => setPass(E.target.value)} type='Password' placeholder='**********' id='Password' name='Password'/>
      <button type="submit">Log in</button>
    </form>
  <button> Dont have an account? register here.</button>
    </>

  )
}
export default Register 