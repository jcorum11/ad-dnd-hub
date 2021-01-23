import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const Home = () => {
  return (
    <div id="app">
      <nav className="navbar navbar-expand navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            AlgoRhythmic Development's D&D Hub
          </a>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/maps">
                Maps
              </a>
              <a className="nav-link" href="/players">
                Players
              </a>
              <a className="nav-link" href="/log">
                Log
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
