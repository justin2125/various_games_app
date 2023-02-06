import React, { useState } from "react"
import {useNavigate} from "react-router-dom"

const Login = (props) => {
  let navigate = useNavigate()
  const [Email, setEmail] = useState('')
  const [Pass, setPass] = useState('')
  const handleSubmit = (E) => { 
    E.preventDefault()
    console.log(Email)
  }
  return (
    <div className="Auth-form-container" id="last">
      <form className="login" onSubmit={handleSubmit}>
        <label htmlforfor='Email'>Email: </label>
        <input value={Email} onChange={(E) => setEmail(E.target.value)} type='Email' placeholder='blahblah@aol.com' id='Email' name='Email'/>
        <label htmlforfor='Password'>Password: </label>
        <input   value={Pass} onChange={(E) => setPass(E.target.value)} type='Password' placeholder='**********' id='Password' name='Password'/>
        <button onClick={() => {navigate("/app")}} type="submit">Log in</button>
      </form>
    </div>
  )
}
export default Login