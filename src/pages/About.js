import React from 'react';
import anime from 'animejs';
import '../styles/About.css';
import NavigationBar from '../components/NavigationBar';
import { Helmet } from 'react-helmet';

function About({ onAnimationEnd }) {
  const titleRef = React.useRef(null);
  const animationIdRef = React.useRef(null);
  const paragraphRefs = React.useRef([]);
  paragraphRefs.current = [];
  const sections = [
    { title: 'Curriculum Vitae', key: 'cv' },
    { title: 'Lettre', key: 'about' },
    { title: "Work", key: 'work' },
    { title: "Centre d'intérêt", key: 'contact' },
  ];
 
  const animateParagraphs = () => {
    paragraphRefs.current = paragraphRefs.current.slice(0, 7);
    const paragraphs = document.querySelectorAll('.letter-container .hidden-text');
    anime({
      targets: paragraphs,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: (el, i) => 100 + 50 * i
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
  };

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
      animateParagraphs();
    }

    return () => {
      if (animationIdRef.current) {
        animationIdRef.current.pause();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const wrapCharactersInSpans = (text) => {
    return text
      .split('')
      .map((char) => `<span>${char}</span>`)
      .join('');
  };

  return (
    <div className="page-content">
       <Helmet>
    <title>Lettre</title>
  </Helmet> 
  <h1 className="title-slide-top-left" ref={titleRef}>

    Lettre
  </h1>
  <div className="letter-container">
    {[
      
      "Cher employeur,","Permettez-moi de me présenter : je suis Yannis Zouitni, un étudiant de 19 ans en Informatique et Ingénierie Nano-électronique à l'Université de Strasbourg. Passionné par les défis et l'amélioration constante de mes compétences en programmation, intelligence artificielle, gestion de serveurs et matériel informatique, je suis convaincu que mon profil saura vous intéresser.",
      "Dès mon jeune âge, j'ai développé une passion pour l'informatique, qui m'a conduit à construire mon propre ordinateur à l'âge de 12 ans avec l'aide de mes parents. Cette passion s'est ensuite renforcée grâce à mon programme MP2I au Lycée Carnot, qui m'a permis d'acquérir des compétences solides en programmation fonctionnelle.",
      "Mon expérience en tant que responsable informatique chez Creadiag témoigne de mon savoir-faire dans le domaine. J'ai élaboré l'infrastructure réseau, sélectionné les composants optimaux pour plusieurs ordinateurs, assemblé ces derniers et configuré le réseau en utilisant des serveurs Synology, Azure Active Directory et Microsoft 365. De plus, j'ai mis en place Endpoint Manager et Microsoft Intune pour les appareils mobiles des employés, garantissant ainsi un environnement informatique sécurisé et pratique.",
    "Tout au long de mon expérience chez Creadiag, je me suis appliqué à créer un système fiable et sécurisé, qui n'a connu aucun problème majeur depuis plus d'un an. J'ai également géré et résolu rapidement les problèmes mineurs, tout en développant des stratégies pour anticiper et prévenir les complications futures. Cette expérience pratique, combinée à mes connaissances théoriques, fait de moi un candidat idéal pour relever les défis informatiques.",
  "En tant qu'individu ambitieux et perfectionniste, je m'efforce sans cesse d'atteindre l'excellence dans tous les aspects de mon travail. L'informatique est bien plus qu'un simple passe-temps pour moi, c'est un mode de vie qui me pousse constamment à apprendre, progresser et développer mes compétences au maximum de leur potentiel. Malgré ma première année d'études, je suis prêt à relever des défis professionnels nécessitant un minimum de deux ans d'expérience, car ma passion et mon dévouement pour l'informatique me permettront de devenir un atout précieux pour toute équipe.",
  'Je vous invite à consulter mon portfolio pour avoir un aperçu de mes réalisations et de mes compétences, et je serais ravi de discuter de ma candidature avec vous. Je suis convaincu que mon profil saura répondre à vos attentes et que je pourrai contribuer significativement au succès de votre entreprise.'
    ].map((text, index) => (
      <p
      className='hidden-text'
        key={index}
        dangerouslySetInnerHTML={{ __html: wrapCharactersInSpans(text) }}
        ref={(el) => (paragraphRefs.current[index] = el)}
      />
    ))}
  </div>
  <NavigationBar sections={sections} currentSection="about" />
</div>
  );
}

export default About;
