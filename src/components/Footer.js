import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

function Footer() {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();

  return (
    <footer className="text-white py-4" style={{ 
      backgroundColor: '#009aa4',
      borderTop: isDarkMode ? '1px solid #404040' : 'none'
    }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Youth Activists</h5>
            <p>{t('footer.slogan')}</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>{t('footer.quickLinks')}</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-white text-decoration-none">{t('navbar.about')}</Link></li>
              <li><Link to="/projects" className="text-white text-decoration-none">{t('navbar.projects')}</Link></li>
              <li><Link to="/events" className="text-white text-decoration-none">{t('navbar.events')}</Link></li>
              <li><Link to="/join" className="text-white text-decoration-none">{t('navbar.join')}</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>{t('footer.followUs')}</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/YouthActivistsOrganisation" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="https://x.com/home" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://www.instagram.com/youth_activist/" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://www.linkedin.com/feed/" className="text-white" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </div>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="text-center">
          <p className="mb-0">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;