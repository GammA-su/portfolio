import React, { useState } from 'react';
import '../styles/Work.css';
import anime from 'animejs';
import ImageGallery from '../components/ImageGallery';
import NavigationBar from '../components/NavigationBar';
//import Images from '../data/Image';
import buildlabs from "../img/buildlabs.png";
//import buildlabs2 from "../img/buildlabs2.png";
import buildlabs3 from "../img/buildlabs3.png";
import buildlabscode1 from "../img/buildlabscode1.png";
import buildlabscode3 from "../img/buildlabscode3.png";
//import buildlabscode4 from "../img/buildlabscode4.png";
import buildlabscode5 from "../img/buildlabscode5.png";
import buildlabscode6 from "../img/buildlabscode6.png";
import buildlabsjs from "../img/buildlabsjs.png";
import { Helmet } from 'react-helmet';

import conceptxd1 from "../img/conceptxd1.png";
import conceptxd2 from "../img/conceptxd2.png";
import conceptxd3 from "../img/conceptxd3.png";
import conceptxd5 from "../img/conceptxd5.png";
import conceptcode1 from "../img/conceptcode1.png";
import conceptcode5 from "../img/conceptcode5.png";
import projectv from "../img/projectv.png";
import projectv2 from "../img/projectv2.png";
//import projectv3 from "../img/projectv3.png";
//import projectv5 from "../img/projectv5.png";
import projectv6 from "../img/projectv6.png";
import projectv7 from "../img/projectv7.png";
//import projectv8 from "../img/projectv8.png";
//import projectvcode5 from "../img/projectvcode5.png";
import projectvcode6 from "../img/projectvcode6.png";
import projectvcode7 from "../img/projectvcode7.png";
import portfolio from "../img/portfolio.png";
import portfolio2 from "../img/portfolio2.png";
import portfolio3 from "../img/portfolio3.png";
import portfolio5 from "../img/portfolio5.png";
import portfoliolong from "../img/portfoliolong.gif";
import portfolioanim1 from "../img/portfollioanim1.gif";
import portfoliofullscreen from "../img/portfolliofullscreen.gif";
import portfoliocode1 from "../img/portfoliocode1.png";
import portfoliocode2 from "../img/portfoliocode2.png";
import portfoliocode3 from "../img/portfoliocode3.png";
import portfoliocode4 from "../img/portfoliocode4.png";


function Work({ onAnimationEnd }) {
  const titleRef = React.useRef(null);
  const [activeProject, setActiveProject] = useState('buildlabs');
  const [language, setLanguage] = useState('FR');
  const [displayMessage, setDisplayMessage] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [messageActive, setMessageActive] = useState(false);



  const buildlabsImageDescriptionsFR = [
    'Présentation de "Buildlabs", mon premier projet de site web ambitieux qui témoigne de ma passion précoce pour le développement web. Ce projet a été créé en 2019 lors de ma première année de lycée en collaboration avec deux autres camarades de classe.',
    "Buildlabs est un site web informatif qui offre des conseils pour choisir les bons composants d'un PC, comprendre leur rôle et recommander des options adaptées aux utilisateurs. Mes coéquipiers ont fourni le contenu, tandis que je me concentrais sur les aspects techniques et la programmation.",
    "En tant que développeur du projet, j'ai utilisé HTML et CSS pour créer la structure et le style du site web. Cette expérience m'a permis de renforcer mes compétences en résolution de problèmes et d'améliorer ma compréhension des technologies essentielles du développement web.",
    "Pour garantir une expérience utilisateur fluide, j'ai intégré JavaScript pour ajouter de l'interactivité et du contenu dynamique. Le processus m'a appris à mettre en œuvre efficacement les langages de script, une compétence précieuse recherchée par les employeurs dans le domaine du développement web.",
    "L'un des défis les plus importants que j'ai rencontrés lors du projet était de créer un design responsive en utilisant des requêtes média. Surmonter cet obstacle a élargi mon éventail de compétences et m'a préparé à des projets plus avancés, tels que les applications ReactJS et le développement full-stack.",
    'Exemple de media querries',
    "Réussir à créer un design responsive et maîtriser habilement flexbox, les systèmes de grille, ou encore les positions absolue et relative est essentiel, car cela peut rapidement devenir compliqué si cela n'est pas bien géré. C'est pourquoi il est crucial de maintenir un code organisé et propre."
  ];
  const buildlabsImageDescriptionsEN= [  
   'Introducing "Buildlabs," my first ambitious website project that showcases my early passion for web development. This project was created in 2019 during my first year of high school ("Seconde") in France as a collaborative effort with two other classmates.',
   'Buildlabs is an informative website that offers guidance on selecting the right PC components, understanding their roles, and recommending suitable options for users. My teammates contributed the content, while I focused on the technical aspects and coding.',
   "As the project's developer, I utilized HTML and CSS to create the website's structure and styling. This experience allowed me to strengthen my problem-solving skills and enhance my understanding of essential web development technologies.",
   'To ensure a seamless user experience, I incorporated JavaScript to add interactivity and dynamic content. The process taught me how to effectively implement scripting languages, a valuable skill sought by employers in the web development field.',
   'One of the most significant challenges I faced during the project was creating a responsive design using media queries. Overcoming this obstacle expanded my skill set and prepared me for more advanced projects, such as ReactJS applications and full-stack development.',
    'Exemple de media querries',
    "Réussir à créer un design responsive et maîtriser habilement flexbox, les systèmes de grille, ou encore les positions absolue et relative est essentiel, car cela peut rapidement devenir compliqué si cela n'est pas bien géré. C'est pourquoi il est crucial de maintenir un code organisé et propre."
  ];

  const buildlabsTitleDescriptionsEN = [
    'BuildLabs - Introduction',
      'BuildLabs - What is it?',
      'BuildLabs - What technologies?',
      'BuildLabs - JavaScript',
      'BuildLabs - Responsive Design',
      'BuildLabs - Exemple',
      'BuildLabs - What I learned',
      'BuildLabs - Website',
      'BuildLabs - Website'
  ];

  const buildlabsTitleDescriptionsFR = [
    'BuildLabs - Introduction',
    'BuildLabs - Qu\'est-ce?',
    'BuildLabs - Quelles technologies?',
    'BuildLabs - JavaScript',
    'BuildLabs - Responsive Design',
    'BuildLabs - Exemple',
    'BuildLabs - Ce que j\'ai appris',
    'BuildLabs - Site Web',
    'BuildLabs - Site Web'
  ];

  const conceptProjectImageDescriptionsFR = [
    "Présentation de CONCEPT, un jeu basé sur p5.js que j'ai développé en 2020 lors de ma première année de lycée. Ce projet m'a permis d'améliorer considérablement mes compétences en JavaScript et d'explorer ma créativité dans la conception et le développement de jeux.",
    "J'ai utilisé Adobe XD pour concevoir le jeu, en mettant l'accent sur la création d'une expérience visuelle attrayante. En expérimentant des palettes de couleurs et des éléments de design, j'ai créé une interface captivante et conviviale qui complétait le gameplay.",
    "L'objectif du jeu est de naviguer avec un joueur en mouvement constant sans franchir les bords du cadre. À mesure que la vitesse du joueur augmente, le défi se corse, nécessitant des réflexes rapides et une réflexion stratégique pour changer de direction et éviter les obstacles.",
    "La mécanique unique du jeu a été inspirée par un bug que j'ai initialement rencontré lors du développement. En tirant parti de cet élément inattendu, je l'ai transformé en la caractéristique principale du gameplay, démontrant ainsi mon adaptabilité et mes compétences en résolution de problèmes.",
    "Au cours du développement de CONCEPT, j'ai également acquis une expérience précieuse en programmation orientée objet (POO). En utilisant des classes et d'autres concepts de POO, j'ai pu créer une base de code plus structurée et facile à maintenir.",
    "Concept a été une étape essentielle dans le perfectionnement de mes compétences en JavaScript. Le projet m'a mis au défi d'explorer de nouvelles techniques et d'élargir mes connaissances, améliorant ainsi ma maîtrise de ce langage de programmation essentiel.",
  ];

  const conceptProjectImageDescriptionsEN = [
    'Introducing "Concept," a p5.js-based game I developed in 2020 during my first year of high school ("Seconde") in France. This project allowed me to significantly improve my JavaScript skills and explore my creativity in both game design and development.',
    'I used Adobe XD to design the game, focusing on creating an appealing visual experience. By experimenting with color schemes and design elements, I crafted a captivating and user-friendly interface that complemented the gameplay.',
    "The objective of the game is to navigate a constantly moving player without crossing the edges of the frame. As the player's speed increases, the challenge intensifies, requiring quick reflexes and strategic thinking to change direction and avoid obstacles.",
    "The game's unique mechanic was inspired by a bug I initially encountered during development. Embracing this unexpected element, I transformed it into the core gameplay feature, demonstrating my adaptability and problem-solving skills.",
    'During the development of "Concept," I also gained valuable experience with object-oriented programming (OOP). By utilizing classes and other OOP concepts, I was able to create a more structured and maintainable codebase.',
    '"Concept" served as an essential stepping stone in advancing my JavaScript abilities. The project challenged me to explore new techniques and expand my knowledge, ultimately enhancing my proficiency in this vital programming language.',
  ];

  const projectvImageDescriptionsFR = [
    "Présentation de ProjectV, une application de chat basée sur Electron et conçue pour affiner les réponses de l'IA à des tâches spécifiques. En tant que développeur autodidacte, j'ai saisi l'opportunité de travailler avec de nouvelles technologies et de nouveaux langages de programmation pour créer un projet unique et innovant.",
    "ProjectV exigeait la maîtrise de plusieurs langages de programmation, tels que JavaScript et Python. En établissant une connexion entre les deux langages, j'ai pu intégrer la demande d'API, l'invite de l'utilisateur et la fonctionnalité d'IA dans le framework Electron, démontrant ainsi ma capacité d'adaptation et mes compétences en matière de résolution de problèmes.",
    "Au cours du processus de développement, j'ai acquis de l'expérience avec IPC Renderer, un outil essentiel pour la communication entre les processus principal et de rendu dans Electron. Ces connaissances m'ont permis d'élargir mes compétences en tant que développeur et d'assurer une fonctionnalité transparente dans ProjectV.",
    "J'ai intégré Azure AI Voice pour activer la fonctionnalité de synthèse vocale, permettant à l'IA de communiquer des réponses de manière audible. Cette fonctionnalité a ajouté une couche supplémentaire d'interactivité et d'engagement de l'utilisateur à l'application.",
    "ProjectV sert de tremplin pour des projets encore plus ambitieux. En exploitant des technologies telles que Neo4j pour créer des graphes de connaissances, je souhaite améliorer encore la qualité des réponses de l'IA. Je suis impatient de poursuivre le développement de ce projet et d'explorer le potentiel des applications d'IA de pointe.",
    "Interface utilisateur des paramètres de ProjectV : Vous pouvez modifier la température, le nombre maximal de tokens et l'invite par défaut de l'IA. ",
  ];

  const projectvImageDescriptionsEN = [
    "Presenting ProjectV, an Electron-based chat application designed to fine-tune AI responses for specific tasks. As a self-taught developer, I embraced the challenges of working with new technologies and programming languages to create a unique and innovative project.",
    "ProjectV demanded proficiency in multiple programming languages, such as JavaScript and Python. By establishing a connection between the two languages, I was able to integrate the API request, user prompt, and AI functionality within the Electron framework, showcasing my adaptability and problem-solving skills.",
    "During the development process, I gained experience with IPC Renderer, an essential tool for communication between the main and renderer processes in Electron. This knowledge further expanded my skillset as a developer and allowed for seamless functionality in ProjectV.",
   " I incorporated Azure AI Voice to enable text-to-speech functionality, allowing the AI to audibly communicate responses. This feature added an extra layer of interactivity and user engagement to the application.",
  "ProjectV serves as a stepping stone for even more ambitious projects. By leveraging technologies like Neo4j to create knowledge graphs, I aim to enhance the AI's response quality further. I am excited to continue developing this project and exploring the potential for cutting-edge AI applications.",
  "User Interface for ProjectV Settings: You can adjust the temperature, the maximum number of tokens, and the default prompt for the AI."
  ];

  const portfolioImageDescriptionsEN = [
    "Introducing my portfolio built with React.js and Anime.js, an exciting project that allowed me to showcase the progress of my skills in creating comprehensive web applications. Having developed this project recently, I was able to put my front-end and back-end development knowledge into practice.",
    "I used React useEffect and state to control the animation cycle of the images. With each delay, the index of the current image is updated, creating a dynamic and visually appealing loop effect.",
    "I employ React.js and React Router to create a single-page web application providing smooth navigation. React.js enables the creation of reactive components, while React Router manages navigation between pages without reloading the entire page, offering a faster and more enjoyable user experience.",
    "The CSS code uses relative units and calculation functions to automatically adjust element dimensions based on screen size. This ensures an optimal user experience on various devices, demonstrating a responsive approach and attention to cross-platform compatibility.",
    "The GammaRectangle component is a key part of the code, as it is reusable and modular. This component manages its own animations and mouse events, allowing for easy integration of similar features in other parts of the application.",
    "This portfolio utilizes anime.js for fluid and interactive animations, with fade and displacement effects. Elements are animated by opacity, scale, and Y position. 'mouseenter' and 'mouseleave' events handle interaction, with debounce functions to optimize the experience.",
    
    "Backend features will soon be added to this portfolio to highlight the skills acquired in MySQL and MongoDB. Following numerous learnings and mini-projects, it is important to showcase these database competencies. The development of these features will provide a more complete view of my knowledge and experience in database management." ];
  const portfolioImageDescriptionsFR = [
    "Je vous présente mon portfolio réalisé avec React.js et Anime.js, un projet passionnant qui m'a permis de constater l'évolution de mes compétences pour créer des applications web complètes. Ayant développé ce projet recemment, j'ai pu mettre en pratique mes acquis en matière de dévelopement front-end mais aussi back-end.",
    "J'ai utilisé React useEffect et un état pour contrôler le cycle d'animation des images. À chaque délai, l'indice de l'image actuelle est mis à jour, créant un effet de boucle dynamique et visuellement attrayant.",
    "J'utilise React.js et React Router pour créer une application Web à page unique offrant une navigation fluide. React.js permet la création de composants réactifs, tandis que React Router gère la navigation entre les pages sans avoir à recharger toute la page, offrant ainsi une expérience utilisateur plus rapide et plus agréable.",
   "Le code CSS utilise des unités relatives et des fonctions de calcul pour ajuster automatiquement les dimensions des éléments en fonction de la taille de l'écran. Cela garantit une expérience utilisateur optimale sur différents appareils, montrant une approche responsive et une attention portée à la compatibilité multiplateforme.",
   "Le composant GammaRectangle est un élément clé du code, car il est réutilisable et modulaire. Ce composant gère ses propres animations et événements de souris, ce qui permet d'intégrer facilement des fonctionnalités similaires dans d'autres parties de l'application.",
   "Ce portfolio utilise anime.js pour des animations fluides et interactives, avec des effets de fondu et de déplacement. Les éléments sont animés par l'opacité, l'échelle, et la position Y. Les événements 'mouseenter' et 'mouseleave' gèrent l'interaction, avec des fonctions debounce pour optimiser l'expérience.",
  
"Dans ce portfolio, des fonctionnalités backend seront prochainement ajoutées pour mettre en avant les compétences acquises en MySQL et MongoDB. Suite à de nombreux apprentissages et mini-projets réalisés, il est important d'illustrer ces compétences en bases de données. Le développement de ces fonctionnalités permettra d'offrir une vue plus complète de mes connaissances et de mon expérience en matière de gestion de bases de données."  ];


  const projectvTitleDescriptionsFR = [
    'Projectv - Introduction',
    'Projectv - Intégration multilingue',
    'Projectv - Renderer IPC',
    "Projectv - Intégration d'Azure AI Voice",
    'Projectv - Object-Oriented Programming',
    'Projectv - Développement futur',
    'Projectv - UI des Paramètres',
  ];

  const projectvTitleDescriptionsEN = [
    'Projectv - Introduction',
    'Projectv - Multi-language Integration',
    'Projectv - IPC Renderer:',
    'Projectv - Azure AI Voice Integration',
    'Projectv - Future Development',
    'Projectv - Settings UI'
  ];
  
  const conceptProjectTitleDescriptionsEN = [
    'Concept - Introduction',
    'Concept - Design Process',
    'Concept - Gameplay',
    'Concept - The Creative Twist',
    'Concept - Object-Oriented Programming',
    'Concept - Skill Development',
  ];

  const conceptProjectTitleDescriptionsFR = [
    'Concept - Introduction',
    'Concept - Processus de conception',
    'Concept - Gameplay',
    'Concept - La touche créative',
    'Concept - Programmation orientée objet',
    'Concept - Développement des compétences',
    ];

    const portfolioTitleDescriptionsFR = [
      'Portfolio - Introduction',
      'Portfolio - Animation du bouton principal',
      'Portfolio - React Router et React.js',
      "Portfolio - Responsive Design",
      'Portfolio - Bouton principal',
      'Portfolio - Anime.js',
      'Portfolio - Développement futur',
    ];

    const portfolioTitleDescriptionsEN = [
      'Portfolio - Introduction',
      'Portfolio - Main Button Animation',
      'Portfolio - React Router and React.js',
      "Portfolio - Responsive Design",
      'Portfolio - Main Button',
      'Portfolio - Anime.js',
      'Portfolio - Future Development',
      ];
    function getCurrentImageDescriptions() {
      if (activeProject === 'buildlabs') {
        return language === 'EN' ? buildlabsImageDescriptionsEN : buildlabsImageDescriptionsFR;
      } else if (activeProject === 'concept') {
        return language === 'EN' ? conceptProjectImageDescriptionsEN : conceptProjectImageDescriptionsFR;
      } else if (activeProject === 'projectv') {
        return language === 'EN' ? projectvImageDescriptionsEN : projectvImageDescriptionsFR;
      }else if (activeProject === 'portfolio') {
        return language === 'EN' ? portfolioImageDescriptionsEN : portfolioImageDescriptionsFR;
      }
      // Add more conditions for more projects
    } 
    const currentImageDescriptions = getCurrentImageDescriptions();
    function getCurrentTitleDescriptions() {
      switch (activeProject) {
        case "buildlabs":
          return language === "EN" ? buildlabsTitleDescriptionsEN : buildlabsTitleDescriptionsFR;
        case "concept":
          return language === "EN" ? conceptProjectTitleDescriptionsEN : conceptProjectTitleDescriptionsFR;
        // Add cases for other projects here.
         case "projectv":
           return language === "EN" ? projectvTitleDescriptionsEN : projectvTitleDescriptionsFR;
          case "portfolio":
            return language === "EN" ? portfolioTitleDescriptionsEN : portfolioTitleDescriptionsFR;
        default:
          return []; // Return an empty array if no project matches
      }
    }
    
    const currentTitleDescriptions = getCurrentTitleDescriptions();
    

const projects = [
  {
    projectName: "BUILDLABS",
    year: "2019",
    technologies: "HTML, CSS, JS",
    images: [
      buildlabs,
      buildlabs3,
      buildlabscode1,
      buildlabsjs,
      buildlabscode3,
      buildlabscode5,
      buildlabscode6,
    ],
  },
  {
    projectName: "CONCEPT",
    year: "2020",
    technologies: "HTML, CSS, P5.js",
    images: [conceptxd1, conceptxd2, conceptxd3, conceptxd5, conceptcode1, conceptcode5],
  },

  {
    projectName: "PROJECTV",
    year: "2022",
    technologies: "Node.js, OpenAI, React.js",
    images: [projectv,projectv2, projectvcode6, projectvcode7, projectv6, projectv7],
  },
  {
    projectName: "PORTFOLIO",
    year: "2023",
    technologies: "Node.js, React.js, Anime.js",
    images: [portfolio, portfoliolong, portfoliocode1, portfolio2,portfoliocode2 , portfolioanim1,portfoliofullscreen],
  },

];
const sections = [
  { title: 'Curriculum Vitae', key: 'cv' },
  { title: 'Lettre', key: 'about' },
  { title: "Work", key: 'work' },
  { title: "Centre d'intérêt", key: 'contact' },
];

function toggleLanguage() {
  if (language === "EN") {
    setLanguage("FR");
    setDisplayMessage("Switched to French");
  } else {
    setLanguage("EN");
    setDisplayMessage("Switched to English");
  }
  setMessageActive(true);
  setTimeout(() => {
    setMessageActive(false);
  }, 1000);
}


const [projectIndex, setProjectIndex] = useState(0);
const [projectData, setProjectData] = useState(projects[projectIndex]);

function nextProject() {
  if (projectIndex < projects.length - 1) {
    setProjectIndex((prevIndex) => prevIndex + 1);
    setProjectData(projects[projectIndex + 1]);
    setActiveProject(projects[projectIndex + 1].projectName.toLowerCase());
    setActiveIndex(0);
  }
}

function previousProject() {
  if (projectIndex > 0) {
    setProjectIndex((prevIndex) => prevIndex - 1);
    setProjectData(projects[projectIndex - 1]);
    setActiveProject(projects[projectIndex - 1].projectName.toLowerCase());
    setActiveIndex(0);
  }
}


  

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
        duration: 1000,
        delay: (el, i) => 10 * i,
        complete: onAnimationEnd,
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
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page-content">
      <Helmet>
      <title>Travaux</title>
    </Helmet>
      <h1 className="title-slide-top-left typewriter"   key={projectData.projectName} ref={titleRef}>
        Current Work : <span className='bold'>{projectData.projectName}</span>
      </h1>
      <div className="project-info-wrapper ">
  <div className="info-container">
    <div className="info-item">
      <span className='info-title'>PROJECT NAME: </span>
      <span className='info-content'>{projectData.projectName}</span>
    </div>
    <div className="info-item">
      <span className='info-title'>YEAR: </span>
      <span className='info-content'>{projectData.year}</span>
    </div>
    <div className="info-item">
      <span className='info-title'>TECHNOLOGIES: </span>
      <span className='info-content'>{projectData.technologies}</span>
    </div>
  </div>
</div>
<div className="project-info-wrapper">
  {/* Add the Previous and Next project elements */}
  <div className="previous-project" onClick={previousProject}>
    &lt;&lt; Previous Project
  </div>
  <div className="next-project" onClick={nextProject}>
    Next Project &gt;&gt;
  </div>
  {/* Rest of the project-info-wrapper content */}
</div>

      <div className="image-gallery-wrapper">
      <ImageGallery images={projectData.images}   imageDescriptions={currentImageDescriptions}
        titleDescriptions={currentTitleDescriptions} activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}/>
      </div>
      <button className="language-switch-button" onClick={toggleLanguage}>
  {language}
</button>
<span className={`language-switch-message${messageActive ? " active" : ""}`}>
  {displayMessage}
</span>
<NavigationBar sections={sections} currentSection="work" />
    </div>
    
  );
}

export default Work;
