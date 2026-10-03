import { useEffect } from 'react';
import { DOMAIN } from '@/lib/constants';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

export default function SEO({ title, description, canonical, schema }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const cleanCanonical = canonical ? (canonical.startsWith('/') ? canonical : `/${canonical}`) : '';
    const canonicalUrl = cleanCanonical === '/' || cleanCanonical === '' ? `${DOMAIN}/` : `${DOMAIN}${cleanCanonical.replace(/\/$/, '')}`;

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:site_name', 'L&M Maintenance and Repair', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    let linkEl = document.querySelector('link[rel="canonical"]');
    if (!linkEl) {
      linkEl = document.createElement('link');
      linkEl.setAttribute('rel', 'canonical');
      document.head.appendChild(linkEl);
    }
    linkEl.setAttribute('href', canonicalUrl);

    let schemaEl = document.getElementById('page-schema');
    if (schema) {
      if (!schemaEl) {
        schemaEl = document.createElement('script');
        schemaEl.id = 'page-schema';
        schemaEl.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaEl);
      }
      schemaEl.textContent = JSON.stringify(schema);
    } else if (schemaEl) {
      schemaEl.remove();
    }

    return () => {
      const s = document.getElementById('page-schema');
      if (s) s.remove();
    };
  }, [title, description, canonical, schema]);

  return null;
}
