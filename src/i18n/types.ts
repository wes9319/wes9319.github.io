export type Lang = 'en' | 'es';

export interface ExperienceRole {
  company: string;
  location?: string;
  title: string;
  period: string;
  client?: string;
  bullets: string[];
  stack?: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface SkillGroup {
  name: string;
  items: string;
}

export interface Translations {
  lang: Lang;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    experience: string;
    work: string;
    skills: string;
    education: string;
    contact: string;
    skip: string;
  };
  hero: {
    name: string;
    title: string;
    location: string;
    pitch: string;
    ctaWork: string;
    ctaCv: string;
    ctaContact: string;
  };
  about: {
    heading: string;
    body: string[];
  };
  experience: {
    heading: string;
    roles: ExperienceRole[];
    otherHeading: string;
    otherRoles: { title: string; period: string }[];
    otherStack: string;
  };
  highlights: {
    heading: string;
    subheading: string;
    items: Highlight[];
  };
  skills: {
    heading: string;
    groups: SkillGroup[];
    languagesHeading: string;
    languages: string;
  };
  education: {
    heading: string;
    degree: string;
    school: string;
    period: string;
  };
  contact: {
    heading: string;
    subheading: string;
    email: string;
    phone: string;
    downloadCv: string;
  };
  footer: {
    builtWith: string;
    rights: string;
  };
  langSwitcher: {
    label: string;
    switchTo: string;
  };
}
