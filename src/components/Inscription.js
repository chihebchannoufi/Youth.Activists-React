import React from 'react';

function Inscription() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Inscription</h2>
      <form action="/inscription/store" method="POST" className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name="name" id="name" required />
        </div>

        <div className="col-md-6">
          <label htmlFor="date" className="form-label">Date de naissance</label>
          <input type="date" className="form-control" name="date" id="date" required />
        </div>

        <div className="col-md-6">
          <label htmlFor="lieu" className="form-label">Lieu de naissance</label>
          <input type="text" className="form-control" name="lieu" id="lieu" required />
        </div>

        <div className="col-md-6">
          <label htmlFor="résidence" className="form-label">Lieu de résidence</label>
          <input type="text" className="form-control" name="résidence" id="résidence" required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Genre :</label>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genre" id="male" value="Homme" required />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="genre" id="female" value="Femme" required />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <label htmlFor="mail" className="form-label">E-mail</label>
          <input type="email" className="form-control" name="mail" id="mail" required />
        </div>

        <div className="col-md-6">
          <label htmlFor="tel" className="form-label">Numéro de téléphone</label>
          <input type="tel" className="form-control" name="tel" id="tel" required />
        </div>

        <div className="col-12">
          <label htmlFor="org" className="form-label">Pourquoi souhaitez-vous rejoindre l'organisation ?</label>
          <textarea className="form-control" name="org" id="org" rows="3" required></textarea>
        </div>

        <div className="col-12">
          <label htmlFor="compétence" className="form-label">Avez-vous des compétences? Mentionnez-les</label>
          <textarea className="form-control" name="compétence" id="compétence" rows="2"></textarea>
        </div>

        <div className="col-12">
          <label className="form-label">Avez-vous de l'expérience dans la société civile ?</label>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="expérience" id="expérience_oui" value="oui" required />
              <label className="form-check-label" htmlFor="expérience_oui">Oui</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="expérience" id="expérience_non" value="non" required />
              <label className="form-check-label" htmlFor="expérience_non">Non</label>
            </div>
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="confirmation" className="form-label">Si la réponse est oui, mentionnez-le :</label>
          <input type="text" className="form-control" name="confirmation" id="confirmation" />
        </div>

        <div className="col-12 text-center mt-4">
          <button type="submit" className="btn btn-primary me-2">Envoyer</button>
          <button type="reset" className="btn btn-secondary">Annuler</button>
        </div>
      </form>
    </div>
  );
}

export default Inscription;