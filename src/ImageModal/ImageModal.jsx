
import Modal from "react-modal";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "500px",
    width: "1000px",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ imageModal, isOpen, closeModal }) => {
    return (
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalStyles}>
        {imageModal && (
          <img src={imageModal.urls.regular} alt={imageModal.description} />
        )}
      </Modal>
    );
  };
  export default ImageModal; 