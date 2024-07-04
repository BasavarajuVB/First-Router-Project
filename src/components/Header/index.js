// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="navbar">
      <div className="logo-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="logo"
        />
        <p className="menu-item logo-text">Wave</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="menu-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="menu-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="menu-item">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
