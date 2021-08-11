import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="section hero-section" id="home">
      <div className="hero-container">
        <h1>
          Cari penyedia oksigen <br />
          di daerah terdekatmu.
        </h1>
        <p>
          Kami menggunakan data yang dikumpulkan oleh relawan #WargaBantuWarga.
        </p>
        <a href="#search" className="btn">
          Cek sekarang
        </a>
      </div>
    </section>
  );
};

export default Hero;
