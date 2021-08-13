import React, { useMemo, useState } from "react";
import Card from "./Card";
import { cardsData } from "./cardsData";

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d.toFixed(1);
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

const Cards = ({ viewport, setViewport, lngLat, state, dispatch }) => {
  const [count, setCount] = useState(4);
  let sortedCards = useMemo(() => {
    let temp = Array.from(cardsData);
    temp.sort(
      (a, b) =>
        getDistanceFromLatLonInKm(
          lngLat.latitude,
          lngLat.longitude,
          a.latitude,
          a.longitude
        ) -
        getDistanceFromLatLonInKm(
          lngLat.latitude,
          lngLat.longitude,
          b.latitude,
          b.longitude
        )
    );
    return temp;
  }, [lngLat]);

  return (
    <div className="cards-container">
      {sortedCards.slice(0, count).map((data, idx) => {
        const {
          name,
          desc,
          phone,
          alamat,
          verified,
          latitude,
          longitude,
          metode,
          tanggal,
        } = data;
        const { latitude: lat, longitude: long } = lngLat;
        return (
          <Card
            key={idx}
            name={name}
            desc={desc}
            phone={phone}
            alamat={alamat}
            verified={verified}
            jarak={getDistanceFromLatLonInKm(latitude, longitude, lat, long)}
            viewport={viewport}
            setViewport={setViewport}
            latitude={latitude}
            longitude={longitude}
            state={state}
            dispatch={dispatch}
            metode={metode}
            tanggal={tanggal}
          />
        );
      })}
      {count <= 8 && (
        <button className="cards-btn" onClick={() => setCount(count + 2)}>
          Tampilkan lebih banyak
        </button>
      )}
    </div>
  );
};

export default Cards;
