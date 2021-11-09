export default function Footer() {

  return (
    <>
      <a className="go-top" onClick={() => document.querySelector(".body").scrollTo({
        top: 0,
        behavior: 'smooth'
      })}>
        <span><i className="fas fa-chevron-up"></i></span>
        <span>Go Top</span>
      </a>
      <footer>
        <div className="container">
          <div className="copyright">
            This site is entirely handcrafted © Claudio La Rosa 2020
          </div>
          <div className="socials">
            <a href="https://www.behance.net/clacloud" target="_blank" rel="noreferrer"><i className="fab fa-behance"></i></a>
            <a href="https://www.linkedin.com/in/claudio-la-rosa-a871bb17b/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/clacloud99/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
      <div className="global info-wrapper"></div>
    </>
  );
};