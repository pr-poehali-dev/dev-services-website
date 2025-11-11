import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const SEOHead = ({ title, description, image, url }: SEOHeadProps) => {
  useEffect(() => {
    const baseUrl = 'https://scalperio.ru';
    const defaultImage = 'https://cdn.poehali.dev/files/3d8f4275-6cad-4c16-a943-7b55dbec8faa.png';
    
    const ogImage = image || defaultImage;
    const ogUrl = url ? `${baseUrl}${url}` : baseUrl;

    document.title = title;
    
    const metaTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:secure_url', content: ogImage },
      { property: 'og:url', content: ogUrl },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'description', content: description }
    ];

    metaTags.forEach(({ property, name, content }) => {
      let meta = property 
        ? document.querySelector(`meta[property="${property}"]`)
        : document.querySelector(`meta[name="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', property);
        } else if (name) {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    });
  }, [title, description, image, url]);

  return null;
};

export default SEOHead;
