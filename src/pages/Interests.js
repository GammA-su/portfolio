import React from 'react';
import anime from 'animejs';
import NavigationBar from '../components/NavigationBar';
import '../styles/Interests.css';

const sections = [
  { title: 'Curriculum Vitae', key: 'cv' },
  { title: 'Lettre', key: 'about' },
  { title: "Work", key: 'work' },
  { title: "Centre d'interet", key: 'contact' },
];



function Interests({ onAnimationEnd }) {
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
        duration: 1000,
        delay: (el, i) => 10 * i,
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

  const interestsConst = [
    {
      title: 'Culture japonaise',
      description: "Passionné par les mangas, animes et cuisine japonaise, je m'efforce de maintenir un mode de vie équilibré tout en explorant les traditions culinaires et narratives du Japon.",
      imagePlaceholder: 'https://via.placeholder.com/300',
    },
    {
      title: 'Condition physique et kendo',
      description: "Actif et discipliné, je pratique le sport, notamment le kendo, pour développer la concentration et l'endurance.",
      imagePlaceholder: 'https://via.placeholder.com/300',
    },
    {
      title: 'Musique et échecs',
      description: 'Appréciant la musique et les échecs, ces activités favorisent ma pensée créative et stratégique.',
      imagePlaceholder: 'https://via.placeholder.com/300',
    },
    {
      title: 'Sports',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imagePlaceholder: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="page-content">
    <h1 className="title-slide-top-left" ref={titleRef}>
       Centre d'interet
      </h1>
    <div className="interests">
      <h1 className="interests-header">Area of Interest</h1>

      <div className="interests-container">
        {interestsConst.map((interesti, index) => (
          <div key={index} className="interest-section">
            <h2 className="interest-title">{interestsConst.title}</h2>
            <img
              className="interest-image"
              src={interestsConst.imagePlaceholder}
              alt={interestsConst.title}
            />
            <p className="interest-description">{interestsConst.description}</p>
          </div>
        ))}
      </div>
    </div>
    <NavigationBar sections={sections} currentSection=" />
    </div>
  );
}

export default Interests;
