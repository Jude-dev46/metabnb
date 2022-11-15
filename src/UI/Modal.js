import React from "react";

import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <div onClick={props.onConfirm} className="overlay"></div>
      <div className="modal-content">
        <h2>Form information</h2>
        <p>Form Sumbitted </p>
        <button className="close-modal" onClick={props.onConfirm}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="close-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
