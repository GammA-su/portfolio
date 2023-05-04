import React from 'react';
import anime from 'animejs';

function About({ onAnimationEnd }) {
  const titleRef = React.useRef(null);
  const animationIdRef = React.useRef(null);

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
        duration: 3000,
        delay: (el, i) => 100 * i,
        complete: onAnimationEnd,
      });
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
      <h1 className="title-slide-top-left" ref={titleRef}>
        About
      </h1>
    </div>
  );
}

export default About;
