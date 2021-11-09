import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.min.css";

SwiperCore.use([Pagination]);

export default function Works() {

  const [works, setWorks] = useState([{
    "name": "WebsiteStrategy",
    "desc": "questa è una descrizione di WebsiteStrategy",
    "data": "June 19, 2020",
    "img": "/img/websitestrategy.jpg",
    "slug": "WebsiteStrategy",
    "body": "",
    "prev": {
      "name": "EndlessGames",
      "slug": "endlessgames"
    }
  }]);
  let i = true;

  useEffect(() => {

    fetchData();
  }, []);

  const fetchData = () => {
    Promise.all([
      fetch(`/api/works.json`)
    ])
      .then(([res1]) => Promise.all([res1.json()]))
      .then(([data1]) => {
        setWorks(data1);
      });
  }

  return (
    <div className="frame">
      <div className="container landing">
        <h1>Watch my<a href="#projects">Projects</a></h1>
      </div>
      <div id="projects">

        <div className="project last">
          <div className="background" style={{ background: `url(${works[0].img})` }}></div>
          <NavLink to={`/Works/${works[0].slug}`} className="all"></NavLink>
          <div className="frame">
            <h2>{works[0].name}</h2>
            <div className="more">
              <p>{works[0].desc}</p>
              <NavLink to={`/Works/${works[0].slug}`} className="button"><span>Learn more</span><dot>.</dot><dot>.</dot><dot>.</dot></NavLink>
            </div>
          </div>
        </div>
        <Swiper pagination={{ "clickable": true }} slidesPerView={"auto"} className="mySwiper">
          {works.map(work => {
            if (!i) {
              return (
                <SwiperSlide key={work.id}>
                  <div className="project">
                    <div className="background" style={{ background: `url(${work.img})` }}></div>
                    <NavLink to={`/Works/${work.slug}`} className="all"></NavLink>
                    <div className="frame">
                      <h2>{work.name}</h2>
                      <div className="more">
                        <p>
                          <span className="date" >{work.data}</span>
                          <span className="desc" >{work.desc}</span>
                        </p>
                        <NavLink to={`/Works/${work.slug}`} className="button"><span>Learn more</span><dot>.</dot><dot>.</dot><dot>.</dot></NavLink>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            } else {
              i = false;
            }
          })}
        </Swiper>
      </div>
    </div>
  );
};