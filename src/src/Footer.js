import React from "react";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <h1 className="footer-logo">
          Cari<span>Oksigen</span>.
        </h1>
        <div className="footer-contact">
          <FaPhoneAlt />
          <p>+62 812 2805 1776</p>
        </div>
        <p className="footer-info">
          Data dikumpulkan oleh para relawan di #WargaBantuWarga.
        </p>
        <p className="footer-copyright">Copyright © 2021. Crafted with Love.</p>
      </div>
    </footer>
  );
};

export default Footer;
