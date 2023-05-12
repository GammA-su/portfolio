// src/App.js
import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import './App.css';
import anime from 'animejs';
import '@fontsource/roboto/300.css';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Cv from './pages/Cv';
import GammaRectangle from './components/GammaRectangle';
import './styles/Navigation.css';
import { debounce } from 'lodash';
import { Helmet } from 'react-helmet';






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
//import FullscreenContext from './components/FullscreenContext';
import conceptxd1 from "./img/conceptxd1.png";
import conceptxd2 from "./img/conceptxd2.png";
import conceptxd3 from "./img/conceptxd3.png";
import conceptxd5 from "./img/conceptxd5.png";
import conceptcode1 from "./img/conceptcode1.png";
import conceptcode5 from "./img/conceptcode5.png";
import projectv from "./img/projectv.png";
import projectv2 from "./img/projectv2.png";
import projectv3 from "./img/projectv3.png";
import projectv5 from "./img/projectv5.png";
import projectv6 from "./img/projectv6.png";
import projectv7 from "./img/projectv7.png";
import projectv8 from "./img/projectv8.png";
import projectvcode5 from "./img/projectvcode5.png";
import projectvcode6 from "./img/projectvcode6.png";
import projectvcode7 from "./img/projectvcode7.png";


function App() {
  const [translateY, setTranslateY] = useState(0);

  const [titleAnimation, setTitleAnimation] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(null);
  const [showGammaText, setShowGammaText] = useState(true);
  const [isMovingToCenter, setIsMovingToCenter] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
 // const [isFromClick, setIsFromClick] = useState(false);
 const [isAnimating, setIsAnimating] = useState(false);
  const [gammaTranslateY, setGammaTranslateY] = useState(0);
const fullscreenContextValue = { isFullscreen, setIsFullscreen };




  const mountedRef = useRef(false);

  const sections = [
    { title: 'Curriculum Vitae', key: 'cv' },
    { title: 'Lettre', key: 'about' },
    { title: "Work", key: 'work' },
    { title: "Centre d'interet", key: 'contact' },
  ];
  
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    mountedRef.current = true;
    setGammaTranslateY(computeTranslateY());
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
    conceptxd1,
    conceptxd2,
    conceptxd3,
    conceptxd5,
    conceptcode1,
    conceptcode5,
    projectv,
    projectv2,
    projectv3,
    projectv5,
    projectv6,
    projectv7,
    projectv8,
    projectvcode5,
    projectvcode6,
    projectvcode7,
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
  if (isMovingToCenter || isAnimating) return;
  anime({
    targets: event.currentTarget,
    backgroundColor: '#FFFF6C',
    duration: 100 ,
    easing: 'easeOutQuad',
    scale: 1.1,
    complete: () => {
    if (mountedRef.current) {
      setShowGammaText(false);
      if (!isAnimating) {
        setIsCycleRunning(true);
      }
      }
    },
  });
};



const gammaHandleMouseLeave = (event) => {
  if (isMovingToCenter || isAnimating) return;

  anime({
    targets: event.currentTarget,
    backgroundColor: '#FFFF6C',
    duration: 100,
    scale: 1,
    easing: 'easeOutQuad',
    complete: () => {
      if (mountedRef.current) {
        console.log("Before Complete: ",isCycleRunning)
      setIsCycleRunning(false);
      console.log("After Complete: ",isCycleRunning)
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
    console.log("IS IT??? : ",isAnimating)
    console.log("After Complete: ",isCycleRunning)
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
    setIsAnimating(true);
    anime({
      targets: '.rectangle',
      opacity: 0,
      duration: 500,
      easing: 'easeOutQuad',
      complete: () => setCurrentPage(key),
    });
  
    // Get the translateY value from computeTranslateY()
    const translateY = computeTranslateY();

    // Animate the gamma rectangle only when a user clicks on a rectangle section
    const gammaRectangleElement = document.getElementById("gamma-rectangle");
    if (gammaRectangleElement) {
      anime({
        targets: gammaRectangleElement,
        translateY: translateY,
        opacity:[0, 1],
        duration: 500,
        easing: 'easeOutQuad',
        begin: () => {gammaRectangleElement.style.opacity = 0;},
        complete: () => {
          setIsAnimating(false);
          
        },
      });
    }
  
    setTitleAnimation(true);
  };
  
  const handleGammaClick = () => {
    // Add this line to stop cycling images
    setIsCycleRunning(false);
  
    anime({
      targets: '.rectangle',
      opacity: 1,
      duration: 200,
      easing: 'easeOutQuad',
    });
  
    anime({
      targets: '#gamma-rectangle',
      duration: 200,
      translateY: 0,
      easing: 'easeOutQuad',
      complete: () => {
        setCurrentPage(null);
        // Reset translateY after the animation is complete
        setTimeout(() => {
          setGammaTranslateY(computeTranslateY());
          setIsAnimating(false);
        }, 500);
      },
    });
  };
  


  const debouncedGammaHandleMouseEnter = debounce(gammaHandleMouseEnter, 100);
  const debouncedGammaHandleMouseLeave = debounce(gammaHandleMouseLeave, 100);



// Add the GammaRectangle component

  const renderMainPage = () => {
    return (
      <>
        {sections.map((section) => (
          <Link
            to={`/${section.key}`}
            className="rectangle Link"
            key={section.key}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(section.key)}
          >
            {section.title}
          </Link>
        ))}
      </>
    );
  };
  
  return (
    
    <Router>
      <Helmet>
      <title>Accueil</title>
    </Helmet>
      <div className="App">
        <Routes>
          <Route
            path="/work"
            element={
              <Work
                onAnimationEnd={() => setTitleAnimation(false)}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                onAnimationEnd={() => setTitleAnimation(false)}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                onAnimationEnd={() => setTitleAnimation(false)}
              />
            }
          />
          <Route
            path="/cv"
            element={
              <Cv
                onAnimationEnd={() => setTitleAnimation(false)}
              />
            }
          />
          <Route path="/" element={renderMainPage()} />
        </Routes>
       
        <GammaRectangle
  handleGammaClick={handleGammaClick}
  showGammaText={showGammaText}
  currentImageUrl={currentImageUrl}
  isCycleRunning={isCycleRunning}
  setIsCycleRunning={setIsCycleRunning}
  translateY={gammaTranslateY}
  gammaHandleMouseEnter={debouncedGammaHandleMouseEnter}
  gammaHandleMouseLeave={debouncedGammaHandleMouseLeave}
  
/>
      </div>
    </Router>
  );
};
export default App;  