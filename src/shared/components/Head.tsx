import { useEffect } from 'react';

interface HeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export function Head({
  title = 'Elvis W. Vásquez - Desarrollador Web',
  description =
    'Desarrollador Web Full Stack especializado en React, TypeScript y tecnologías modernas. Quito, Ecuador.',
  keywords = 'desarrollador web, react, typescript, full stack, quito, ecuador',
  ogImage = '/assets/images/perfil-wes9319-1270x952.jpg',
  canonical,
}: HeadProps) {
  useEffect(() => {
    document.title = title;

    const ensureMetaByName = (name: string): HTMLMetaElement => {
      let node = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!node) {
        node = document.createElement('meta');
        node.name = name;
        document.head.appendChild(node);
      }
      return node;
    };

    const ensureMetaByProperty = (property: string): HTMLMetaElement => {
      let node = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!node) {
        node = document.createElement('meta');
        node.setAttribute('property', property);
        document.head.appendChild(node);
      }
      return node;
    };

    ensureMetaByName('description').content = description;
    ensureMetaByName('keywords').content = keywords;
    ensureMetaByName('author').content = 'Elvis Wesley Vásquez';
    ensureMetaByName('viewport').content = 'width=device-width, initial-scale=1.0';

    ensureMetaByProperty('og:title').content = title;
    ensureMetaByProperty('og:description').content = description;
    ensureMetaByProperty('og:image').content = ogImage;
    ensureMetaByProperty('og:type').content = 'website';
    ensureMetaByProperty('og:locale').content = 'es_EC';

    ensureMetaByName('twitter:card').content = 'summary_large_image';
    ensureMetaByName('twitter:title').content = title;
    ensureMetaByName('twitter:description').content = description;
    ensureMetaByName('twitter:image').content = ogImage;

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
  }, [title, description, keywords, ogImage, canonical]);

  return null;
}


