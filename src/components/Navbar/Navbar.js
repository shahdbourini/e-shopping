import React, { useRef, useEffect,useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import Cart from "../cart/Carts";
import Banner from "../banner/Banner.js";
import "./NavStyle.css";


function Navbar() {
  const links = [
    { name: "Home", href: "/home" },
    { name: "Shop", href: "/shop" },
    { name: "Features", href: "/features" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const [leftOpen, setLeftOpen] = useState(false);

  const navbarRef = useRef(null);
  const linksContainerRef = useRef(null);
  const topLinkRef = useRef(null);
  const linksRef = useRef(null);

  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const toursRef = useRef(null);

  const blocks = {
    home: homeRef,
    about: aboutRef,
    services: servicesRef,
    tours: toursRef,
  };

  function scrollLinksClickHandlers(e, href) {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = href.slice(1);
    const element = blocks[id].current;

    const navHeight = navbarRef.current.getBoundingClientRect().height;
    // const containerHeight = linksContainerRef.current.getBoundingClientRect().height;
    const fixedNav = navbarRef.current.classList.contains("fixed-nav");
    let position = element.offsetTop + navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    // if (navHeight > 82) {
    //   position = position - containerHeight;
    // }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainerRef.current.style.height = 0;
  }

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      const scrollHeight = window.pageYOffset;
      const navHeight = navbarRef.current.getBoundingClientRect().height;
      if (scrollHeight > navHeight) {
        navbarRef.current.classList.add("fixed-nav");
      } else {
        navbarRef.current.classList.remove("fixed-nav");
      }
      // setup back to top link

      // if (scrollHeight > 500) {
      //   topLinkRef.current.classList.add("show-link");
      // } else {
      //   topLinkRef.current.classList.remove("show-link");
      // }
    });
    return () => {};
  }, []);

  const closeCart =()=>{
  setLeftOpen(false);
  }

  return (
    <>

      <header id="home" ref={homeRef}>
        <nav id="nav" ref={navbarRef}>
          <div className="nav-center">
            <div className="nav-header">
              <img
                src={process.env.PUBLIC_URL + "/images/logo.webp"}
                className="logo"
                alt="logo"
              />
              {/* <button className="nav-toggle" onClick={navBarToggleHandler}>
              <i className="fas fa-bars"></i>
            </button> */}
              <div className="links-container" ref={linksContainerRef}>
                <ul className="links" ref={linksRef}>
                  {links.map((link) => (
                    <li key={link.href}>
                      <NavLink
                        to={link.href}
                        className="scroll-link"
                        // onClick={(e) => scrollLinksClickHandlers(e, link.href)}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="links-container">
              <ul className="links">
                <li>
                  {" "}
                  <a href="#" className="scroll-link">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="scroll-link">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                  </a>
                </li>
                <li  onClick={() => setLeftOpen(!leftOpen)}>
                  {" "}
                  <a href="#" className="scroll-link">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

       <Cart leftOpen={leftOpen} closeCart={closeCart} />

        {/* <Banner /> */}
      </header>

      {/* <section id="about" className="section" ref={aboutRef}>
        <div className="title">
          <h2>
            about <span>us</span>
          </h2>
        </div>
      </section>
      <section id="services" className="section" ref={servicesRef}>
        <div className="title">
          <h2>
            our <span>services</span>
          </h2>
        </div>
      </section>
      <section id="tours" className="section" ref={toursRef}>
        <div className="title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div>
      </section>
      <footer className="section">
        <p>
          copyright &copy; backroads travel tours company
          <span id="date">{copyrightYear}</span>. all rights reserved
        </p>
      </footer>
      <a
        className="scroll-link top-link"
        href="#home"
        ref={topLinkRef}
        onClick={(e) => scrollLinksClickHandlers(e, "#home")}
      >
        <i className="fas fa-arrow-up"></i>
      </a> */}

    </>
  );
}

export default Navbar;
