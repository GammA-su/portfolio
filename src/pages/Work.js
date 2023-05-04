import React from 'react';
import '../styles/Work.css';
import anime from 'animejs';
import ImageGallery from '../components/ImageGallery';
import sampleImages from '../data/sampleImages';

function Work({ onAnimationEnd }) {
  const titleRef = React.useRef(null);

  React.useEffect(() => {
    if (titleRef.current) {
      const text = titleRef.current.innerText;
      titleRef.current.innerHTML = '';

      for (let i = 0; i < text.length; i++) {
        titleRef.current.innerHTML += `<span>${text[i]}</span>`;
      }

      anime({
        targets: titleRef.current.children,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 3000,
        delay: (el, i) => 100 * i,
        complete: onAnimationEnd,
      });
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page-content">
      <h1 className="title-slide-top-left typewriter" ref={titleRef}>
        Work
      </h1>
      <div className="image-gallery-wrapper">
        <ImageGallery images={sampleImages} />
      </div>
    </div>
  );
}

export default Work;
