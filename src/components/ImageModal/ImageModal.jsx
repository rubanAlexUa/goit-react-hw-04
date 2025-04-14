import React from "react";
import Modal from "react-modal";
import c from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(44, 44, 44, 0.7)",
    zIndex: "999",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    maxWidth: "90vw",
    maxHeight: "90vh",
    overflow: "none",
    zIndex: "1000",
    backgroundColor: "transparent",
    border: "none",
  },
};

Modal.setAppElement("#root");

export default function ImageModal({ fullImage, exitModal, openedModal }) {
  return (
    <Modal
      isOpen={openedModal}
      onRequestClose={exitModal}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      contentLabel="Image Modal"
    >
      <button onClick={exitModal}>Закрити</button>
      <div className={c.modal}>
        <img src={fullImage} alt="fullImageVersion" />
      </div>
    </Modal>
  );
}
