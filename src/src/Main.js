import React, { useState, useEffect, useReducer } from "react";
import Map from "./Map";
import Cards from "./Cards";
import Modal from "./Modal";
import "./Main.css";

const reducer = (state, action) => {
  if (action.type === "SHOW_MODAL") {
    const {
      name,
      desc,
      phone,
      alamat,
      jarak,
      verified,
      latitude,
      longitude,
      metode,
      tanggal,
    } = action.payload;
    return {
      ...state,
      showModal: true,
      name,
      desc,
      phone,
      alamat,
      jarak,
      verified,
      latitude,
      longitude,
      metode,
      tanggal,
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      showModal: false,
    };
  }
};

const initialState = {
  showModal: false,
  name: "",
  desc: "",
  phone: "",
  alamat: "",
  jarak: "",
  verified: "",
  latitude: "",
  longitude: "",
  metode: "",
  tanggal: "",
};

const Main = () => {
  const [viewport, setViewport] = useState({
    latitude: -6.922161182416423,
    longitude: 107.66073552661364,
    width: "100%",
    height: "100%",
    zoom: 15,
  });
  const [lngLat, setLngLat] = useState({
    latitude: false,
    longitude: false,
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  // default -6.9225429868079305, 107.66049466119279
  const getGeolocation = async () => {
    const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
    const data = await response.json();
    // console.log(data);
    return { latitude: data.latitude, longitude: data.longitude };
  };
  useEffect(() => {
    const { latitude, longitude } = getGeolocation();
    if (!isNaN(latitude) && !isNaN(longitude)) {
      setLngLat({ latitude, longitude });
    } else {
      setLngLat({
        latitude: -6.9225429868079305,
        longitude: 107.66049466119279,
      });
    }
  }, []);
  return (
    <main>
      <div className="main-container" id="search">
        <Map
          viewport={viewport}
          setViewport={setViewport}
          lngLat={lngLat}
          setLngLat={setLngLat}
        />
        <Cards
          viewport={viewport}
          setViewport={setViewport}
          lngLat={lngLat}
          state={state}
          dispatch={dispatch}
        />
        <Modal state={state} dispatch={dispatch} />
      </div>
    </main>
  );
};

export default Main;
