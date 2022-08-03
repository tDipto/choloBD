import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ReviewForm = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default ReviewForm;

// import React, {useState} from 'react';
// import {Modal,ModalHeader} from 'reactstrap';
// function ReviewAdd() {
//     const [modal, setmodal] = useState(false);
//     return (
//         <div>
//             <Modal
//                 size='1g'
//                 isOpen={modal}
//                 toggle={()=> setmodal(!modal)}
//             >
//                 <ModalHeader
//                     toggle={()=> setmodal(!modal)}
//                 >
//                     PopUp
//                 </ModalHeader>
//             </Modal>
//             <button className='btn mt-3 onclick={()=>setmodal(true)}'>
//                 notun
//             </button>
//         </div>
//     )
// }
