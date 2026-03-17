import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h4>Sri Lanka Reconciliation Movement</h4>
            <p>Building bridges of peace and healing across communities.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Our Projects</Link></li>
              <li><Link to="/join">Join Our Team</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Projects</h4>
            <ul>
              <li><Link to="/easter-attacks">Easter Attacks Recovery</Link></li>
              <li><Link to="/civil-war-survivors">Civil War Survivors</Link></li>
              <li><Link to="/projects">All Projects</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><Link to="/#contact">Contact Us</Link></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Donate</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Sri Lanka Reconciliation Movement. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
