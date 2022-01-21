import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import arrayOfGalleryImages from "../seedData/galleryData";

console.log(arrayOfGalleryImages, "arr");

const CarouselComponent = () => {
  return (
    <Carousel
      showArrows={true}
      // onChange={onChange}
      // onClickItem={onClickItem}
      // onClickThumb={onClickThumb}
      className="carousel-main-container"
    >
      {arrayOfGalleryImages.map((e) => {
        return (
          <div>
            <img src={e} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
