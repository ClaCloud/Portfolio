import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [socials, setSocials] = useState([]);

  const fetchData = () => {
    Promise.all([fetch(`/api/socials.json`)])
      .then(([res1]) => Promise.all([res1.json()]))
      .then(([data1]) => {
        setSocials(data1);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <header className="navbar">
      <nav id="top" className="">
        <div className="nav-body">
          <div className="top"></div>
          <nav className="nav">
            <ul className="v-center">
              <li>
                <NavLink exact to="/" className="activator">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Works" className="activator">
                  Works
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Resume" className="activator">
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Contact" className="activator">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="socials">
            {socials.map((social) => (
              <a href={social.link} target="_blank" rel="noreferrer">
                <i className={social.icona}></i>
              </a>
            ))}
          </div>
        </div>
      </nav>
      <button id="nav-btn" className="activator">
        <div className="line"></div>
      </button>
      <a className="activator nav-separator"></a>
    </header>
  );
}
