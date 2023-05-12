import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';


const NavigationBar = ({ sections, currentSection }) => {
  return (
    <div className="navigation-bar">
    {sections.map((section) => {
      if (section.key === currentSection) {
        return (
          <div key={section.key} className="navigation-item navigation-item-current">
            {section.title}
          </div>
        );
      }
      return (
        <Link to={`/${section.key}`} key={section.key} className="navigation-item">
          {section.title}
        </Link>
      );
    })}
  </div>
  );
};

export default NavigationBar;

