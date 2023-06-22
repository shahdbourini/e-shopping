import React, { useState, useEffect, useRef } from 'react';
import {  NavLink ,Link} from "react-router-dom";
import Cart from "../cart/Carts";
import "./NavStyle.css"

const Navbar = () => {
  const headerRef = useRef(null);
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const [showNavbar, setShowNavbar] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false); //for cart open and close

  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Features", href: "/features" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];


  const onSearchActiveHandler = () => setSearchActive(!searchActive);
  const closeCart = () => {setLeftOpen(false);}

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBackground('#ffffff'); // change to white when scrolled
      } else {
        setNavbarBackground('transparent'); // keep transparent otherwise
      }
    };

    const checkIfClickedOutside = (e) => {
      // If the search is open and the clicked target is not within the header,
      // then close the menu
      if (searchActive && headerRef.current && !headerRef.current.contains(e.target)) {
        setSearchActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener("mousedown", checkIfClickedOutside);
    }
  }, [searchActive]);



  return (
    <nav className={`navbar ${navbarBackground === '#ffffff' ? 'white' : ''}`} ref={headerRef} >
      <div className='container flex-row'>
        <div className='flex left-nav'>
          <img src={process.env.PUBLIC_URL + "/images/logo.webp"} className ="logo" alt="Logo"/>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
          {links.map((link) => ( 
          <li className="nav-item" onClick={handleShowNavbar}><Link to={link.href}  activeClassName="is-active"  >{link.name} </Link></li>))}
          </ul>
          </div>
        </div>
        <div className='flex-row right-nav'>
          <div className='flex search-input'>
            <input type="text" placeholder="Search" className={searchActive ? 'show-field' : 'hide-field'} />
            <i className="fa fa-search" onClick={onSearchActiveHandler} ></i>
          </div>
        <i className="fa fa-shopping-cart" onClick={() => setLeftOpen(!leftOpen)}></i>
        <i className="fa fa-heart"></i>
        <i className="menu-icon" onClick={handleShowNavbar}>
          <img src={process.env.PUBLIC_URL + "images/menu-icon.png"}/>
        </i>


        </div>

      </div>

      <Cart leftOpen={leftOpen} closeCart={closeCart} />
    </nav>

  );
};

export default Navbar;