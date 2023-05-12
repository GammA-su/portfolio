import React , {useState} from 'react';
import anime from 'animejs';
import '../styles/Cv.css';
import NavigationBar from '../components/NavigationBar';
import { Helmet } from 'react-helmet';


//import FullscreenContext from '../components/FullscreenContext';

function Cv({ onAnimationEnd }) {
  const titleRef = React.useRef(null);
  const animationIdRef = React.useRef(null);
  const iframeRef = React.useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const sections = [
    { title: 'Curriculum Vitae', key: 'cv' },
    { title: 'Lettre', key: 'about' },
    { title: "Work", key: 'work' },
    { title: "Centre d'intérêt", key: 'contact' },
  ];
  
  

  const containerStyle = isFullscreen
  ? { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }
  : { position: 'relative', width: '100%', height: '100%' };

const iframeStyle = isFullscreen
  ? { width: '90%', height: '100%', border: 'none', zIndex: 1000, 'margin-left': '2em', 'margin-top': '2em', scale : '1' }
  : { width: '90%', height: '100%', border: 'none' };

  React.useEffect(() => {
    if (titleRef.current) {
      const text = titleRef.current.innerText;
      let spannedText = '';

      for (let i = 0; i < text.length; i++) {
        spannedText += `<span>${text[i]}</span>`;
      }
      
      

      titleRef.current.innerHTML = spannedText;

      animationIdRef.current = anime({
        targets: titleRef.current.children,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: (el, i) => 10 * i,
        complete: onAnimationEnd,
      });
      if (iframeRef.current) {
        anime({
          targets: iframeRef.current,
          opacity: [0, 1],
          translateY: [-50, 0],
          easing: 'easeOutExpo',
          duration: 1000,
          delay:0,
        });
        const gammaRectangleElement = document.getElementById("gamma-rectangle");
    anime({
      targets: gammaRectangleElement,
      opacity:1,
      duration: 1,
      easing: 'easeOutQuad',
      begin: () => {gammaRectangleElement.style.opacity = 0;},
      complete: () => {
       // setIsAnimating(false);
        
      },
    });

      }
    }

    return () => {
      if (animationIdRef.current) {
        animationIdRef.current.pause();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page-content">
      <Helmet>
      <title>Curriculum Vitae</title>
    </Helmet>
       <div className="cv-container" style={containerStyle}>
      <h1 className="title-slide-top-left" ref={titleRef}>
        Curriculum Vitae
      </h1>
      <iframe
      ref={iframeRef}
        src="https://cv.2kken.com"
        title="CV"
        width="100%"
        height="100%"
        className='cv-iframe'
        style={iframeStyle}
      />
      
    </div>
    <button
        className="fullscreen-button"
        onClick={toggleFullscreen}
        style={{ position: 'fixed', bottom: '10px', left: '10px', zIndex: 1001   }}
      >
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </button>
    <NavigationBar sections={sections} currentSection="cv" />
    </div>
  );
}

export default Cv;
