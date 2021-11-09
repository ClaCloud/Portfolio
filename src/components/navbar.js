import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {

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
          </nav >
          <div className="socials">
            <a href="https://www.behance.net/clacloud" target="_blank" rel="noreferrer"><i className="fab fa-behance"></i></a>
            <a href="https://www.linkedin.com/in/claudio-la-rosa-a871bb17b/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/clacloud99/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div >
      </nav >
      <button id="nav-btn" className="activator">
        <div className="line"></div>
      </button>
      <a className="activator nav-separator"></a>
    </header >
  );
};