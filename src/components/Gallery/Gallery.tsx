/*
# Imports
*/
import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "./Gallery.scss";

/*
# Interface
# react children with-typescript :
https://www.carlrippon.com/react-children-with-typescript/ */
export interface GalleryProps {
  position?: number;
  elements?: {
    alt?: string; 
    url?: string;
  };
}



/*
# Class Components */
const Gallery: React.FC<GalleryProps> = ({
  position,
  elements
}) => {

  let gallerySettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true
  };

  return (
    <section
      className={`
        gallery-component
      `}
      style={{
        zIndex: position ?? 2
      }}
    >
      <Slider {...gallerySettings}>
        {elements.map(
          (item) => {
            console.log("item > ", item)
          }
        )}
      </Slider>  
    </section>
  );

};

/*
# Export
*/
export default Gallery;
