import React, { useState } from 'react';
import '../styles/ImageGallery.css';

const ImageGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-frame ${index === activeIndex ? '' : 'blur'}`}
          style={{
            zIndex: images.length - Math.abs(activeIndex - index),
            transform: `translateY(${index === activeIndex ? '0' : index > activeIndex ? '100%' : '-100%'}) scale(${index === activeIndex ? 1 : 0.7})`,
          }}
        >
          <img src={image} alt={`Gallery image ${index}`} />
        </div>
      ))}
     <svg className="arrow up" onClick={prevImage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
      <svg className="arrow down" onClick={nextImage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10l6 6 6-6H6z"/></svg>

    </div>
  );
};

export default ImageGallery;
