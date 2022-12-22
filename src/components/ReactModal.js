import React from "react";
import ReactModal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(33, 34, 36, 0.7)",
    backdropFilter: "blur(5px)",
    zIndex: 990,
    display: "flex",
  },
  content: {
    backgroundColor: "rgba(33, 34, 36, 0.7)",
    position: "absolute",
    width: "max-content",
    height: "max-content",
    padding: 0,
    borderRadius: "0.5rem",
    border: "none",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "scroll",
  },
};

ReactModal.setAppElement("#root");

export default function Modal({ children, modalIsOpen, onRequestClose }) {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      {children}
    </ReactModal>
  );
}
