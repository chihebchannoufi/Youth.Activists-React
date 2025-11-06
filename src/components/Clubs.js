import React from 'react';


function Clubs() {
  return (
    <div id="section3" className="container-fluid py-5">
      <h1 className="text-center mb-5"><strong>OUR CLUBS</strong></h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm club-card">
            <div className="club-image-wrap" style={{backgroundImage: `url('/images/young.jpg')`}} role="img" aria-label="Young" />
            <div className="card-body">
              <h5 className="card-title">Young Activists</h5>
              <p className="card-text">A group of high school students driven by the desire to help, participate, and move forward.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm club-card">
            <div className="club-image-wrap" style={{backgroundImage: `url('/images/peace.png')`}} role="img" aria-label="Peace" />
            <div className="card-body">
              <h5 className="card-title">Peace Makers</h5>
              <p className="card-text">A club dedicated to young individuals aged 15 to 25 who want to inspire society and contribute to their community through humanity and peace.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm club-card">
            <div className="club-image-wrap" style={{backgroundImage: `url('/images/robot.png')`}} role="img" aria-label="Robot" />
            <div className="card-body">
              <h5 className="card-title">Robots</h5>
              <p className="card-text">Musti Robots Club is where aspiring engineers explore their passion for robotics and innovation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clubs;