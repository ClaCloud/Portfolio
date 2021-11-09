import { useState, useEffect } from 'react';
import $ from 'jquery';

export default function Contact() {

  const [form, setForm] = useState({name: "", email: "", message: ""});

  const email = (event) => {
    event.preventDefault();

    $.ajax({
      type: "POST",
      url: `/api/mail.php`,
      data: {
        email: form.email,
        name: form.name,
        message: form.message,
      },
      success: function () {
        $(".global.info-wrapper").append("<div class='good'>Email Sent</div>");
      },
      error: function () {
        $(".global.info-wrapper").append("<div class='error'>Error occurred, retry</div>");
      }
    });
  }

  useEffect(() => {

    $('#body').on("click", '.global.info-wrapper > div', function () {
      $(this).fadeOut(300, function () { $(this).remove(); });
    });

  }, []);

  return (
    <div className="frame">
      <div className="container landing">
        <h1>Keep in <span>Touch</span></h1>
      </div>
      <div className="container row">
        <div className="col-3-2 form">
          <form method="post" id="email" onSubmit={email}>
            <div className="row">
              <div className="col-2">
                <label htmlFor="name">
                  <input type="text" name="name" value={form.name} required={true} placeholder=" " onChange={(e) => setForm({...form, name: e.target.value})} />
                  <div className="bar"></div>
                  <span className="placeholder">Your name</span>
                </label>
              </div>
              <div className="col-2">
                <label htmlFor="email">
                  <input type="email" name="email" value={form.email} required={true} placeholder=" " onChange={(e) => setForm({...form, email: e.target.value})} />
                  <div className="bar"></div>
                  <span className="placeholder">Your email</span>
                </label>
              </div>
            </div>
            <label htmlFor="message">
              <textarea name="message" rows="8" value={form.message} required={true} placeholder=" " onChange={(e) => setForm({...form, message: e.target.value})} minLength="30"></textarea>
              <div className="bar"></div>
              <span className="placeholder">Go ahead. I'm all ears</span>
            </label>
            <button className="button g-recaptcha" data-sitekey="6Lf0a_4ZAAAAAPTRLcD8pgVaY7AJJ3WBMBEWQPM4" data-callback='onSubmit' data-action='submit'>
              <span>Send</span>
              <dot>.</dot>
              <dot>.</dot>
              <dot>.</dot>
            </button>
          </form>
        </div>
        <div className="col-3 other">
          <div className="sticky">
            <div className="liv">
              <span>
                <i className="fas fa-map-marker-alt"></i>
                Currently based in
              </span>
              Messina, Sicily
            </div>
            <div className="liv">
              <span>
                <i className="fas fa-user-plus"></i>
                Follow me here
              </span>
              <div className="socials">
                <a href="https://www.behance.net/clacloud" target="_blank"><i className="fab fa-behance"></i></a>
                <a href="https://www.linkedin.com/in/claudio-la-rosa-a871bb17b/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/clacloud99/" target="_blank"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};