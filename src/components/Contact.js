import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div id="section4" className="container py-5">
      <header className="text-center mb-5">
        <h2 className="display-4">Get in touch</h2>
        <p className="lead">Do you have a project in your mind? Contact Us here</p>
      </header>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Find Us</h3>
              <div className="mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <a href="mailto:example@email.com" className="text-decoration-none text-dark">mustiyouthactivists@gmail.com</a>
              </div>
              <div>
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                <span>+216 92 301 305</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form action="/message/store" method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input id="name" name="name" type="text" className="form-control" placeholder="Name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input id="email" name="email" type="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" className="form-control" placeholder="Message" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send
                  <FontAwesomeIcon icon={faPaperPlane} className="ms-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;