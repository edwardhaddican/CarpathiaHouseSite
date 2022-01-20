import React from "react";
import { Link } from "react-router-dom";
import arrayOfGalleryImages from "../seedData/galleryData";

console.log(arrayOfGalleryImages, "arr");

const Gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      {arrayOfGalleryImages.map((e) => {
        return (
          <Link>
            <img src={e} className="gallery-image" />;
          </Link>
        );
      })}
    </div>
  );
};

export default Gallery;
