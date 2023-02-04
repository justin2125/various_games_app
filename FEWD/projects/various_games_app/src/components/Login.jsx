const Login = () => {
  return (
    <form>
      <label for='Email'>Email: </label>
      <input type='Email' placeholder='blahblah@aol.com' id='Email' name='Email'/>
      <label for='Password'>Password: </label>
      <input type='Password' placeholder='**********' id='Password' name='Password'/>
    </form>
  )
}
export default Login