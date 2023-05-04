// src/App.js
import React from 'react';
import './App.css';
import anime from 'animejs';
import '@fontsource/roboto/300.css';

function App() {
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
  
 // With this change, the small rectangle should move to the bottom of the viewport when one of the four rectangles is clicked, and
  

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
      /* Make the translateY translate the rectangle to the bottom of the screen */
      translateY: computeTranslateY(), 
      duration: 500,
      easing: 'easeOutQuad',
    });
  };
  const handleGammaClick = () => {
    anime({
      targets: '.rectangle',
      opacity: 1,
      duration: 500,
      easing: 'easeOutQuad',
    });

    const translateYValue = computeTranslateY();
  
    anime({
      targets: '#gamma-rectangle',
      duration: 500,
      translateY: 0,
      easing: 'easeOutQuad',
      complete: () => setCurrentPage(null),
    });
  };  

  const renderPageContent = () => {
    if (currentPage) {
      return (
        <div className="page-content">
          <h1>{sections.find((section) => section.key === currentPage).title}</h1>
        </div>
      );
    }

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
  };

  return (
    <div className="App">
      {renderPageContent()}
      <div className="small-rectangle"  id="gamma-rectangle" onClick={handleGammaClick}>GammA</div>
    </div>
  );
}

export default App;
