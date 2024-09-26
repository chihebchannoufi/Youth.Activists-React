import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Youth Activists</h5>
          </div>
          <div className="col-md-6 text-md-end">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="text-white"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>&copy; 2024 Youth Activists. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;