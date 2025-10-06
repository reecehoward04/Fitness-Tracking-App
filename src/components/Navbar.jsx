import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import { useState } from 'react'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className='navlinks'>
            <li className='page-link' ><Link to="/">Home</Link></li>
            <li className='page-link' ><Link to="/dashboard">Dashboard</Link></li>
            <li className='page-link'><Link to="/nutrition">Nutrition</Link></li>
            <li className='page-link' ><Link to="/workouts">Workouts</Link></li>
            { !isLoggedIn && (
              <button className='login-button'><Link to="/login">Log In</Link></button>
            )}
            
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
