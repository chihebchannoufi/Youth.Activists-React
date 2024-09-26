import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id="section1" className="container-fluid d-flex align-items-center justify-content-center" style={{minHeight: '100vh', padding: '180px 50px'}}>
      <div className="text-center">
        <h1 className="display-4 mb-4">Welcome to Youth Activists!</h1>
        <h2 className="h3 mb-4">Nonprofit Organization</h2>
        <Link to="/inscription" className="btn btn-light btn-lg mb-3">Join Our Community</Link>
        <p className="lead">Be part of something bigger</p>
      </div>
    </div>
  );
}

export default Home;