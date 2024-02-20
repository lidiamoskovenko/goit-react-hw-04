import { useState } from "react";
import ImageCard from '../ImageCard/ImageCard';
import  ImageModal  from "../ImageModal/ImageModal";


const ImageGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  function openModal(image) {
    setModalImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <ul>
        {images.map((image) => (
          <li key={image.id} onClick={() => openModal(image)}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
      {isOpen && (<ImageModal imageModal={modalImage} isOpen={isOpen} closeModal={closeModal}
        />
      )}
    </div>
  );
};
export default ImageGallery;