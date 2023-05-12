import React, { useState, useRef, useEffect } from 'react';
import anime from 'animejs';
import smallRectangleGamma from '../img/buildlabs.png';
import { useNavigate, useLocation } from 'react-router-dom';


const GammaRectangle = ({
    handleGammaClick,
    gammaHandleMouseEnter,
    gammaHandleMouseLeave,
    showGammaText,
    currentImageUrl,
    isCycleRunning,
    setIsCycleRunning,
    translateY,
  }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
      // Add this line to stop cycling images
      setIsCycleRunning(false);
    
      handleGammaClick();
      navigate('/');
    };
    const gammaRef = useRef(null);
    useEffect(() => {
      const gammaElement = gammaRef.current;
  
      if (gammaElement) {
        gammaElement.addEventListener('mouseleave', gammaHandleMouseLeave);
      }
  
      return () => {
        if (gammaElement) {
          gammaElement.removeEventListener('mouseleave', gammaHandleMouseLeave);
        }
      };
    }, [gammaHandleMouseLeave]);

    
    useEffect(() => {
      const gammaRectangleElement = document.getElementById("gamma-rectangle");
      if (gammaRectangleElement) {
        if (location.pathname !== "/") {
          console.log("location.pathname !== / value :", translateY);
          anime.set(gammaRectangleElement, { translateY: translateY });
        } else {
          console.log("location.pathname === / value :", translateY);
          anime.set(gammaRectangleElement, { translateY: 0 });
        }
      }
    }, [location, translateY]);
      
      
  //    This should now apply the translateY value correctly when the page is loaded directly or by clicking on a rectangle. If you still encounter issues, please let me know, and I'll be happy to help you further.
      

  return (
    <div
      className="small-rectangle"
      id="gamma-rectangle"
      onClick={handleClick}
      onMouseEnter={gammaHandleMouseEnter}
      onMouseLeave={gammaHandleMouseLeave}
      ref={gammaRef}
      style={{ opacity: 0 }}
    >
      <div
        className="image-overlay"
        style={{
          backgroundColor: showGammaText ? 'transparent' : '#FFFF6C',
        }}
      ></div>
      <img
        src={currentImageUrl}
        alt="Sample"
        className="small-rectangle-image"
        style={{ display: showGammaText ? 'none' : 'block' }}
      />
      {showGammaText && 'GammA'}
    </div>
  );
};

export default GammaRectangle;
