import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Cv from './pages/Cv';

function Content({
  handleMouseEnter,
  handleMouseLeave,
  handleGammaClick,
  gammaHandleMouseEnter,
  gammaHandleMouseLeave,
  showGammaText,
  currentImageUrl,
}) {
  const sections = [
    { title: 'Work', key: 'work' },
    { title: 'About', key: 'about' },
    { title: 'Contact', key: 'contact' },
    { title: 'Curriculum Vitae', key: 'cv' },
  ];

  return (
    <div className="content">
      <div className="links-container">
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
      </div>
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
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default Content;
