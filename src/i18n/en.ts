import type { Translations } from './types';

export const en: Translations = {
  lang: 'en',
  meta: {
    title: 'Elvis Wesley Vásquez — Senior Full Stack Developer',
    description:
      'Senior Full Stack Web Developer and Tech Lead based in Quito, Ecuador. React, TypeScript, Next.js, and scalable web platforms.',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    work: 'Impact',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
    skip: 'Skip to main content',
  },
  hero: {
    name: 'Elvis Wesley Vásquez',
    title: 'Senior Full Stack Web Developer | Tech Lead',
    location: 'Quito, Ecuador (GMT-5) · Remote · Open to relocation',
    pitch:
      'Eight-plus years building scalable, performant web applications with React, TypeScript, and full-stack tooling. Currently Tech Lead for Disney Entertainment via Globant—leading cross-functional teams on complex streaming and observability platforms.',
    ctaWork: 'View impact',
    ctaCv: 'Download CV',
    ctaContact: 'Contact',
  },
  about: {
    heading: 'About',
    body: [
      'I am a senior full-stack engineer focused on shipping reliable products, improving developer workflows, and mentoring engineers. I combine hands-on feature work with technical leadership—backlog estimation, architecture reviews, and cross-team collaboration.',
      'Fluent in English and native in Spanish, I have worked with distributed teams across the Americas and Europe on Agile/Scrum delivery, CI/CD, and international collaboration.',
    ],
  },
  experience: {
    heading: 'Experience',
    roles: [
      {
        company: 'Globant',
        location: 'Remote',
        title: 'Senior Web UI Developer / Tech Lead',
        period: 'April 2022 – Present',
        client: 'Disney Entertainment (April 2024 – Present)',
        bullets: [
          'Lead a team of seven engineers building insights and observability tools for Disney streaming platforms.',
          'Ship cutting-edge capabilities for an agentic workflow platform.',
          'Partner with cross-functional teams on visual incident tracking that reduced incident duration by 10%.',
        ],
        stack:
          'React, Next.js, Go, TypeScript, Sass, Tailwind CSS, Vitest, Cypress, REST, Apollo GraphQL, MySQL, Docker, Ruby, Datadog, Vite, Git',
      },
      {
        company: 'Sensia Global / Rockwell Automation',
        period: 'April 2022 – March 2024',
        title: 'Senior Web UI Developer',
        bullets: [
          'Delivered end-to-end features for an IoT-based offshore platform using React and a custom framework.',
          'Improved legacy feature performance by 10–25% through React and library optimizations.',
          'Led backlog estimation and mentored developers on debugging and architecture.',
        ],
        stack:
          'React, TypeScript, Redux, RxJS, Webpack, Vite, Sass, Node.js, Jenkins, Bitbucket',
      },
      {
        company: 'Nominaz',
        location: 'Remote',
        title: 'Full Stack Web Developer',
        period: 'February 2021 – September 2022',
        bullets: [
          'Improved API and database performance by 35% by refactoring queries and schemas (SQL & NoSQL).',
          'Streamlined CI/CD and AWS deployments for scalability and availability.',
          'Applied SOLID principles and AWS upgrades to support higher user concurrency.',
        ],
        stack:
          'AngularJS, JavaScript, Python, PHP, CodeIgniter, MySQL, DynamoDB, AWS',
      },
      {
        company: 'Yanbal',
        location: 'Quito, Ecuador',
        title: 'Operations and Support Systems Analyst',
        period: 'August 2020 – February 2021',
        bullets: [
          'Helped the sales organization deliver an app for internal and external clients (~10k monthly users).',
          'Introduced Git in IT projects, raising team productivity by 15%.',
          'Built an AI chatbot with IBM Watson and Microsoft Power Virtual Agents.',
        ],
        stack: 'ASP.NET, C#, JavaScript, Bootstrap, SQL, Node.js, AWS, GitLab',
      },
      {
        company: 'Yanbal',
        location: 'Quito, Ecuador',
        title: 'Project Analyst',
        period: 'September 2020 – August 2020',
        bullets: [
          'Automated cross-department processes with SSIS and SSRS, cutting time by up to 35%.',
          'Worked with legacy stacks including DB2, classic ASP, and .NET.',
        ],
        stack: 'SQL Server, SSIS, SSRS, REST/SOAP, C#, DB2, ASP.NET',
      },
      {
        company: 'Magnaflor',
        location: 'Quito, Ecuador',
        title: 'Full Stack Web Developer',
        period: 'October 2018 – August 2019',
        bullets: [
          'Improved web performance by 45% through coding practices and SEO optimization.',
          'Migrated hosting to AWS with CDN, load balancer, and EC2—25% faster response times.',
          'Built custom features on LAMP and WordPress.',
        ],
        stack: 'PHP, MySQL, WordPress, JavaScript, AWS, Git',
      },
    ],
    otherHeading: 'Earlier roles',
    otherRoles: [
      { title: 'AUDYCON — Web Developer', period: 'January 2018 – October 2018' },
      { title: 'Freelance — Web Developer', period: 'February 2017 – January 2018' },
      {
        title: 'SPAE — Web Developer / Teacher',
        period: 'June 2014 – February 2017',
      },
    ],
    otherStack:
      'HTML5, CSS3, JavaScript, WordPress, PHP, AngularJS, Joomla, PrestaShop, Git, C#, CentOS',
  },
  highlights: {
    heading: 'Featured impact',
    subheading: 'Selected outcomes from recent leadership and delivery work.',
    items: [
      {
        title: 'Disney streaming observability',
        description:
          'Led seven engineers on insights and observability tooling for major streaming platforms—React, Next.js, Go, and TypeScript at scale.',
      },
      {
        title: 'Faster incident resolution',
        description:
          'Cross-functional incident visualization that contributed to a 10% reduction in incident duration.',
      },
      {
        title: 'Agentic workflow platform',
        description:
          'Delivered advanced capabilities on a modern agentic workflow product alongside product and platform partners.',
      },
      {
        title: 'IoT offshore platform',
        description:
          'End-to-end React features and 10–25% performance gains on a Rockwell Automation IoT offshore device platform.',
      },
      {
        title: 'Backend performance (Nominaz)',
        description:
          'Refactored APIs and data layers for a 35% performance improvement across SQL and NoSQL workloads.',
      },
      {
        title: 'Magnaflor web & cloud',
        description:
          '45% front-end performance improvement and AWS migration with CDN and load balancing.',
      },
    ],
  },
  skills: {
    heading: 'Skills',
    groups: [
      {
        name: 'Languages',
        items: 'JavaScript (ES6+), TypeScript, HTML5, CSS3, Node.js, Go, PHP, Python, SQL',
      },
      {
        name: 'Front-end',
        items:
          'React, Next.js, Redux, Tailwind CSS, AngularJS, Sass, CSS Modules, Vitest, Cypress, React Testing Library',
      },
      {
        name: 'Back-end',
        items: 'Node.js, Express, PHP (CodeIgniter), Python, REST & GraphQL APIs',
      },
      {
        name: 'Databases',
        items: 'MySQL, SQL Server, MongoDB, DynamoDB',
      },
      {
        name: 'Tools & platforms',
        items:
          'Git (GitHub, Bitbucket), Docker, Jenkins, AWS (EC2, Lambda, RDS), Vite, Postman, Jira, Confluence',
      },
      {
        name: 'Leadership',
        items:
          'Team leadership, Agile/Scrum, system design, CI/CD, mentoring, international collaboration',
      },
    ],
    languagesHeading: 'Human languages',
    languages: 'English (fluent) · Spanish (native)',
  },
  education: {
    heading: 'Education',
    degree: 'Bachelor of Engineering, Electronics and Networks Engineering',
    school: 'Universidad de las Américas — Quito, Ecuador',
    period: '2015 – 2020',
  },
  contact: {
    heading: 'Contact',
    subheading: 'Open to senior engineering and tech lead opportunities.',
    email: 'Email',
    phone: 'Phone',
    downloadCv: 'Download CV (PDF)',
  },
  footer: {
    builtWith: 'Built with Astro',
    rights: 'All rights reserved.',
  },
  langSwitcher: {
    label: 'Language',
    switchTo: 'Español',
  },
};
