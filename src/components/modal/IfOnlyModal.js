import React, { useState } from "react";
import Modal from "react-modal";
import Button from 'react-bootstrap/Button';
import Diagram from './diagram.png';
import './modal.css';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 700,
    height: 500
  },
};

function IfOnlyModal() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <div class="modal-open-button">
      <Button varient="secondary" size="sm" onClick={setModalOpen}>Class Diagram</Button>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <div class="diagram">
          {/* <h4>Class Diagram with sample data</h4> */}
        <img src={Diagram} alt="diagram" id="diagram" />

        </div>
      <div class="modal-close-button">
        <Button varient="secondary" size="sm" onClick={() => setModalOpen(false)}>Close</Button>
      </div>
      </Modal>
    </div>
  );
}

export default IfOnlyModal;