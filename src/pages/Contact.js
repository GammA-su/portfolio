import React from 'react';
import anime from 'animejs';

function About({ onAnimationEnd }) {
  const titleRef = React.useRef(null);
  const [animationCompleted, setAnimationCompleted] = React.useState(false);

  React.useEffect(() => {
    if (titleRef.current && !animationCompleted) {
      const text = titleRef.current.innerText;
      let spannedText = '';

      for (let i = 0; i < text.length; i++) {
        spannedText += `<span>${text[i]}</span>`;
      }

      titleRef.current.innerHTML = spannedText;

      anime({
        targets: titleRef.current.children,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 3000,
        delay: (el, i) => 100 * i,
        complete: () => {
          onAnimationEnd();
          setAnimationCompleted(true);
        },
      });
    }
  }, [onAnimationEnd, animationCompleted]);

  return (
    <div className="page-content">
      <h1 className="title-slide-top-left" ref={titleRef}>
        About
      </h1>
    </div>
  );
}

export default About;
