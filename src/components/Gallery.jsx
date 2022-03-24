import React, { useState } from "react";
import { Modal } from "./";
import arrayOfGalleryImages from "../seedData/galleryData";

const Gallery = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <div className="gallery-main-container">
      {showPreviewModal && (
        <Modal
          onModalClose={() => setShowPreviewModal(false)}
          clickOutsideClose={true}
        >
          <div>
            <img className="modal-image" src={selectedImage} />
          </div>
        </Modal>
      )}

      {arrayOfGalleryImages.map((imageUrl) => {
        return (
          <img
            key={imageUrl}
            src={imageUrl}
            className="gallery-image"
            onClick={() => {
              setShowPreviewModal(true);
              setSelectedImage(imageUrl);
            }}
            style={{ cursor: "pointer" }}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
