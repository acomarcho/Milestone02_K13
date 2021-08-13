import React from "react";
import { cardsData } from "./cardsData";
import ReactMapGL, { Marker } from "react-map-gl";
import { ImLocation } from "react-icons/im";
import { easeCubic } from "d3-ease";
import { FlyToInterpolator } from "react-map-gl";

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

const Map = ({ viewport, setViewport, lngLat, setLngLat }) => {
  return (
    <div className="map-container">
      <div className="map-title">
        <h1>Menampilkan lokasi</h1>
        <p>
          di sekitar{" "}
          <span
            onClick={() =>
              setViewport({
                ...viewport,
                latitude: lngLat.latitude,
                longitude: lngLat.longitude,
                transitionDuration: 2000,
                transitionInterpolator: new FlyToInterpolator(),
                transitionEasing: easeCubic,
              })
            }
          >
            {lngLat.latitude}, {lngLat.longitude}
          </span>
        </p>
      </div>
      <div className="map-subtitle">
        <p>bukan lokasi Anda? Klik peta untuk mengganti lokasi.</p>
      </div>
      <div className="map" style={{ position: "relative" }}>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken="pk.eyJ1IjoiYWNveHN0cGQiLCJhIjoiY2tyeWcwNHM0MTA2NzJvbnE2czRrNnU0dyJ9.GsHKhIyAkywtPEGbkKJjhQ"
          mapStyle="mapbox://styles/acoxstpd/ckrygabs134j319t0dig2tugw"
          width="100%"
          height="100%"
          onViewportChange={(viewport) => setViewport(viewport)}
          onClick={(e) =>
            setLngLat({ longitude: e.lngLat[0], latitude: e.lngLat[1] })
          }
        >
          <Marker latitude={lngLat.latitude} longitude={lngLat.longitude}>
            <div className="map-current-marker">
              <ImLocation />
              <p className="map-current-marker-text">Lokasimu</p>
            </div>
          </Marker>
          {cardsData.map((data, idx) => {
            return (
              <Marker
                key={idx}
                latitude={data.latitude}
                longitude={data.longitude}
              >
                <div className="map-marker">
                  <ImLocation />
                  <p className="map-marker-text">{data.name}</p>
                  <p className="map-marker-text">
                    {`(${getDistanceFromLatLonInKm(
                      data.latitude,
                      data.longitude,
                      lngLat.latitude,
                      lngLat.longitude
                    )} km)`}
                  </p>
                </div>
              </Marker>
            );
          })}
        </ReactMapGL>
      </div>
    </div>
  );
};

export default Map;
