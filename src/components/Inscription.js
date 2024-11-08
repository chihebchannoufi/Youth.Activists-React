import React, { useState } from 'react';

function Inscription() {
  // État pour gérer les champs du formulaire
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    lieu: '',
    residence: '',
    genre: '',
    mail: '',
    tel: '',
    org: '',
    competence: '',
    experience: '',
    confirmation: ''
  });

  // Fonction pour mettre à jour l'état lors de la saisie
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/inscription/store', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données :', error);
      alert("Une erreur s'est produite lors de l'envoi du formulaire.");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Inscription</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name="name" id="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label htmlFor="date" className="form-label">Date de naissance</label>
          <input type="date" className="form-control" name="date" id="date" value={formData.date} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label htmlFor="lieu" className="form-label">Lieu de naissance</label>
          <input type="text" className="form-control" name="lieu" id="lieu" value={formData.lieu} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label htmlFor="residence" className="form-label">Lieu de résidence</label>
          <input type="text" className="form-control" name="residence" id="residence" value={formData.residence} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Genre :</label>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genre" id="male" value="Homme" checked={formData.genre === "Homme"} onChange={handleChange} required />
              <label className="form-check-label" htmlFor="male">Homme</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genre" id="female" value="Femme" checked={formData.genre === "Femme"} onChange={handleChange} required />
              <label className="form-check-label" htmlFor="female">Femme</label>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <label htmlFor="mail" className="form-label">E-mail</label>
          <input type="email" className="form-control" name="mail" id="mail" value={formData.mail} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label htmlFor="tel" className="form-label">Numéro de téléphone</label>
          <input type="tel" className="form-control" name="tel" id="tel" value={formData.tel} onChange={handleChange} required />
        </div>

        <div className="col-12">
          <label htmlFor="org" className="form-label">Pourquoi souhaitez-vous rejoindre l'organisation ?</label>
          <textarea className="form-control" name="org" id="org" rows="3" value={formData.org} onChange={handleChange} required></textarea>
        </div>

        <div className="col-12">
          <label htmlFor="competence" className="form-label">Avez-vous des compétences? Mentionnez-les</label>
          <textarea className="form-control" name="competence" id="competence" rows="2" value={formData.competence} onChange={handleChange}></textarea>
        </div>

        <div className="col-12">
          <label className="form-label">Avez-vous de l'expérience dans la société civile ?</label>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="experience" id="experience_oui" value="oui" checked={formData.experience === "oui"} onChange={handleChange} required />
              <label className="form-check-label" htmlFor="experience_oui">Oui</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="experience" id="experience_non" value="non" checked={formData.experience === "non"} onChange={handleChange} required />
              <label className="form-check-label" htmlFor="experience_non">Non</label>
            </div>
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="confirmation" className="form-label">Si la réponse est oui, mentionnez-le :</label>
          <input type="text" className="form-control" name="confirmation" id="confirmation" value={formData.confirmation} onChange={handleChange} />
        </div>

        <div className="col-12 text-center mt-4">
          <button type="submit" className="btn btn-primary me-2">Envoyer</button>
          <button type="reset" className="btn btn-secondary" onClick={() => setFormData({
            name: '', date: '', lieu: '', residence: '', genre: '', mail: '', tel: '', org: '', competence: '', experience: '', confirmation: ''
          })}>Annuler</button>
        </div>
      </form>
    </div>
  );
}

export default Inscription;
