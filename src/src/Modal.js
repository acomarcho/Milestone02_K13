import React from "react";
import "./Modal.css";

// Kalau mau ngeshow modalnya kasih class model-overlay show
const Modal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="modal-close-btn">
          <FaTimes />
        </button>
        <div className="modal-wrapper">
          <div className="modal-left">
            <h1 className="modal-title">Nama</h1>
            <p className="modal-subtitle">Deskripsi</p>
            <div className="modal-contact">
              <FaPhoneAlt />
              <div className="modal-contact-info">
                <p>Nomor</p>
                <button className="modal-btn">Kontak</button>
              </div>
            </div>
            <div className="modal-location">
              <ImLocation />
              <div className="modal-location-info">
                <p>Alamat</p>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="modal-btn"
                >
                  Cek di Peta
                </a>
              </div>
            </div>
            <div className="modal-verification">
              <div className="modal-verification-icon">
                <AiOutlineCheck />
              </div>
              <p>Verifikasi via Telepon</p>
            </div>
            <div className="modal-update">
              <p>Pembaruan terakhir xx/yy/dd</p>
            </div>
            <button className="lapor-btn">Laporkan Kesalahan</button>
          </div>
          <div className="modal-right">
            <iframe
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-tljClbOsofB_IM_1mzaLStiW0PL_9X8&q=1111,1111"
              title="gmaps"
            ></iframe>
            <p>
              1 km dari lokasi Anda <span>(1111, 1111)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
