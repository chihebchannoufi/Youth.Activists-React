import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faLock } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

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
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/clubs" className="nav-link" onClick={() => setIsOpen(false)}>Club</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projet</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
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
                <Link to="/login" className="dropdown-item" onClick={() => setIsOpen(false)}>
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