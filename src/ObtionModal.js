import React from 'react';
import Modal from 'react-modal';

const ObtionModal = (props) => (
  <Modal
    isOpen={!!props.selectedObtion}
    onRequestClose={props.handlOkay}
    contentLabel="Example Modal"
  >
   Selected Obtion
   {props.selectedObtion && <p>{props.selectedObtion}</p>}
   <button 
      onClick = {props.handlOkay}
      >
      Okay
      </button>
  </Modal>
)

export default ObtionModal;