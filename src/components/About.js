import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import useScrollReveal from '../hooks/useScrollReveal';

function About() {
  useScrollReveal();

  return (
    <div id="section2" className="container-fluid py-5 component-wrapper">
      <h1 className="text-center mb-5 scroll-reveal"><strong>ABOUT US</strong></h1>
      <div className="row mb-5">
        <div className="col-md-6 scroll-reveal">
          <p className="text-justify">Youth Activists association is a youth organization active in the Krib delegation, Siliana governorate, founded on February 24, 2018. Its goal is to promote a spirit of citizenship among young people and strengthen their social, economic, and cultural capacities. The association is also committed to finding solutions to youth concerns, supporting their participation in public life, and spreading legal awareness.</p>
        </div>
        <div className="col-md-6 scroll-reveal">
          <img src="/images/Youthh.jpg" alt="YOUTH" className="img-fluid" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 d-none d-md-block scroll-reveal">
          <img src="/images/youth1.jpg" alt="YOUTH" className="img-fluid" />
        </div>
        <div className="col-md-6 scroll-reveal">
          <ul className="list-unstyled">
            <li className="mb-2">Administration . . . <a href="file.html"><FontAwesomeIcon icon={faUpRightFromSquare} /></a></li>
            <li className="mb-2">Bureau exécutif . . . <a href="file.html"><FontAwesomeIcon icon={faUpRightFromSquare} /></a></li>
            <li className="mb-2">Membres . . . <a href="file.html"><FontAwesomeIcon icon={faUpRightFromSquare} /></a></li>
            <li className="mb-2">Volontaires . . . <a href="file.html"><FontAwesomeIcon icon={faUpRightFromSquare} /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;