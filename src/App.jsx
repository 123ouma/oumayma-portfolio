import React from 'react';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, Code2, Github, Linkedin, Mail, Menu, X, Download, Sparkles, Globe2, Layers3, ExternalLink, MapPin, Send, Workflow } from 'lucide-react';

const copy = {
  en: {
    nav: ['About', 'Skills', 'Projects', 'Experience', 'Contact'],
    available: 'OPEN TO PFE OPPORTUNITIES',
    heroTop: "I BUILD THINGS",
    heroAccent: 'THAT THINK.',
    heroSub: 'Software engineering · Full-stack development · Artificial intelligence',
    intro: "I'm Oumayma — a future software engineer who loves turning complex ideas into useful, thoughtful digital experiences. I move between full-stack development and AI, with curiosity as my favorite tool.",
    explore: 'EXPLORE MY WORK', cv: 'DOWNLOAD CV',
    scroll: 'SCROLL TO DISCOVER',
    aboutEyebrow: 'A LITTLE ABOUT ME', aboutTitle: 'Curious mind.\nBuilder at heart.',
    aboutText: "I'm currently pursuing an engineering degree in Software Engineering and Business Intelligence at the International Institute of Technology in Sfax. I enjoy creating end-to-end products, connecting clean interfaces to reliable backends, and exploring how AI can make software more helpful.",
    aboutNote: 'Always learning. Always building.',
    skillsEyebrow: 'MY TOOLKIT', skillsTitle: 'Tools for turning\nideas into reality.',
    skillGroups: [
      ['FRONTEND', 'React.js', 'Angular', 'JavaScript', 'TypeScript', 'HTML / CSS', 'Tailwind CSS'],
      ['BACKEND', 'Laravel', 'ASP.NET Core', 'FastAPI', 'PHP', 'Python', 'C#'],
      ['AI & DATA', 'TensorFlow / Keras', 'OpenCV', 'YOLO', 'CNN / ViT', 'LLM / RAG'],
      ['DATABASE & TOOLS', 'MySQL', 'Oracle', 'SQL Server', 'Git / GitHub', 'Postman', 'Docker']
    ],
    projectsEyebrow: 'SELECTED WORK', projectsTitle: 'A few things\nI brought to life.',
    projectsLead: 'A mix of web engineering, intelligent systems and experiments. Pick a project to explore its story.',
    featured: 'FEATURED PROJECT', viewProject: 'PROJECT DETAILS',
    projects: [
      { id: 'examguard', n: '01', name: 'ExamGuard AI', type: 'AI · COMPUTER VISION', desc: 'An intelligent exam monitoring solution that analyzes video and classifies normal or suspicious behaviors.', stack: 'Python · TensorFlow · OpenCV · YOLO · ViT · FastAPI · React', accent: 'lime', mark: 'VISION / 01', icon: 'brain' },
      { id: 'smartcampus', n: '02', name: 'SmartCampus AI', type: 'AGENTIC AI · RAG', desc: 'A multilingual university guidance assistant in French, Tunisian dialect and Arabizi, with text and voice interaction.', stack: 'AI Agents · RAG · NLP · Audio', accent: 'purple', mark: 'GUIDANCE / 02', icon: 'spark' },
      { id: 'eventplanner', n: '03', name: 'Event Planner', type: 'FULL-STACK · WEB APP', desc: 'An event management platform with categories, search, filters, pagination, image management and a REST API.', stack: 'Angular · TypeScript · Laravel · PHP · MySQL', accent: 'orange', mark: 'ORGANIZE / 03', icon: 'layers' },
      { id: 'bihelia', n: '04', name: 'Bihelia', type: 'E-COMMERCE · FULL-STACK', desc: 'An online store for natural cosmetics, with customer and administrator spaces, product, category, promotion and order management.', stack: 'Laravel · PHP · MySQL · Blade · Tailwind CSS', accent: 'pink', mark: 'NATURAL / 04', icon: 'code' },
      { id: 'campaignly', n: '05', name: 'Campaignly', type: 'INTERNSHIP · AI-POWERED SAAS', desc: 'An AI-assisted platform for creating and managing email/SMS campaigns, customer segmentation and scheduling.', stack: 'React · ASP.NET Core · C# · SQL Server · FastAPI · Python · Groq', accent: 'blue', mark: 'CAMPAIGNS / 05', icon: 'workflow' },
      { id: 'restaurant', n: '06', name: 'Restaurant App', type: 'WEB DEVELOPMENT · .NET', desc: 'A restaurant-focused application developed with the .NET ecosystem. More project details will be added soon.', stack: '.NET · Details to be completed', accent: 'yellow', mark: 'HOSPITALITY / 06', icon: 'code' }
    ],
    experienceEyebrow: 'WHERE I LEARNED BY DOING', experienceTitle: 'Experience\nin motion.',
    experiences: [
      { date: '2026', role: 'Software Development Intern', company: 'Acteol · Sfax, Tunisia', desc: 'Contributed to Campaignly, an AI-assisted email and SMS campaign platform. Built React interfaces, backend services with ASP.NET Core and SQL Server, and integrated an AI assistant through FastAPI, Python and Groq.' },
      { date: '2025', role: 'Web Development Intern', company: 'Mega Pixel · Sfax, Tunisia', desc: 'Developed Bihelia, an e-commerce website for natural cosmetics with customer and administrator spaces, product catalog, promotions and order management.' }
    ],
    educationEyebrow: 'THE LEARNING NEVER STOPS', educationTitle: 'Learning by\nbuilding.', education: [
      ['2024 — 2027', 'Engineering Degree', 'International Institute of Technology (IIT), Sfax · Software Engineering & Business Intelligence'],
      ['2024', 'Preparatory Cycle', 'Faculty of Sciences of Sfax']
    ],
    certTitle: 'CERTIFICATIONS & COMMUNITY', certs: ['Git and GitHub · 365 Data Science · 2025', 'Data Cleaning and Preprocessing with pandas · 365 Data Science · 2025', 'CCNA: Introduction to Networks · Cisco Networking Academy · 2025', 'Board member, ARSII · Events & logistics · 2026–2027', 'Robotics Club · IIT · 2024–2026'],
    contactEyebrow: 'HAVE A GOOD IDEA?', contactTitle: "Let's make\nit happen.", contactText: "Looking for a PFE internship, a collaboration, or simply want to talk about technology? My inbox is open.", sayHello: 'SAY HELLO', footer: 'DESIGNED & BUILT WITH CURIOSITY', backTop: 'BACK TO TOP', location: 'Sfax, Tunisia', email: 'EMAIL ME',
    detail: 'This project is part of my learning and development journey. More technical details, screenshots and source links will be added as the project is prepared for publication.', close: 'CLOSE', github: 'GitHub', demo: 'Live demo', noLink: 'Link to add'
  },
  fr: {
    nav: ['À propos', 'Compétences', 'Projets', 'Expérience', 'Contact'],
    available: 'OUVERTE AUX OPPORTUNITÉS PFE', heroTop: 'JE CRÉE DES IDÉES', heroAccent: 'QUI PRENNENT VIE.',
    heroSub: 'Génie logiciel · Développement full-stack · Intelligence artificielle',
    intro: "Je suis Oumayma, future ingénieure en informatique, passionnée par la transformation d'idées complexes en expériences numériques utiles et intuitives. J'évolue entre le développement full-stack et l'intelligence artificielle, avec la curiosité comme moteur.",
    explore: 'DÉCOUVRIR MES PROJETS', cv: 'TÉLÉCHARGER MON CV', scroll: 'DÉFILER POUR EXPLORER',
    aboutEyebrow: 'QUELQUES MOTS SUR MOI', aboutTitle: 'Esprit curieux.\nÂme de créatrice.',
    aboutText: "Je prépare actuellement un diplôme d'ingénieur en génie logiciel et informatique décisionnelle à l'Institut International de Technologie de Sfax. J'aime concevoir des applications de bout en bout, relier des interfaces soignées à des backends fiables et explorer les possibilités de l'intelligence artificielle.",
    aboutNote: 'Apprendre. Construire. Recommencer.', skillsEyebrow: 'MA BOÎTE À OUTILS', skillsTitle: 'Les outils pour\nconcrétiser les idées.',
    skillGroups: [
      ['FRONTEND', 'React.js', 'Angular', 'JavaScript', 'TypeScript', 'HTML / CSS', 'Tailwind CSS'],
      ['BACKEND', 'Laravel', 'ASP.NET Core', 'FastAPI', 'PHP', 'Python', 'C#'],
      ['IA & DATA', 'TensorFlow / Keras', 'OpenCV', 'YOLO', 'CNN / ViT', 'LLM / RAG'],
      ['BASES DE DONNÉES & OUTILS', 'MySQL', 'Oracle', 'SQL Server', 'Git / GitHub', 'Postman', 'Docker']
    ],
    projectsEyebrow: 'PROJETS SÉLECTIONNÉS', projectsTitle: 'Quelques projets\nque j’ai concrétisés.',
    projectsLead: "Un mélange de développement web, de systèmes intelligents et d'expérimentations. Explorez l'histoire de chaque projet.", featured: 'PROJET À LA UNE', viewProject: 'DÉTAILS DU PROJET',
    projects: [
      { id: 'examguard', n: '01', name: 'ExamGuard AI', type: 'IA · VISION PAR ORDINATEUR', desc: 'Une solution intelligente de surveillance des examens qui analyse les vidéos et classe les comportements comme normaux ou suspects.', stack: 'Python · TensorFlow · OpenCV · YOLO · ViT · FastAPI · React', accent: 'lime', mark: 'VISION / 01', icon: 'brain' },
      { id: 'smartcampus', n: '02', name: 'SmartCampus AI', type: 'IA AGENTIQUE · RAG', desc: 'Un assistant multilingue d’orientation universitaire en français, dialecte tunisien et Arabizi, accessible par texte et audio.', stack: 'Agents IA · RAG · NLP · Audio', accent: 'purple', mark: 'ORIENTATION / 02', icon: 'spark' },
      { id: 'eventplanner', n: '03', name: 'Event Planner', type: 'FULL-STACK · APPLICATION WEB', desc: 'Une plateforme de gestion d’événements avec catégories, recherche, filtres, pagination, gestion des images et API REST.', stack: 'Angular · TypeScript · Laravel · PHP · MySQL', accent: 'orange', mark: 'ORGANISATION / 03', icon: 'layers' },
      { id: 'bihelia', n: '04', name: 'Bihelia', type: 'E-COMMERCE · FULL-STACK', desc: 'Une boutique en ligne de cosmétiques naturels avec espaces client et administrateur, gestion des produits, catégories, promotions et commandes.', stack: 'Laravel · PHP · MySQL · Blade · Tailwind CSS', accent: 'pink', mark: 'NATUREL / 04', icon: 'code' },
      { id: 'campaignly', n: '05', name: 'Campaignly', type: 'STAGE · SAAS AVEC IA', desc: 'Une plateforme assistée par IA pour créer et gérer des campagnes Email/SMS, segmenter les clients et planifier les envois.', stack: 'React · ASP.NET Core · C# · SQL Server · FastAPI · Python · Groq', accent: 'blue', mark: 'CAMPAGNES / 05', icon: 'workflow' },
      { id: 'restaurant', n: '06', name: 'Restaurant App', type: 'DÉVELOPPEMENT WEB · .NET', desc: 'Une application dédiée à la gestion de restaurant, développée avec l’écosystème .NET. Les détails techniques seront complétés prochainement.', stack: '.NET · Détails à compléter', accent: 'yellow', mark: 'RESTAURATION / 06', icon: 'code' }
    ],
    experienceEyebrow: 'APPRENDRE EN FAISANT', experienceTitle: 'Mon parcours\nen mouvement.',
    experiences: [
      { date: '2026', role: 'Stagiaire en développement logiciel', company: 'Acteol · Sfax, Tunisie', desc: 'Participation au développement de Campaignly, une plateforme de campagnes Email/SMS assistée par IA. Réalisation des interfaces React, des services backend avec ASP.NET Core et SQL Server, et intégration d’un assistant IA via FastAPI, Python et Groq.' },
      { date: '2025', role: 'Stagiaire en développement web', company: 'Mega Pixel · Sfax, Tunisie', desc: 'Développement de Bihelia, un site e-commerce de cosmétiques naturels avec espaces client et administrateur, catalogue de produits, promotions et gestion des commandes.' }
    ],
    educationEyebrow: 'APPRENDRE SANS CESSE', educationTitle: 'Apprendre en\nconstruisant.', education: [
      ['2024 — 2027', "Cycle ingénieur", 'Institut International de Technologie (IIT), Sfax · Génie logiciel et informatique décisionnelle'],
      ['2024', 'Cycle préparatoire', 'Faculté des Sciences de Sfax']
    ],
    certTitle: 'CERTIFICATIONS & ENGAGEMENT', certs: ['Git and GitHub · 365 Data Science · 2025', 'Data Cleaning and Preprocessing with pandas · 365 Data Science · 2025', 'CCNA : Présentation des réseaux · Cisco Networking Academy · 2025', 'Membre du bureau ARSII · Logistique & événements · 2026–2027', 'Club robotique · IIT · 2024–2026'],
    contactEyebrow: 'UNE BONNE IDÉE EN TÊTE ?', contactTitle: 'Donnons-lui\nvie ensemble.', contactText: "Vous recherchez une stagiaire PFE, souhaitez collaborer ou simplement échanger autour de la technologie ? Ma boîte mail est ouverte.", sayHello: 'ENVOYER UN MESSAGE', footer: 'IMAGINÉ & DÉVELOPPÉ AVEC CURIOSITÉ', backTop: 'RETOUR EN HAUT', location: 'Sfax, Tunisie', email: 'M’ÉCRIRE',
    detail: 'Ce projet fait partie de mon parcours d’apprentissage et de développement. Des détails techniques, captures d’écran et liens vers le code seront ajoutés lors de sa publication.', close: 'FERMER', github: 'GitHub', demo: 'Démo en ligne', noLink: 'Lien à ajouter'
  }
};

const IconFor = ({ name, size = 22 }) => {
  const props = { size, strokeWidth: 1.6 };
  if (name === 'brain') return <BrainCircuit {...props}/>;
  if (name === 'spark') return <Sparkles {...props}/>;
  if (name === 'layers') return <Layers3 {...props}/>;
  if (name === 'workflow') return <Workflow {...props}/>;
  return <Code2 {...props}/>;
};

const techAssets = {
  'React.js':'react/react-original.svg','React':'react/react-original.svg','Angular':'angularjs/angularjs-original.svg',
  'JavaScript':'javascript/javascript-original.svg','TypeScript':'typescript/typescript-original.svg','HTML / CSS':'html5/html5-original.svg',
  'Tailwind CSS':'tailwindcss/tailwindcss-original.svg','Laravel':'laravel/laravel-original.svg','ASP.NET Core':'dot-net/dot-net-original.svg',
  'FastAPI':'fastapi/fastapi-original.svg','PHP':'php/php-original.svg','Python':'python/python-original.svg','C#':'csharp/csharp-original.svg',
  'TensorFlow / Keras':'tensorflow/tensorflow-original.svg','OpenCV':'opencv/opencv-original.svg','MySQL':'mysql/mysql-original.svg',
  'Oracle':'oracle/oracle-original.svg','SQL Server':'microsoftsqlserver/microsoftsqlserver-plain.svg','Git / GitHub':'git/git-original.svg',
  'Postman':'postman/postman-original.svg','Docker':'docker/docker-original.svg'
};
const techColors = {
  'React.js':'#61dafb','React':'#61dafb','Angular':'#dd0031','JavaScript':'#e8c547','TypeScript':'#3178c6','HTML / CSS':'#e8753d',
  'Tailwind CSS':'#38bdf8','Laravel':'#ef4444','ASP.NET Core':'#7654b8','FastAPI':'#159b83','PHP':'#777bb4','Python':'#3776ab',
  'C#':'#8b5cf6','TensorFlow / Keras':'#ed8b22','OpenCV':'#5c9bca','YOLO':'#8b5cf6','CNN / ViT':'#d16a9b','LLM / RAG':'#7b68c8',
  'MySQL':'#39759b','Oracle':'#e34b4b','SQL Server':'#cc4444','Git / GitHub':'#e8753d','Postman':'#f26b3a','Docker':'#2496ed'
};
function TechBadge({ name }) {
  const asset = techAssets[name];
  const color = techColors[name] || '#9874b8';
  const initials = name.replace(/[^A-Za-z0-9]/g,'').slice(0,2).toUpperCase();
  return <span className="tech-badge" style={{'--tech-color':color}} title={name}>
    {asset ? <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${asset}`} alt="" loading="lazy" onError={e=>{e.currentTarget.style.display='none'; e.currentTarget.nextSibling.style.display='grid';}}/> : null}
    <i style={{display:asset?'none':'grid'}}>{initials}</i><b>{name}</b>
  </span>;
}

function App() {
  const [lang, setLang] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [light, setLight] = useState(false);
  const reduceMotion = useReducedMotion();
  const t = copy[lang];
  const navIds = ['about', 'skills', 'projects', 'experience', 'contact'];
  const fade = { hidden: { opacity: 0, y: reduceMotion ? 0 : 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }); setMenuOpen(false); };
  const email = 'oumaymabouaziz@iit.ens.tn';
  const selectedProject = selected ? t.projects.find(p => p.id === selected) : null;

  return <div className={light ? 'site dark' : 'site'}>
    <div className="noise" aria-hidden="true" />
    <header className="topbar">
      <a className="brand" href="#home" onClick={e => {e.preventDefault(); scrollTo('home')}}>OB<span>®</span></a>
      <nav className="desktop-nav">{t.nav.map((item, i) => <button key={item} onClick={() => scrollTo(navIds[i])}>{item}</button>)}</nav>
      <div className="nav-actions">
        <button className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} aria-label="Switch language"><Globe2 size={15}/><span>{lang.toUpperCase()}</span><span className="lang-divider">/</span><span className={lang === 'en' ? 'muted' : ''}> {lang === 'en' ? 'FR' : 'EN'}</span></button>
        <button className="theme-toggle" onClick={() => setLight(!light)} aria-label="Toggle theme"><span>{light ? '◐' : '◑'}</span></button>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>
    {menuOpen && <div className="mobile-panel">{t.nav.map((item, i) => <button key={item} onClick={() => scrollTo(navIds[i])}>{item}<ArrowUpRight size={17}/></button>)}</div>}

    <main>
      <section className="hero" id="home">
        <div className="hero-grid" />
        <motion.div className="hero-orbit orbit-one" animate={reduceMotion ? {} : { rotate: 360 }} transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}><span/><i/></motion.div>
        <motion.div className="hero-orbit orbit-two" animate={reduceMotion ? {} : { rotate: -360 }} transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}><span/><i/></motion.div>
        <div className="hero-content">
          <motion.div className="availability" initial="hidden" animate="show" variants={fade}><span className="pulse-dot"/>{t.available}</motion.div>
          <motion.p className="hero-kicker" initial="hidden" animate="show" variants={fade}>{t.heroTop}</motion.p>
          <motion.h1 initial="hidden" animate="show" variants={{ hidden: { opacity: 0, y: 35 }, show: { opacity: 1, y: 0, transition: { duration: .9, delay: .12 } } }}>{t.heroAccent.split(' ').slice(0, -1).join(' ')} <span>{t.heroAccent.split(' ').slice(-1)}</span></motion.h1>
          <motion.div className="hero-bottom" initial="hidden" animate="show" variants={fade}>
            <p className="hero-subtitle">{t.heroSub}</p>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-ctas"><button className="button button-primary" onClick={() => scrollTo('projects')}>{t.explore}<ArrowUpRight size={17}/></button><a className="button button-ghost" href="/CV_Oumayma_Bouaziz.pdf" download><Download size={16}/>{t.cv}</a></div>
          </motion.div>
        </div>
        <motion.aside className="hero-console" initial={{opacity:0, x:35}} animate={{opacity:1, x:0}} transition={{duration:.8, delay:.35}} aria-label="Code editor illustration">
          <div className="console-top"><div className="console-dots"><i/><i/><i/></div><span>oum ayma.dev — profile.tsx</span><span className="console-live">● LIVE</span></div>
          <div className="console-body">
            <div className="code-line"><b>01</b><span className="code-purple">const</span> <span className="code-cyan">developer</span> = {'{'}</div>
            <div className="code-line indent"><b>02</b><span className="code-pink">name</span>: <span className="code-green">'Oumayma Bouaziz'</span>,</div>
            <div className="code-line indent"><b>03</b><span className="code-pink">focus</span>: [</div>
            <div className="code-line indent2"><b>04</b><span className="code-green">'Full-Stack'</span>,</div>
            <div className="code-line indent2"><b>05</b><span className="code-green">'Artificial Intelligence'</span></div>
            <div className="code-line indent"><b>06</b>],</div>
            <div className="code-line indent"><b>07</b><span className="code-pink">mindset</span>: <span className="code-green">'Always building'</span></div>
            <div className="code-line"><b>08</b>{'}'};</div>
            <div className="console-output"><span>➜</span> npm run build <em>✓ compiled successfully</em></div>
          </div>
          <div className="console-status"><span><i/> SYSTEM ONLINE</span><span>UTF-8&nbsp; · &nbsp;TSX</span></div>
        </motion.aside>
        <div className="hero-index"><span>01</span><span className="index-line"/><span>06</span></div>
        <button className="scroll-cue" onClick={() => scrollTo('about')}><span>{t.scroll}</span><ArrowDown size={16}/></button>
        <div className="hero-side-label">OUMAYMA BOUAZIZ · PORTFOLIO 2026</div>
      </section>

      <section className="section about-section" id="about">
        <motion.div className="section-label" variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}><span>01 /</span>{t.aboutEyebrow}</motion.div>
        <div className="about-layout">
          <motion.h2 className="section-title" variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>{t.aboutTitle.split('\n').map((line,i)=><React.Fragment key={line}>{i===1 && <br/>}{line}</React.Fragment>)}</motion.h2>
          <motion.div className="about-copy" variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}><p>{t.aboutText}</p><div className="about-stamp"><span className="stamp-star">✳</span><span>{t.aboutNote}</span></div><div className="about-meta"><div><span className="meta-label">BASED IN</span><span><MapPin size={13}/> {t.location}</span></div><div><span className="meta-label">FOCUS</span><span>Software · AI · Web</span></div></div></motion.div>
        </div>
        <div className="marquee" aria-hidden="true"><div className="marquee-track">{Array.from({length:4}).map((_,i)=><span key={i}>THINK <b>✳</b> BUILD <b>✳</b> EXPLORE <b>✳</b> REPEAT <b>✳</b>&nbsp;</span>)}</div></div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-label"><span>02 /</span>{t.skillsEyebrow}</div>
        <div className="section-heading-row"><h2 className="section-title">{t.skillsTitle.split('\n').map((line,i)=><React.Fragment key={line}>{i===1 && <br/>}{line}</React.Fragment>)}</h2><p className="heading-aside">Curiosity is the<br/>ultimate framework. <Sparkles size={18}/></p></div>
        <div className="skills-grid">{t.skillGroups.map((group,i)=><motion.div className="skill-card" key={group[0]} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} transition={{ delay: i*.08 }}><div className="skill-card-top"><span>0{i+1}</span><ArrowUpRight size={17}/></div><h3>{group[0]}</h3><div className="skill-tags">{group.slice(1).map(skill=><TechBadge key={skill} name={skill}/>)}</div></motion.div>)}</div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-label"><span>03 /</span>{t.projectsEyebrow}</div>
        <div className="projects-heading"><h2 className="section-title">{t.projectsTitle.split('\n').map((line,i)=><React.Fragment key={line}>{i===1 && <br/>}{line}</React.Fragment>)}</h2><p>{t.projectsLead}</p></div>
        <div className="project-list">{t.projects.map((project,i)=><motion.button key={project.id} className={`project-row accent-${project.accent}`} onClick={() => setSelected(project.id)} initial="hidden" whileInView="show" viewport={{ once: true, amount: .18 }} variants={fade} transition={{ delay: i*.045 }}>
          <span className="project-number">{project.n}</span><div className="project-art"><div className="art-grid"/><div className="art-orb"/><div className="art-ring"/><div className="art-symbol"><IconFor name={project.icon} size={34}/></div><span className="art-mark">{project.mark}</span><span className="art-open"><ArrowUpRight size={22}/></span></div>
          <div className="project-info"><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.desc}</p><div className="project-stack">{project.stack.split(' · ').slice(0,5).map(skill=><TechBadge key={skill} name={skill}/>)}</div></div><div className="project-arrow"><ArrowUpRight size={23}/></div>
        </motion.button>)}</div>
        <div className="project-footnote"><span>✳</span><p>{lang === 'en' ? 'More experiments are always in progress.' : 'D’autres expérimentations sont toujours en cours.'}</p></div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-label"><span>04 /</span>{t.experienceEyebrow}</div>
        <div className="experience-layout"><h2 className="section-title">{t.experienceTitle.split('\n').map((line,i)=><React.Fragment key={line}>{i===1 && <br/>}{line}</React.Fragment>)}</h2><div className="timeline">{t.experiences.map((exp,i)=><motion.div className="timeline-item" key={exp.date} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}><div className="timeline-date">{exp.date}<span/></div><div className="timeline-content"><span className="timeline-company">{exp.company}</span><h3>{exp.role}</h3><p>{exp.desc}</p></div></motion.div>)}</div></div>
      </section>

      <section className="section education-section">
        <div className="section-label"><span>05 /</span>{t.educationEyebrow}</div>
        <div className="education-layout"><h2 className="section-title">{t.educationTitle.split('\n').map((line,i)=><React.Fragment key={line}>{i===1 && <br/>}{line}</React.Fragment>)}</h2><div className="education-content"><div className="education-list">{t.education.map((ed)=><div className="education-item" key={ed[0]}><span>{ed[0]}</span><div><h3>{ed[1]}</h3><p>{ed[2]}</p></div></div>)}</div><div className="certifications"><h3>{t.certTitle}</h3>{t.certs.map((cert,i)=><div className="cert-row" key={cert}><span>0{i+1}</span><p>{cert}</p><ArrowUpRight size={14}/></div>)}</div></div></div>
      </section>

      <section className="contact-section" id="contact"><div className="contact-glow"/><div className="section-label"><span>06 /</span>{t.contactEyebrow}</div><div className="contact-main"><h2>{t.contactTitle.split('\n').map((line,i)=><React.Fragment key={line}>{i===1 && <br/>}{line}</React.Fragment>)}</h2><div className="contact-aside"><p>{t.contactText}</p><a className="contact-button" href={`mailto:${email}`}><span>{t.sayHello}</span><ArrowUpRight size={24}/></a></div></div><div className="contact-bottom"><a href={`mailto:${email}`}><Mail size={15}/>{email}</a><div className="socials"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a></div><span>{t.location}</span></div></section>
    </main>

    <footer className="footer"><a className="brand" href="#home" onClick={e=>{e.preventDefault();scrollTo('home')}}>OB<span>®</span></a><span>{t.footer} · © 2026</span><button onClick={() => scrollTo('home')}>{t.backTop}<ArrowUpRight size={14}/></button></footer>

    {selectedProject && <div className="modal-backdrop" onClick={() => setSelected(null)}><motion.div className={`project-modal accent-${selectedProject.accent}`} initial={{opacity:0, y:25, scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0}} onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelected(null)} aria-label={t.close}><X/></button><div className="modal-art"><div className="art-grid"/><div className="art-orb"/><div className="art-ring"/><IconFor name={selectedProject.icon} size={54}/><span>{selectedProject.mark}</span></div><span className="project-type">{selectedProject.type}</span><h2>{selectedProject.name}</h2><p>{selectedProject.desc}</p><div className="modal-stack-label">{lang==='en'?'TECH STACK':'TECHNOLOGIES'}</div><div className="modal-stack">{selectedProject.stack.split(' · ').map(s=><TechBadge key={s} name={s}/>) }</div><div className="modal-note">{t.detail}</div><div className="modal-links"><span><Github size={16}/>{t.github} — {t.noLink}</span><span><ExternalLink size={16}/>{t.demo} — {t.noLink}</span></div></motion.div></div>}
  </div>;
}

export default App;
