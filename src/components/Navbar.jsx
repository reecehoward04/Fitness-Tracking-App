import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className='navlinks'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/nutrition">Nutrition</Link></li>
            <li><Link to="/workouts">Workouts</Link></li>
            <li className='login-button'><Link>Log In</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
