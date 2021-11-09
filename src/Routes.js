import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import $ from 'jquery';

//components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

//pages
import E404 from "./pages/E404";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {

  const [page, setPage] = useState("Home");

  const setPathname = (pathname) => {
    if (pathname === "/") {
      setPage("Home");
    } else if (pathname === "/Works" || pathname === "/Works/") {
      setPage("Works");
    } else if (pathname.includes("/Works/")) {
      setPage("project");
    } else if (pathname === "/Resume" || pathname === "/Resume/") {
      setPage("Resume");
    } else if (pathname === "/Contact" || pathname === "/Contact/") {
      setPage("Contact");
    } else {
      setPage("none");
    };
  };

  useEffect(() => {

    $('.activator').on("click", function menu() {
      if ($('#top').hasClass('visible')) {
        $('#top').removeClass('visible');
        $('#body').removeClass('hidden');
      } else {
        $('#top').addClass('visible');
        $('#body').addClass('hidden');
      }
    });

    $(".body").on("scroll", function () {
      var scroll = $(".body").scrollTop();
      if (scroll >= 1000) {
        $(".go-top").addClass("up");
      } else {
        $(".go-top").removeClass("up");
      }
    });

    $("#body").on('click', "a", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body, .body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function () {
          window.location.hash = hash;
        });
      };
    });

  }, []);

  return (
    <Router>
      <ScrollToTop setPathname={setPathname} />
      <Navbar />
      <main className={`body ${page}`}>
        <Switch>
          <Route exact path="/" render={(props) => (<Home {...props} />)} />
          <Route exact path="/Works" render={(props) => (<Works {...props} />)} />
          <Route exact path="/Works/:slug" render={(props) => (<Work {...props} />)} />
          <Route exact path="/Resume" render={(props) => (<Resume {...props} />)} />
          <Route exact path="/Contact" render={(props) => (<Contact {...props} />)} />

          <Route render={(props) => (<E404 {...props} />)} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
};

export function ScrollToTop(props) {

  const location = useLocation()

  useEffect(() => {
    document.querySelector(".body").scrollTo({
      top: 0,
      behavior: 'instant'
    });
    props.setPathname(location.pathname)
  }, [location]);

  return null;
}