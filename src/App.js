// src/App.js
import React from 'react';
import './App.css';
import anime from 'animejs';
import '@fontsource/roboto/300.css';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Cv from './pages/Cv';

function App() {
  const [titleAnimation, setTitleAnimation] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(null);
  const sections = [
    { title: 'Work', key: 'work' },
    { title: 'About', key: 'about' },
    { title: 'Contact', key: 'contact' },
    { title: 'Curriculum Vitae', key: 'cv' },
  ];

  const computeTranslateY = () => {
    const appHeight = window.innerHeight - 40; // Subtract 40 for the app padding
    const gammaRect = document.getElementById("gamma-rectangle");
    const gammaRectHeight = gammaRect.offsetHeight;
    const padding = 20;
    const translateY = (appHeight - ((window.innerHeight / 2) - padding)) - ((gammaRectHeight / 2) - padding);
    console.log(appHeight, gammaRectHeight, translateY);
    return translateY;
  };

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
    switch (currentPage) {
      case 'work':
        return <Work onAnimationEnd={() => setTitleAnimation(false)} />;
      case 'about':
        return <About onAnimationEnd={() => setTitleAnimation(false)}/>;
      case 'contact':
        return <Contact onAnimationEnd={() => setTitleAnimation(false)} />;
      case 'cv':
        return <Cv onAnimationEnd={() => setTitleAnimation(false)} />;
      default:
        return sections.map((section) => (
          <div
            className="rectangle"
            key={section.key}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(section.key)}
          >
            {section.title}
          </div>
        ));
    }
  };

  return (
    <div className="App">
      {renderPageContent()}
      <div
        className="small-rectangle"
        id="gamma-rectangle"
        onClick={handleGammaClick}
      >
        GammA
      </div>
    </div>
  );
}

export default App;
