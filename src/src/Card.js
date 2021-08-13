import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { BsArrowReturnRight } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { easeCubic } from "d3-ease";
import { FlyToInterpolator } from "react-map-gl";
import copy from "copy-to-clipboard";

const Card = ({
  name,
  desc,
  phone,
  alamat,
  jarak,
  verified,
  viewport,
  setViewport,
  latitude,
  longitude,
  state,
  dispatch,
  metode,
  tanggal,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{name}</h3>
        <p className="card-distance">{jarak} km</p>
      </div>
      <div className="card-subtitle">
        <p className="card-desc">{desc}</p>
        {verified && (
          <div className="card-check">
            <AiOutlineCheck />
          </div>
        )}
        {!verified && <div className="card-invisible-check"></div>}
      </div>
      <div className="card-contact">
        <FaPhoneAlt />
        <p
          className="card-phone"
          onClick={() => {
            copy(phone);
            alert(`Nomor telah berhasil dicopy!`);
          }}
        >
          {phone}
        </p>
      </div>
      <div className="card-address">
        <ImLocation />
        <a
          href={`http://maps.google.com/maps?q=${latitude},${longitude}`}
          target="_blank"
          rel="noreferrer"
          className="card-address-text"
        >
          {alamat}
        </a>
      </div>
      <div className="card-buttons">
        <button
          className="cari-btn"
          onClick={() =>
            setViewport({
              ...viewport,
              latitude,
              longitude,
              transitionDuration: 2000,
              transitionInterpolator: new FlyToInterpolator(),
              transitionEasing: easeCubic,
            })
          }
        >
          Cari di peta
        </button>
        <button
          className="detail-btn"
          onClick={() => {
            dispatch({
              type: "SHOW_MODAL",
              payload: {
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
              },
            });
          }}
        >
          <BsArrowReturnRight />
        </button>
      </div>
    </div>
  );
};

export default Card;
