import React from "react";
import Map from "./Map";
import Cards from "./Cards";
import Modal from "./Modal";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <Map />
      <Cards />
      <Modal />
    </main>
  );
};

export default Main;
