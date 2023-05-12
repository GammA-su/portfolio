import React from 'react';
import anime from 'animejs';
import '../styles/Interests.css';
import NavigationBar from '../components/NavigationBar';
import { Helmet } from 'react-helmet';


function Contact({ }) {
  const titleRef = React.useRef(null);
  const animationIdRef = React.useRef(null);
  const interestRefs = React.useRef([]);
  interestRefs.current = [];
  const sections = [
    { title: 'Curriculum Vitae', key: 'cv' },
    { title: 'Lettre', key: 'about' },
    { title: "Work", key: 'work' },
    { title: "Centre d'intérêt", key: 'contact' },
  ];
  
  
  const interests = [
    {
      title: 'Culture japonaise',
      description: "Passionné par les mangas, animes et cuisine japonaise.",
    },
    {
      title: 'Sport et kendo',
      description: "Actif et rigoureux, je m'adonne à la pratique sportive, en particulier le kendo, ce qui m'a permis de développer la discipline, la concentration et l'endurance.",
    },
    {
      title: 'Musique et échecs',
      description: 'Appréciant la musique et les échecs, ces activités favorisent ma pensée créative et stratégique.',
    },
  ];


  React.useEffect(() => { 
    if (titleRef.current) {
      const text = titleRef.current.innerText;
      let spannedText = '';

      for (let i = 0; i < text.length; i++) {
        spannedText += `<span>${text[i]}</span>`;
      }

      titleRef.current.innerHTML = spannedText;
      interestRefs.current = interestRefs.current.slice(0, interests.length);
      animationIdRef.current = anime({
        targets: titleRef.current.children,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: (el, i) => 10 * i,
        begin: () => {

          interestRefs.current = interestRefs.current.slice(0, interests.length);
          anime({
            targets: interestRefs.current,
            translateY: [50, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: (el, i) => 250 * i + 500, // Adjust the delay as needed
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
      <Helmet>
      <title>Centre d'intérêt</title>
    </Helmet>
      <h1 className="title-left" ref={titleRef}>
      Centre d'intérêt
      </h1>
    <div className="interests">
 

    <div className="interests-container">
      {interests.map((interest, index) => (
       <div key={index} className="interest-section" ref={(el) => (interestRefs.current[index] = el)}>
          <h2 className="interest-title">{interest.title}</h2>
          <p className="interest-description">{interest.description}</p>
        </div>
      ))}
    </div>
  </div>
  <NavigationBar sections={sections} currentSection="contact" />
  </div>
    
  );
}

export default Contact;
