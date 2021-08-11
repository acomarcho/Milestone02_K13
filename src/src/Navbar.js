import React, { useState, useRef } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const [navToggle, setNavToggle] = useState(false);

  const toggleNav = () => {
    console.log("hello");
    if (!navToggle) {
      linksContainerRef.current.style.height = `${
        linksRef.current.getBoundingClientRect().height
      }px`;
    } else {
      linksContainerRef.current.style.height = 0;
    }
    setNavToggle(!navToggle);
  };

  const closeNav = () => {
    linksContainerRef.current.style.height = 0;
    setNavToggle(false);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-header">
          <a href="/" className="nav-logo">
            Cari<span>Oksigen</span>.
          </a>
          <FaBars className="nav-bars" onClick={toggleNav} />
        </div>
        <div className="nav-links-container" ref={linksContainerRef}>
          <div className="nav-links" ref={linksRef}>
            <a href="#home" className="nav-link" onClick={closeNav}>
              Beranda
            </a>
            <a href="#search" className="nav-link" onClick={closeNav}>
              Cari
            </a>
            <a href="#contact" className="nav-link" onClick={closeNav}>
              Kontak
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
