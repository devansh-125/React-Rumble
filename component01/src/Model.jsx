import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <button className="close-button" onClick={onClose}>Close</button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
