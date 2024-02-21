
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

const ImageModal = ({ src, alt, isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalStyles}>
      <img src={src} alt={alt} />
    </Modal>
  );
};
export default ImageModal;  