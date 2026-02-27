import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, faInfoCircle, faUsers, 
  faProjectDiagram, faEnvelope, faCalendarAlt, faHandshake, 
  faUserPlus, faLanguage, faMoon, faSun
} from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { to: '/', text: t('navbar.home'), icon: faHome },
    { to: '/about', text: t('navbar.about'), icon: faInfoCircle },
    { to: '/projects', text: t('navbar.projects'), icon: faProjectDiagram },
    { to: '/events', text: t('navbar.events'), icon: faCalendarAlt },
    { to: '/partners', text: t('navbar.partners'), icon: faHandshake },
    { to: '/join', text: t('navbar.join'), icon: faUserPlus },
    { to: '/contact', text: t('navbar.contact'), icon: faEnvelope },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#009aa4' }}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/images/youth.png" alt="Logo" style={{width: '40px'}} className="rounded-pill me-2" />
          <span className="d-none d-md-inline">YOUTH ACTIVISTS</span>
          <span className="d-inline d-md-none">YA</span>
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
          <div className="d-flex align-items-center gap-2">
            {/* Language Toggle */}
            <button 
              className="btn btn-outline-light btn-sm" 
              onClick={toggleLanguage}
              title={language === 'ar' ? 'Switch to French' : 'Passer à l\'arabe'}
            >
              <FontAwesomeIcon icon={faLanguage} className="me-1" />
              {language === 'ar' ? 'FR' : 'AR'}
            </button>
            {/* Dark Mode Toggle */}
            <button 
              className="btn btn-outline-light btn-sm" 
              onClick={toggleTheme}
              title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;