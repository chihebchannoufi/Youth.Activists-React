import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/message/store', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message envoyé avec succès');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur de communication avec le serveur');
    }
  };

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
                <a href="mailto:mustiyouthactivists@gmail.com" className="text-decoration-none text-dark">mustiyouthactivists@gmail.com</a>
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
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input id="name" name="name" type="text" className="form-control" placeholder="Name" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input id="email" name="email" type="email" className="form-control" placeholder="Email" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" className="form-control" placeholder="Message" rows="3" required value={formData.message} onChange={handleChange}></textarea>
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
