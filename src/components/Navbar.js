import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faLock, faHome, faInfoCircle, faUsers, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { to: '/', text: 'Home', icon: faHome },
    { to: '/about', text: 'About', icon: faInfoCircle },
    { to: '/clubs', text: 'Club', icon: faUsers },
    { to: '/projects', text: 'Projet', icon: faProjectDiagram },
    { to: '/contact', text: 'Contact', icon: faEnvelope },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/images/youth.png" alt="Logo" style={{width: '40px'}} className="rounded-pill me-2" />
          YOUTH ACTIVISTS
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar}
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.to}>
                <Link 
                  to={item.to} 
                  className={`nav-link ${location.pathname === item.to ? 'active' : ''}`} 
                  onClick={() => setIsOpen(false)}
                >
                  <FontAwesomeIcon icon={item.icon} className="me-2" />
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="dropdown">
            <button 
              type="button" 
              className="btn btn-dark dropdown-toggle" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faCog} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link to="http://127.0.0.1:8000/login" className="dropdown-item" onClick={() => setIsOpen(false)}>
                  <FontAwesomeIcon icon={faLock} /> Espace Membre
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;