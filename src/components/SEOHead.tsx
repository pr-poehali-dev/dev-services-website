import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  keywords?: string;
  schema?: any;
}

const SEOHead = ({ title, description, image, url, keywords, schema }: SEOHeadProps) => {
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
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'description', content: description }
    ];

    if (keywords) {
      metaTags.push({ name: 'keywords', content: keywords });
    }

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

    if (schema) {
      const existingSchema = document.querySelector('script[data-dynamic-schema="true"]');
      if (existingSchema) {
        existingSchema.remove();
      }

      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.setAttribute('data-dynamic-schema', 'true');
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', ogUrl);
    } else {
      const newCanonical = document.createElement('link');
      newCanonical.rel = 'canonical';
      newCanonical.href = ogUrl;
      document.head.appendChild(newCanonical);
    }
  }, [title, description, image, url, keywords, schema]);

  return null;
};

export default SEOHead;