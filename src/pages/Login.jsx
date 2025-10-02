import '../css/Login.css'
import { useRef } from 'react'

// setup this basic structure for you 

const Login = () => {
  const usernameInputRef = useRef(); //use refs in react to access html elements
  const passwordInputRef = useRef();

  const handleLogin = () => {
    //can access refs in these functions using ref.current
    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;
    
  }

  const handleSignUp = () => {
    
  }

  return (
    <div className='login-page'>
      <h1>Fitness-Tracker</h1>
      <div className='login-container'>
        <input className='username-input' ref={usernameInputRef} type="text" placeholder='Username...' />
        <input className='password-input' ref={passwordInputRef} type="text" placeholder='Password...' />
        <button className='login-button' onClick={handleLogin} >Login</button>
        <button className='signup-button' onClick={handleSignUp} >Sign Up</button>
      </div>
    </div>
  )
}

export default Login
