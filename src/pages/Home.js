import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const [about, setAbout] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    Promise.all([
      fetch(`/api/home.json`)
    ])
      .then(([res1]) => Promise.all([res1.json()]))
      .then(([data1]) => {
        setAbout(data1);
      });
  }
  return (
    <div className="frame">
      <div className="container landing">
        <h1>Hello<span className="primary">.</span><br />I am <span className="secondary">Claudio</span></h1>
        <h2>UX/UI Designer<br />Web Designer<br />Front-end Developer</h2>
      </div>
      <div className="container">
        <div className="about">
          <div className="text">
            <h2>About me</h2>
            <p dangerouslySetInnerHTML={{ __html: about }}></p>
            <div className="row">
              <div className="col-2">
                <NavLink to="/Works" className="button">
                  <span>Works</span>
                  <dot>.</dot><dot>.</dot><dot>.</dot>
                </NavLink>
              </div>
              <div className="col-2">
                <NavLink to="/Resume" className="button">
                  <span>Resume</span>
                  <dot>.</dot><dot>.</dot><dot>.</dot>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="photo">
            <img src="/img/photo.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};