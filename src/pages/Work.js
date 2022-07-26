import { useState, useEffect } from 'react';
import  { Redirect } from 'react-router-dom'

export default function Work(props) {
  const slug = props.match.params.slug;

  const [work, setWork] = useState({
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
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    Promise.all([
      fetch(`/api/works.json`)
    ])
      .then(([res1]) => Promise.all([res1.json()]))
      .then(([data1]) => {
        const work = data1.find(x => x.slug === slug)
        if(work){
          setWork(work);
        } else {
          return <Redirect to='/not_found'/>
        }
      });
  }

  return (
    <div className="frame">
      <div className="container landing">
        <div className="other-projects">
          {work.prev ? (
            <a href={`/Works/${work.prev.slug}`}>
              <i className="fas fa-chevron-left"></i>
              <span className="tooltip">{work.prev.name}</span>
            </a>
          ) : (
            <a className="disabled">
              <i className="fas fa-chevron-left"></i>
              <span className="tooltip">Finished</span>
            </a>
          )}
          <div className="title">
            <h1>{work.name}</h1>
            <span className="date">Published on {work.data}</span>
          </div>
          {work.next ? (
            <a href={`/Works/${work.next.slug}`}>
              <i className="fas fa-chevron-right"></i>
              <span className="tooltip">{work.next.name}</span>
            </a>
          ) : (
            <a className="disabled">
              <i className="fas fa-chevron-right"></i>
              <span className="tooltip">Soon</span>
            </a>
          )}
        </div>
      </div>

      <div className="container" dangerouslySetInnerHTML={{ __html: work.body }}></div>

      <div className="share">
        <h2>Share</h2>
        <div id="share">
          <a href={`https://telegram.me/share/url?url=https://clacloud.it/Works/${work.slug}&text=Take%20a%20look%20at%20this%20project%20by%20Claudio%20La%20Rosa`}
            target="popup"
            onClick={() => { window.open(`https://telegram.me/share/url?url=https://clacloud.it/Works/${work.slug}&text=Take%20a%20look%20at%20this%20project%20by%20Claudio%20La%20Rosa`, 'popup', 'width=600,height=600,scrollbars=no,resizable=no'); return false; }}>
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a href={`https://api.whatsapp.com/send?text=https://clacloud.it/Works/${work.slug}`}
            target="popup"
            onClick={() => { window.open(`https://api.whatsapp.com/send?text=https://clacloud.it/Works/${work.slug}`, 'popup', 'width=600,height=600,scrollbars=no,resizable=no'); return false; }}>
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=https://clacloud.it/Works/${work.slug}`}
            target="popup"
            onClick={() => { window.open(`https://www.facebook.com/sharer/sharer.php?u=https://clacloud.it/Works/${work.slug}`, 'popup', 'width=600,height=600,scrollbars=no,resizable=no'); return false; }}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href={`https://twitter.com/intent/tweet?text=Take%20a%20look%20at%20this%20project%20by%20Claudio%20La%20Rosa&url=https://clacloud.it/Works/${work.slug}`}
            target="popup"
            onClick={() => { window.open(`https://twitter.com/intent/tweet?text=Take%20a%20look%20at%20this%20project%20by%20Claudio%20La%20Rosa&url=https://clacloud.it/Works/${work.slug}`, 'popup', 'width=600,height=600,scrollbars=no,resizable=no'); return false; }}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://clacloud.it/Works/${work.slug}&title=Take%20a%20look%20at%20this%20project%20by%20Claudio%20La%20Rosa&summary=Take%20a%20look%20at%20this%20project%20by%20Claudio%20La%20Rosa&source=clacloud.it`}
            target="popup"
            onClick={() => { window.open(`https://www.linkedin.com/shareArticle?mini=true&url=https://clacloud.it/Works/${work.slug}&title=Take%20a%20look%20at%20this%20project%20by%20Claudio%20La%20Rosa&summary=Take%20a%20look%20at%20this%20project%20by%20Claudio%20La%20Rosa&source=clacloud.it`, 'popup', 'width=600,height=600,scrollbars=no,resizable=no'); return false; }}>
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="other-projects">
        {work.prev ? (
          <a href={`/Works/${work.prev.slug}`}>{work.prev.name}</a>
        ) : (
          <a className="disabled">Finished</a>
        )}
        {work.next ? (
          <a href={`/Works/${work.next.slug}`}>{work.next.name}</a>
        ) : (
          <a className="disabled">Soon</a>
        )}
      </div>
    </div>
  );
};