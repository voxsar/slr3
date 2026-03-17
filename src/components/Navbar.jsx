import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const closeMenu = () => setMenuOpen(false)

  const handleContactClick = (e) => {
    e.preventDefault()
    closeMenu()
    navigate('/')
    setTimeout(() => {
      const el = document.getElementById('contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/images/icon.png" alt="SLRM Logo" className="logo-img" />
            <span className="logo-text">Sri Lanka Reconciliation Movement</span>
          </Link>
          <ul className={`nav-menu${menuOpen ? ' active' : ''}`}>
            <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
            <li><NavLink to="/projects" onClick={closeMenu}>Our Projects</NavLink></li>
            <li><NavLink to="/join" onClick={closeMenu}>Join Our Team</NavLink></li>
            <li>
              <a href="#contact" className="btn-contact" onClick={handleContactClick}>Contact</a>
            </li>
          </ul>
          <div
            className={`hamburger${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
