import React from "react";
import "./Modal.css";
import { FaTimes } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiOutlineCheck } from "react-icons/ai";
import copy from "copy-to-clipboard";
// import ReactMapGL, { Marker } from "react-map-gl";

const Modal = ({ state, dispatch }) => {
  return (
    <div className={`modal-overlay ${state.showModal ? "show-modal" : null}`}>
      <div className="modal-card">
        <button
          className="modal-close-btn"
          onClick={() => dispatch({ type: "CLOSE_MODAL" })}
        >
          <FaTimes />
        </button>
        <div className="modal-wrapper">
          <div className="modal-left">
            <h1 className="modal-title">{state.name}</h1>
            <p className="modal-subtitle">{state.desc}</p>
            <div className="modal-contact">
              <FaPhoneAlt />
              <div className="modal-contact-info">
                <p>{state.phone}</p>
                <button
                  className="modal-btn"
                  onClick={() => {
                    copy(state.phone);
                    alert("Nomor telah berhasil dicopy!");
                  }}
                >
                  Kontak
                </button>
              </div>
            </div>
            <div className="modal-location">
              <ImLocation />
              <div className="modal-location-info">
                <p>{state.alamat}</p>
                <a
                  href={`http://maps.google.com/maps?q=${state.latitude},${state.longitude}`}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-btn"
                >
                  Cek di Peta
                </a>
              </div>
            </div>
            {state.verified && (
              <>
                <div className="modal-verification">
                  <div className="modal-verification-icon">
                    <AiOutlineCheck />
                  </div>
                  <p>Verifikasi via {state.metode}</p>
                </div>
                <div className="modal-update">
                  <p>Pembaruan terakhir {state.tanggal}</p>
                </div>
              </>
            )}
            {!state.verified && (
              <div className="modal-update">
                <p>Lokasi belum terverifikasi</p>
              </div>
            )}
            <button
              className="lapor-btn"
              onClick={() => alert("Kesalahan terlaporkan!")}
            >
              Laporkan Kesalahan
            </button>
          </div>
          {state.latitude && (
            <div className="modal-right">
              <iframe
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD-tljClbOsofB_IM_1mzaLStiW0PL_9X8&q=${state.latitude},${state.longitude}`}
                title="gmaps"
              ></iframe>
              <p>
                {`${state.jarak} km dari lokasi Anda `}{" "}
                <span>{`(${state.latitude}, ${state.longitude})`}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
