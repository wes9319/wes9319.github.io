import type { Translations } from './types';

export const es: Translations = {
  lang: 'es',
  meta: {
    title: 'Elvis Wesley Vásquez — Desarrollador Full Stack Senior',
    description:
      'Desarrollador Web Full Stack Senior y Tech Lead en Quito, Ecuador. React, TypeScript, Next.js y plataformas web escalables.',
  },
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    work: 'Impacto',
    skills: 'Habilidades',
    education: 'Formación',
    contact: 'Contacto',
    skip: 'Saltar al contenido principal',
  },
  hero: {
    name: 'Elvis Wesley Vásquez',
    title: 'Desarrollador Web Full Stack Senior | Tech Lead',
    location: 'Quito, Ecuador (GMT-5) · Remoto · Abierto a reubicación',
    pitch:
      'Más de ocho años construyendo aplicaciones web escalables y performantes con React, TypeScript y tecnologías full stack. Actualmente Tech Lead para Disney Entertainment vía Globant, liderando equipos multifuncionales en plataformas de streaming y observabilidad.',
    ctaWork: 'Ver impacto',
    ctaCv: 'Descargar CV',
    ctaContact: 'Contacto',
  },
  about: {
    heading: 'Sobre mí',
    body: [
      'Soy ingeniero full stack senior enfocado en entregar productos confiables, mejorar flujos de desarrollo y mentorizar a otros ingenieros. Combino desarrollo hands-on con liderazgo técnico: estimación de backlog, revisiones de arquitectura y colaboración entre equipos.',
      'Fluido en inglés y nativo en español; he trabajado con equipos distribuidos en las Américas y Europa bajo Agile/Scrum, CI/CD y colaboración internacional.',
    ],
  },
  experience: {
    heading: 'Experiencia',
    roles: [
      {
        company: 'Globant',
        location: 'Remoto',
        title: 'Desarrollador Web UI Senior / Tech Lead',
        period: 'Abril 2022 – Presente',
        client: 'Disney Entertainment (Abril 2024 – Presente)',
        bullets: [
          'Lidero un equipo de siete ingenieros en herramientas de insights y observabilidad para plataformas de streaming de Disney.',
          'Desarrollo funcionalidades de vanguardia para una plataforma de flujos de trabajo agénticos.',
          'Colaboré con equipos multifuncionales en seguimiento visual de incidentes, reduciendo su duración en un 10%.',
        ],
        stack:
          'React, Next.js, Go, TypeScript, Sass, Tailwind CSS, Vitest, Cypress, REST, Apollo GraphQL, MySQL, Docker, Ruby, Datadog, Vite, Git',
      },
      {
        company: 'Sensia Global / Rockwell Automation',
        period: 'Abril 2022 – Marzo 2024',
        title: 'Desarrollador Web UI Senior',
        bullets: [
          'Entregué funcionalidades end-to-end para una plataforma offshore IoT con React y un framework personalizado.',
          'Mejoré el rendimiento de funcionalidades legacy entre 10% y 25% con optimizaciones en React y librerías.',
          'Lideré estimaciones de backlog y mentoría en depuración y arquitectura.',
        ],
        stack:
          'React, TypeScript, Redux, RxJS, Webpack, Vite, Sass, Node.js, Jenkins, Bitbucket',
      },
      {
        company: 'Nominaz',
        location: 'Remoto',
        title: 'Desarrollador Web Full Stack',
        period: 'Febrero 2021 – Septiembre 2022',
        bullets: [
          'Mejoré el rendimiento de APIs y bases de datos en un 35% refactorizando consultas y esquemas (SQL y NoSQL).',
          'Optimicé pipelines CI/CD y despliegues en AWS para mayor escalabilidad y disponibilidad.',
          'Apliqué principios SOLID y mejoras en AWS para soportar mayor concurrencia de usuarios.',
        ],
        stack:
          'AngularJS, JavaScript, Python, PHP, CodeIgniter, MySQL, DynamoDB, AWS',
      },
      {
        company: 'Yanbal',
        location: 'Quito, Ecuador',
        title: 'Analista de Operaciones y Sistemas de Soporte',
        period: 'Agosto 2020 – Febrero 2021',
        bullets: [
          'Apoyé al área comercial con una app para clientes internos y externos (~10k usuarios mensuales).',
          'Implementé Git en proyectos de TI, aumentando la productividad del equipo en un 15%.',
          'Creé un chatbot con IA usando IBM Watson y Microsoft Power Virtual Agents.',
        ],
        stack: 'ASP.NET, C#, JavaScript, Bootstrap, SQL, Node.js, AWS, GitLab',
      },
      {
        company: 'Yanbal',
        location: 'Quito, Ecuador',
        title: 'Analista de Proyectos',
        period: 'Septiembre 2020 – Agosto 2020',
        bullets: [
          'Automaticé procesos interdepartamentales con SSIS y SSRS, reduciendo tiempos hasta un 35%.',
          'Trabajé con sistemas legacy: DB2, ASP clásico y .NET.',
        ],
        stack: 'SQL Server, SSIS, SSRS, REST/SOAP, C#, DB2, ASP.NET',
      },
      {
        company: 'Magnaflor',
        location: 'Quito, Ecuador',
        title: 'Desarrollador Web Full Stack',
        period: 'Octubre 2018 – Agosto 2019',
        bullets: [
          'Mejoré el rendimiento web en un 45% con buenas prácticas y SEO.',
          'Migré el hosting a AWS con CDN, balanceador y EC2—25% más rápido en tiempos de respuesta.',
          'Desarrollé funcionalidades a medida con LAMP y WordPress.',
        ],
        stack: 'PHP, MySQL, WordPress, JavaScript, AWS, Git',
      },
    ],
    otherHeading: 'Roles anteriores',
    otherRoles: [
      { title: 'AUDYCON — Desarrollador Web', period: 'Enero 2018 – Octubre 2018' },
      { title: 'Freelance — Desarrollador Web', period: 'Febrero 2017 – Enero 2018' },
      {
        title: 'SPAE — Desarrollador Web / Docente',
        period: 'Junio 2014 – Febrero 2017',
      },
    ],
    otherStack:
      'HTML5, CSS3, JavaScript, WordPress, PHP, AngularJS, Joomla, PrestaShop, Git, C#, CentOS',
  },
  highlights: {
    heading: 'Impacto destacado',
    subheading: 'Resultados seleccionados de liderazgo y entrega reciente.',
    items: [
      {
        title: 'Observabilidad en streaming Disney',
        description:
          'Liderazgo de siete ingenieros en herramientas de insights y observabilidad para grandes plataformas de streaming—React, Next.js, Go y TypeScript a escala.',
      },
      {
        title: 'Resolución más rápida de incidentes',
        description:
          'Visualización de incidentes entre equipos que contribuyó a reducir su duración en un 10%.',
      },
      {
        title: 'Plataforma agéntica',
        description:
          'Entrega de capacidades avanzadas en un producto moderno de flujos de trabajo agénticos junto a producto y plataforma.',
      },
      {
        title: 'Plataforma offshore IoT',
        description:
          'Funcionalidades React end-to-end y mejoras de rendimiento del 10–25% en la plataforma IoT offshore de Rockwell Automation.',
      },
      {
        title: 'Rendimiento backend (Nominaz)',
        description:
          'Refactor de APIs y capas de datos con una mejora del 35% en cargas SQL y NoSQL.',
      },
      {
        title: 'Web y nube en Magnaflor',
        description:
          'Mejora del 45% en front-end y migración a AWS con CDN y balanceo de carga.',
      },
    ],
  },
  skills: {
    heading: 'Habilidades',
    groups: [
      {
        name: 'Lenguajes',
        items: 'JavaScript (ES6+), TypeScript, HTML5, CSS3, Node.js, Go, PHP, Python, SQL',
      },
      {
        name: 'Front-end',
        items:
          'React, Next.js, Redux, Tailwind CSS, AngularJS, Sass, CSS Modules, Vitest, Cypress, React Testing Library',
      },
      {
        name: 'Back-end',
        items: 'Node.js, Express, PHP (CodeIgniter), Python, APIs REST y GraphQL',
      },
      {
        name: 'Bases de datos',
        items: 'MySQL, SQL Server, MongoDB, DynamoDB',
      },
      {
        name: 'Herramientas y plataformas',
        items:
          'Git (GitHub, Bitbucket), Docker, Jenkins, AWS (EC2, Lambda, RDS), Vite, Postman, Jira, Confluence',
      },
      {
        name: 'Liderazgo',
        items:
          'Liderazgo de equipos, Agile/Scrum, diseño de sistemas, CI/CD, mentoría, colaboración internacional',
      },
    ],
    languagesHeading: 'Idiomas',
    languages: 'Inglés (fluido) · Español (nativo)',
  },
  education: {
    heading: 'Formación',
    degree: 'Ingeniería, Electrónica e Ingeniería en Redes',
    school: 'Universidad de las Américas — Quito, Ecuador',
    period: '2015 – 2020',
  },
  contact: {
    heading: 'Contacto',
    subheading: 'Abierto a oportunidades senior de ingeniería y tech lead.',
    email: 'Correo',
    phone: 'Teléfono',
    downloadCv: 'Descargar CV (PDF)',
  },
  footer: {
    builtWith: 'Hecho con Astro',
    rights: 'Todos los derechos reservados.',
  },
  langSwitcher: {
    label: 'Idioma',
    switchTo: 'English',
  },
};
