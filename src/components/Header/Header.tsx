// import React from 'react';
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import "./Header.css";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  let mobile = window.innerWidth <= 768 ? true : false;
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <img src={logo} alt="Brand Logo" className="logo" />
      {isMenuOpen === false && mobile === true ? (
        <div className="menu-bar">
          <img src={bars} alt="menu-bars" onClick={() => setMenuOpen(true)} />
        </div>
      ) : (
        <ul className="header-menu [&>*:hover]:cursor-pointer [&>*:hover]:text-orange">
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
            >Home</Link>
            
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="Programs"
              spy={true}
              smooth={true}
            >Programs</Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="Why Us"
              spy={true}
              smooth={true}
            >Why Us</Link>
            
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="Plans"
              spy={true}
              smooth={true}
            >Plans</Link>
            
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="Testimonials"
              spy={true}
              smooth={true}
            >Testimonials</Link>
            
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
