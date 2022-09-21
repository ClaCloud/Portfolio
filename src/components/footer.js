import { useState, useEffect } from "react";

export default function Footer() {
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
    <>
      <a
        className="go-top"
        onClick={() =>
          document.querySelector(".body").scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <span>
          <i className="fas fa-chevron-up"></i>
        </span>
        <span>Go Top</span>
      </a>
      <footer>
        <div className="container">
          <div className="copyright">
            This site is entirely handcrafted © Claudio La Rosa 2020
          </div>
          <div className="socials">
            {socials.map((social) => (
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                <i className={social.icona}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>
      <div className="global info-wrapper"></div>
    </>
  );
}
