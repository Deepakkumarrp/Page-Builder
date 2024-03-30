// Modal.js
import React from "react";

const Modal = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h1>Modal</h1>
        <h2>Hello </h2>
        {/* Add configuration inputs here */}
      </div>
    </div>
  );
};

export default Modal;
