// src/App.js
import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import anime from 'animejs';
import '@fontsource/roboto/300.css';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Cv from './pages/Cv';
// Images
import buildlabs from './img/buildlabs.png';
import buildlabs2 from './img/buildlabs2.png';
import buildlabs3 from './img/buildlabs3.png';
import buildlabscode1 from './img/buildlabscode1.png';
import buildlabscode2 from './img/buildlabscode2.png';
import buildlabscode3 from './img/buildlabscode3.png';
import buildlabscode4 from './img/buildlabscode4.png';
import buildlabscode5 from './img/buildlabscode5.png';
import buildlabscode6 from './img/buildlabscode6.png';


function App() {
  const [titleAnimation, setTitleAnimation] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(null);
  const [showGammaText, setShowGammaText] = useState(true);
  const [isMovingToCenter, setIsMovingToCenter] = useState(false);

  const mountedRef = useRef(false);

  const sections = [
    { title: 'Work', key: 'work' },
    { title: 'About', key: 'about' },
    { title: 'Contact', key: 'contact' },
    { title: 'Curriculum Vitae', key: 'cv' },
  ];
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  const computeTranslateY = () => {
    const appHeight = window.innerHeight - 40; // Subtract 40 for the app padding
    const gammaRect = document.getElementById("gamma-rectangle");
    const gammaRectHeight = gammaRect.offsetHeight;
    const padding = 20;
    const translateY = (appHeight - ((window.innerHeight / 2) - padding)) - ((gammaRectHeight / 2) - padding);
    console.log(appHeight, gammaRectHeight, translateY);
    return translateY;
  };

  const animationImages = [
    buildlabs,
    buildlabs2,
    buildlabs3,
    buildlabscode1,
    buildlabscode2,
    buildlabscode3,
    buildlabscode4,
    buildlabscode5,
    buildlabscode6,
  ];
  
const [currentImageUrl, setCurrentImageUrl] = useState(animationImages[0]);

const [isCycleRunning, setIsCycleRunning] = useState(false);

React.useEffect(() => {
  if (!isCycleRunning) return;

  const cycleTimeout = setTimeout(() => {
    setCurrentImage((prevImage) => {
      const nextImage = (prevImage + 1) % animationImages.length;
      setCurrentImageUrl(animationImages[nextImage]);
      return nextImage;
    });
  }, 160);

  return () => clearTimeout(cycleTimeout); // Cleanup function to clear the timeout when the component is unmounted or when isCycleRunning changes
}, [isCycleRunning, animationImages, setCurrentImage, setCurrentImageUrl]);





const gammaHandleMouseEnter = (event) => {
  if (isMovingToCenter) return;
  anime({
    targets: event.currentTarget,
    backgroundColor: '#FFFF6C',
    duration: 200,
    easing: 'easeOutQuad',
    scale: 1.1,
    complete: () => {
    if (mountedRef.current) {
        setShowGammaText(false);
        setIsCycleRunning(true);
      }
    },
  });
};



const gammaHandleMouseLeave = (event) => {
   if (isMovingToCenter) return;
  anime({
    targets: event.currentTarget,
    backgroundColor: '#FFFF6C',
    duration: 100,
    scale: 1,
    easing: 'easeOutQuad',
    complete: () => {
      if (mountedRef.current) {
      setIsCycleRunning(false);
      anime({
        targets: event.currentTarget,
        backgroundColor: '#FFFFF8',
        duration: 100,
        delay: 100,
        easing: 'easeOutQuad',
        complete: () => {
          if (mountedRef.current) {
          setCurrentImage(0);
          setCurrentImageUrl(animationImages[currentImage]);
          setShowGammaText(true);
          }
        },
      });
    }
  },
  });
};

//This refactor removes the cycleTimeout, clearCycle, and cycleImages functions and instead uses a single useEffect hook to manage the cycling behavior. The useEffect hook listens for changes in isCycleRunning and starts/stops the cycling accordingly.



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
      backgroundColor: '#FFFFF8',
      duration: 500,
      easing: 'easeOutQuad',
    });
  };

  const handleClick = (key) => {
    anime({
      targets: '.rectangle',
      opacity: 0,
      duration: 500,
      easing: 'easeOutQuad',
      complete: () => setCurrentPage(key),
    });

    anime({
      targets: '#gamma-rectangle',
      translateY: computeTranslateY(),
      duration: 500,
      easing: 'easeOutQuad',
    });
    setTitleAnimation(true);
  };

  const handleGammaClick = () => {
    anime({
      targets: '.rectangle',
      opacity: 1,
      duration: 500,
      easing: 'easeOutQuad',
    });

    anime({
      targets: '#gamma-rectangle',
      duration: 500,
      translateY: 0,
      easing: 'easeOutQuad',
      complete: () => setCurrentPage(null),
    });
  };

  const renderPageContent = () => {
    return (
      <Routes>
        <Route path="/work" element={<Work onAnimationEnd={() => setTitleAnimation(false)} />} />
        <Route path="/about" element={<About onAnimationEnd={() => setTitleAnimation(false)} />} />
        <Route path="/contact" element={<Contact onAnimationEnd={() => setTitleAnimation(false)} />} />
        <Route path="/cv" element={<Cv onAnimationEnd={() => setTitleAnimation(false)} />} />
        <Route path="/">
          {sections.map((section) => (
            <Link
              to={`/${section.key}`}
              className="rectangle"
              key={section.key}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {section.title}
            </Link>
          ))}
        </Route>
      </Routes>
    );
  };

  return (
    <Router>
      <div className="App">
        {renderPageContent()}
        <div
          className="small-rectangle"
          id="gamma-rectangle"
          onClick={handleGammaClick}
          onMouseEnter={gammaHandleMouseEnter}
          onMouseLeave={gammaHandleMouseLeave}
        >
          <div
            className="image-overlay"
            style={{
              backgroundColor: showGammaText ? "transparent" : "#FFFF6C",
            }}
          ></div>
          <img
            src={currentImageUrl}
            alt="Sample"
            className="small-rectangle-image"
            style={{ display: showGammaText ? "none" : "block" }}
          />
          {showGammaText && "GammA"}
        </div>
      </div>
    </Router>
  );
}

export default App;