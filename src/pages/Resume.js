import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import '../print.scss';

export default function Resume() {

  const [resume, setResume] = useState({ educations: [], experiences: [], skills: [], languages: [], hobbies: [] });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    Promise.all([
      fetch(`/api/resume.json`)
    ])
      .then(([res1]) => Promise.all([res1.json()]))
      .then(([data1]) => {
        setResume(data1);
      });
  }

  return (
    <div className="frame">
      <div className="container landing">
        <h1>Resume</h1>
        <div className="selection">
          <a href="#Education" className="button mini"><span>Education</span></a>
          <a href="#Experiences" className="button mini"><span>Experiences</span></a>
          <a href="#Design" className="button mini"><span>Design Skills</span></a>
          <a href="#Languages" className="button mini"><span>Languages</span></a>
          <a href="#Hobbies" className="button mini"><span>Hobbies</span></a>
        </div>
      </div>
      <div className="container">
        <div className="row print_nowrap">
          <div className="col-2">
            <h3 id="Education">Education</h3>
            {resume.educations.map(edu => (
              <div className="h-line">
                <h4>{edu.name}</h4>
                <span className="period">{edu.period}</span>
                <span className="cursus">{edu.cursus}</span>
                <span className="learnt" dangerouslySetInnerHTML={{ __html: edu.learnt }}></span>
              </div>
            ))}
          </div>
          <div className="col-2">
            <h3 id="Experiences">Experiences</h3>
            {resume.experiences.map(xp => (
              <div className="h-line">
                <h4>{xp.name}</h4>
                <span className="period">{xp.period}</span>
                <span className="where"><i className="fas fa-map-marker-alt"></i> {xp.where}</span>
                <span className="role" dangerouslySetInnerHTML={{ __html: xp.role }}></span>
              </div>
            ))}
          </div>
        </div>
        <div className="row print_nowrap">
          <div className="col">
            <h3 id="Design">Skills</h3>
            <div className="row print_nowrap">
              {resume.skills.map(sec => (
                <div className="col-3">
                  <h4>{sec.name}</h4>
                  {sec.skills.map(skill => (
                    <div className="design">
                      <div className="title">{skill.name}</div>
                      <div className={`dot n-${skill.level}`}>
                        <i className="far fa-circle"></i>
                        <i className="far fa-circle"></i>
                        <i className="far fa-circle"></i>
                        <i className="far fa-circle"></i>
                        <i className="far fa-circle"></i>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row print_nowrap">
          <div className="col center">
            <h3 id="Languages">Languages</h3>
            <div className="row print_nowrap">
              {resume.languages.map(lang => (
                <div className="col-3">
                  <figure className={`chart-${lang.level} animate`}>
                    <svg role="img" xmlns="http://www.w3.org/2000/svg">
                      <title>{lang.lang}</title>
                      <desc>{lang.desc}</desc>
                      <circle className="circle-background" />
                      <circle className="circle-foreground" />
                    </svg>
                    <figcaption>{lang.lang}</figcaption>
                    <div className="level">
                      {lang.desc}
                    </div>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row hobbies">
        <div className="col center">
          <h3 id="Hobbies">Hobbies & Interests</h3>
          <Swiper slidesPerView={"auto"} className="mySwiper">
            {resume.hobbies.map(hobbie => (
              <SwiperSlide>
                <div className="hobbie">
                  <i className={hobbie.icon}></i>
                  <span>{hobbie.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="button mini print" onClick={() => window.print()}>
        <span>Print or Save</span>
        <dot>.</dot><dot>.</dot><dot>.</dot>
      </div>
    </div>
  );
};