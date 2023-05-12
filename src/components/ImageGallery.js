import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import '../styles/ImageGallery.css';

const ImageGallery = ({ images, imageDescriptions, titleDescriptions, activeIndex, setActiveIndex }) => {
  const [showFrame, setShowFrame] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowFrame(true), 300); // Show image after 300ms
    setTimeout(() => setShowDesc(true), 600); // Show text after 600ms
  }, []);


  const [activeDescription, setActiveDescription] = useState(imageDescriptions[0]);
  const [descriptionAnimation, setDescriptionAnimation] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
    setTimeout(() => {
      setFadeIn(false);
    }, 500);
  }, [images]);

 
  
  
  const handleMouseEnter = (event) => {
    anime({
      targets: event.currentTarget,
      backgroundColor: '#FFFF6C',
      duration: 500,
      easing: 'easeOutQuad',
    });
  };
  const handleMouseLeave = (event) => {
    anime({
      targets: event.currentTarget,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      duration: 500,
      easing: 'easeOutQuad',
    });
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : images.length - 1;
      setActiveDescription(imageDescriptions[newIndex]);
      setDescriptionAnimation(true);
      return newIndex;
    });
  };
  
  const nextImage = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex < images.length - 1 ? prevIndex + 1 : 0;
      setActiveDescription(imageDescriptions[newIndex]);
      setDescriptionAnimation(true);
      return newIndex;
    });
  };
  
  return (
    <div className={`image-gallery ${fadeIn ? 'fade-in' : ''}`} key={JSON.stringify(images)}>
      <div className={`whole-vertical-frame ${showFrame ? 'show' : ''}`}>
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
     <svg className="arrow up" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={prevImage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
     <svg className="arrow down" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}onClick={nextImage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" transform="rotate(180 12 12)"/>
</svg>
</div>
<div className={`description-container ${showDesc ? 'show' : ''}`}>
  {imageDescriptions.map((description, index) => (
     <div
     key={index}
     className={`description ${index === activeIndex ? 'show' : ''}`}
   >
     {description}
   </div>
  ))}
  {titleDescriptions.map((description, index) => (
       <div
       key={index}
       className={`description-title ${index === activeIndex ? 'show' : ''}`}
     >
       {description}
     </div> 
  ))}
  <div className="connector"></div>
</div>



    </div>
  );
};

export default ImageGallery;
