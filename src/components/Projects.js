import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const portfolioItems = [
  {
    id: 1,
    year: 2021,
    title: "Co-Laurier",
    image: "/images/Co-Laurier1.jpg",
    description: "Le projet Co-Laurier est un espace de co-working moderne, équipé des dernières technologies et aménagements (informatique, robotique, musique, bureaux partagés, salle de réunion et de formation...). C'est le premier espace de ce genre à Krib, visant à offrir un environnement de travail respectueux et adéquat pour les jeunes de la région. Ce projet est financé par le Ministère des Affaires Étrangères polonais."
  },
  {
    id: 2,
    year: 2022,
    title: "Ecole en mouvement",
    image: "/images/Ecole en mouvement.jpg",
    description: " Ce projet ambitieux a inclus la clôture complète du périmètre de l'école (environ 250m), la création d'un terrain multisport, une bibliothèque, un jardin, l'aménagement de la cour, la peinture et l'entretien des classes, le raccordement du réseau d'eau au réservoir mobile avec pompe, ainsi que la fourniture de matériel sportif, de livres et de bibliothèques pour chaque classe."
  },
  {
    id: 3,
    year: 2023,
    title: "Al Hayir et Si El Ambouba",
    image: "/images/Al Hayir et Si El Ambouba.jpg",
    description: "Al Hayir et Si El Ambouba"
  }
];

function Projects() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filterYear, setFilterYear] = useState('All');

  const years = Array.from(new Set(portfolioItems.map(p => p.year))).sort();

  const openModal = (itemId) => {
    const item = portfolioItems.find(item => item.id === itemId);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const filtered = filterYear === 'All' ? portfolioItems : portfolioItems.filter(p => p.year === Number(filterYear));

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-3">Portfolio</h2>
        <p className="text-center text-muted mb-4">A collection of our projects</p>

        <div className="text-center mb-4">
          <button className={`btn btn-sm ${filterYear === 'All' ? 'btn-primary' : 'btn-outline-primary'} mx-1 mb-2`} onClick={() => setFilterYear('All')}>All</button>
          {years.map(y => (
            <button key={y} className={`btn btn-sm ${String(filterYear) === String(y) ? 'btn-primary' : 'btn-outline-primary'} mx-1 mb-2`} onClick={() => setFilterYear(String(y))}>{y}</button>
          ))}
        </div>

        <div className="row">
          {filtered.length === 0 && (
            <div className="col-12 text-center text-muted">Aucun projet trouvé pour cette année.</div>
          )}
          {filtered.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm" onClick={() => openModal(item.id)} style={{cursor: 'pointer'}}>
                <img src={item.image} alt={item.title} className="card-img-top project-image" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="text-muted small">{item.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={selectedItem !== null} onHide={closeModal} centered>
        {selectedItem && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedItem.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={selectedItem.image} alt={selectedItem.title} className="img-fluid mb-3" />
              <p>{selectedItem.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>Close</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
}

export default Projects;