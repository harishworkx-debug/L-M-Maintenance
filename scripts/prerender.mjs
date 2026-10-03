import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(INDEX_HTML_PATH)) {
  console.error('dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');

const DOMAIN = 'https://www.gjrepairpros.com';
const PHONE = '+19705469838';
const PHONE_DISPLAY = '(970) 546-9838';
const BUSINESS_NAME = 'L&M Maintenance and Repair';

const ROUTES = [
  {
    path: '/',
    title: 'Plumber in Grand Junction, CO | L&M Maintenance and Repair',
    description: 'Looking for a plumber in Grand Junction, CO? Explore plumbing repair and service options from L&M Maintenance and Repair. Contact our team for help with your plumbing needs.',
    canonical: '/',
    h1: 'Expert Plumbing & Repair Services in Grand Junction, CO',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'PlumbingService',
      name: BUSINESS_NAME,
      description: 'Expert residential and commercial plumbing services in Grand Junction, CO.',
      telephone: PHONE,
      url: DOMAIN,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Grand Junction',
        addressRegion: 'CO',
        addressCountry: 'US'
      }
    }
  },
  {
    path: '/service-areas',
    title: 'Plumbing Service Areas | Grand Junction & Mesa County | L&M Maintenance',
    description: 'Serving Grand Junction, Fruita, Palisade, Clifton, Orchard Mesa, Loma, Mack, and Whitewater. Local plumbing repairs across Mesa County, CO.',
    canonical: '/service-areas',
    h1: 'Plumbing Service Areas in Mesa County, CO',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: BUSINESS_NAME,
      description: 'Local plumbing service connection covering Grand Junction and all surrounding Mesa County communities.',
      telephone: PHONE,
      url: `${DOMAIN}/service-areas`
    }
  },
  {
    path: '/about',
    title: 'About Us | L&M Maintenance and Repair | Grand Junction Plumber',
    description: 'Learn about L&M Maintenance and Repair. Trusted plumbing repair and home maintenance connection service in Grand Junction, CO and Mesa County.',
    canonical: '/about',
    h1: 'About L&M Maintenance and Repair',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: `About ${BUSINESS_NAME}`,
      description: 'Learn about L&M Maintenance and Repair serving Grand Junction, CO.',
      url: `${DOMAIN}/about`
    }
  },
  {
    path: '/contact',
    title: 'Contact Us | L&M Maintenance and Repair | Grand Junction CO',
    description: 'Get in touch with L&M Maintenance and Repair for expert plumbing services in Grand Junction and surrounding areas. Call (970) 546-9838.',
    canonical: '/contact',
    h1: 'Contact L&M Maintenance and Repair',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: `Contact ${BUSINESS_NAME}`,
      telephone: PHONE,
      url: `${DOMAIN}/contact`
    }
  },
  {
    path: '/reviews',
    title: 'Customer Reviews & Testimonials | L&M Maintenance and Repair',
    description: 'Read real reviews from satisfied customers in Grand Junction, CO. Rated 4.8 stars for plumbing and drain repair services.',
    canonical: '/reviews',
    h1: 'Customer Reviews & Testimonials',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: BUSINESS_NAME,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '42'
      }
    }
  },

  // Grand Junction Service Pages
  {
    path: '/plumbing-repair-grand-junction',
    title: 'Plumbing Repair in Grand Junction, CO | L&M Maintenance and Repair',
    description: 'Need plumbing repairs in Grand Junction, CO? Explore plumbing repair services from L&M Maintenance and Repair. Contact our team to discuss your plumbing needs.',
    canonical: '/plumbing-repair-grand-junction',
    h1: 'Professional Plumbing Repair in Grand Junction, CO',
  },
  {
    path: '/drain-repair-grand-junction',
    title: 'Expert Drain Cleaning & Repair in Grand Junction | L&M Maintenance',
    description: 'Struggling with a clogged or slow drain in Grand Junction? Our professional drain cleaning and repair services clear blockages fast. Contact us today!',
    canonical: '/drain-repair-grand-junction',
    h1: 'Expert Drain Cleaning & Repair in Grand Junction',
  },
  {
    path: '/water-heater-service-grand-junction',
    title: 'Water Heater Repair in Grand Junction, CO | L&M Maintenance',
    description: 'No hot water? Get expert water heater repair, maintenance, and installation in Grand Junction, CO. We service all makes and models. Schedule an appointment!',
    canonical: '/water-heater-service-grand-junction',
    h1: 'Water Heater Repair in Grand Junction, CO',
  },
  {
    path: '/faucet-repair-grand-junction',
    title: 'Professional Faucet Repair in Grand Junction, CO | L&M Maintenance',
    description: 'Fix dripping or broken faucets with our expert faucet repair services in Grand Junction. Save water and lower your bills. Call us today!',
    canonical: '/faucet-repair-grand-junction',
    h1: 'Professional Faucet Repair in Grand Junction, CO',
  },
  {
    path: '/toilet-repair-grand-junction',
    title: 'Fast Toilet Repair Services in Grand Junction | L&M Maintenance',
    description: 'Dealing with a running, leaking, or clogged toilet? Our Grand Junction plumbers offer fast and reliable toilet repair and installation. Get help now!',
    canonical: '/toilet-repair-grand-junction',
    h1: 'Fast Toilet Repair Services in Grand Junction',
  },
  {
    path: '/pipe-repair-grand-junction',
    title: 'Pipe Repair & Replacement in Grand Junction, CO | L&M Maintenance',
    description: 'Expert pipe repair and replacement in Grand Junction. We fix burst, frozen, and leaking pipes to protect your property from water damage. Contact us!',
    canonical: '/pipe-repair-grand-junction',
    h1: 'Pipe Repair & Replacement in Grand Junction, CO',
  },
  {
    path: '/garbage-disposal-repair-grand-junction',
    title: 'Garbage Disposal Repair in Grand Junction | L&M Maintenance',
    description: 'Is your garbage disposal jammed, leaking, or dead? Get fast and reliable garbage disposal repair and installation in Grand Junction. Call today!',
    canonical: '/garbage-disposal-repair-grand-junction',
    h1: 'Garbage Disposal Repair in Grand Junction',
  },
  {
    path: '/sump-pump-service-grand-junction',
    title: 'Sump Pump Repair & Installation in Grand Junction | L&M Maintenance',
    description: 'Protect your basement from flooding. We offer expert sump pump repair, maintenance, and installation services in Grand Junction, CO.',
    canonical: '/sump-pump-service-grand-junction',
    h1: 'Sump Pump Repair & Installation in Grand Junction',
  },
  {
    path: '/sewer-line-repair-grand-junction',
    title: 'Sewer Line Repair & Inspection in Grand Junction | L&M Maintenance',
    description: 'Experiencing sewage backups? We provide professional sewer line repair, camera inspections, and replacement in Grand Junction, CO. Call now!',
    canonical: '/sewer-line-repair-grand-junction',
    h1: 'Sewer Line Repair & Inspection in Grand Junction',
  },
  {
    path: '/shower-tub-repair-grand-junction',
    title: 'Shower & Tub Repair Services in Grand Junction | L&M Maintenance',
    description: 'Fix leaks, low pressure, and clogs with our professional shower and tub repair services in Grand Junction. Enhance your bathroom today!',
    canonical: '/shower-tub-repair-grand-junction',
    h1: 'Shower & Tub Repair Services in Grand Junction',
  },

  // Location Pages
  {
    path: '/plumber-fruita',
    title: 'Plumber in Fruita CO | L&M Maintenance and Repair',
    description: 'Trusted plumbing services in Fruita, CO. From drain cleaning to emergency pipe repairs, L&M Maintenance provides reliable local plumbing solutions.',
    canonical: '/plumber-fruita',
    h1: 'Expert Plumber in Fruita, CO',
  },
  {
    path: '/plumber-palisade',
    title: 'Plumber in Palisade CO | L&M Maintenance and Repair',
    description: 'Expert plumbers serving Palisade, CO. We specialize in water heater repair, pipe leak fixes, and comprehensive residential plumbing services.',
    canonical: '/plumber-palisade',
    h1: 'Expert Plumber in Palisade, CO',
  },
  {
    path: '/plumber-clifton',
    title: 'Plumber in Clifton CO | L&M Maintenance and Repair',
    description: 'Looking for a plumber in Clifton, CO? We provide fast, affordable, and professional plumbing and drain cleaning services for Clifton residents.',
    canonical: '/plumber-clifton',
    h1: 'Expert Plumber in Clifton, CO',
  },
  {
    path: '/plumber-orchard-mesa',
    title: 'Plumber in Orchard Mesa CO | L&M Maintenance and Repair',
    description: 'Top-rated plumbing repairs in Orchard Mesa, CO. Get honest pricing and expert service for water heaters, clogged drains, and pipe leaks.',
    canonical: '/plumber-orchard-mesa',
    h1: 'Expert Plumber in Orchard Mesa, CO',
  },
  {
    path: '/plumber-loma',
    title: 'Plumber in Loma CO | L&M Maintenance and Repair',
    description: 'Professional plumbing services in Loma, Colorado. Call us for reliable water heater replacement, drain unclogging, and emergency pipe repair.',
    canonical: '/plumber-loma',
    h1: 'Expert Plumber in Loma, CO',
  },
  {
    path: '/plumber-mack',
    title: 'Plumber in Mack CO | L&M Maintenance and Repair',
    description: 'Dependable plumber in Mack, CO. We offer expert residential plumbing, from fixing leaky faucets to full sewer line inspections.',
    canonical: '/plumber-mack',
    h1: 'Expert Plumber in Mack, CO',
  },
  {
    path: '/plumber-whitewater',
    title: 'Plumber in Whitewater CO | L&M Maintenance and Repair',
    description: 'Whitewater\'s trusted plumbing professionals. Contact us for fast drain cleaning, water heater service, and comprehensive plumbing repairs.',
    canonical: '/plumber-whitewater',
    h1: 'Expert Plumber in Whitewater, CO',
  }
];

function generateRouteHtml(route, baseHtml) {
  const fullCanonicalUrl = route.canonical === '/' ? `${DOMAIN}/` : `${DOMAIN}${route.canonical}`;
  
  // Replace <title>
  let html = baseHtml.replace(
    /<title>.*?<\/title>/s,
    `<title>${route.title}</title>`
  );

  // Replace or add <meta name="description">
  const metaDescTag = `<meta name="description" content="${route.description}" />`;
  if (html.includes('<meta name="description"')) {
    html = html.replace(/<meta name="description"[^>]*>/s, metaDescTag);
  } else {
    html = html.replace('</head>', `  ${metaDescTag}\n  </head>`);
  }

  // Remove existing hardcoded canonical link if present, then add canonical
  html = html.replace(/<link rel="canonical"[^>]*>/gs, '');
  const canonicalTag = `<link rel="canonical" href="${fullCanonicalUrl}" />`;
  html = html.replace('</head>', `  ${canonicalTag}\n  </head>`);

  // Add OpenGraph and Twitter tags
  const ogTags = `
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:url" content="${fullCanonicalUrl}" />
    <meta property="og:site_name" content="${BUSINESS_NAME}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
  `;
  html = html.replace('</head>', `${ogTags}\n  </head>`);

  // Inject JSON-LD Schema
  if (route.schema) {
    const schemaTag = `<script type="application/ld+json" id="page-schema">${JSON.stringify(route.schema, null, 2)}</script>`;
    html = html.replace('</head>', `  ${schemaTag}\n  </head>`);
  } else {
    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'PlumbingService',
      name: route.h1,
      description: route.description,
      url: fullCanonicalUrl,
      telephone: PHONE,
      provider: {
        '@type': 'LocalBusiness',
        name: BUSINESS_NAME,
        telephone: PHONE
      }
    };
    const schemaTag = `<script type="application/ld+json" id="page-schema">${JSON.stringify(defaultSchema, null, 2)}</script>`;
    html = html.replace('</head>', `  ${schemaTag}\n  </head>`);
  }

  // Pre-render minimal semantic body content inside #root for SEO indexing
  const bodyMarkup = `
    <div id="root">
      <header>
        <nav>
          <a href="/">Home</a> | 
          <a href="/service-areas">Service Areas</a> | 
          <a href="/about">About</a> | 
          <a href="/reviews">Reviews</a> | 
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main>
        <article style="max-width: 1200px; margin: 0 auto; padding: 20px;">
          <h1>${route.h1}</h1>
          <p>${route.description}</p>
          <p>For immediate plumbing assistance in Grand Junction and Mesa County, call us today at <a href="tel:${PHONE}">${PHONE_DISPLAY}</a>.</p>
        </article>
      </main>
      <footer>
        <p>&copy; ${new Date().getFullYear()} ${BUSINESS_NAME}. All rights reserved.</p>
        <p>Serving Grand Junction, Fruita, Palisade, Clifton, Orchard Mesa, Loma, Mack, Whitewater, CO.</p>
      </footer>
    </div>
  `;

  html = html.replace('<div id="root"></div>', bodyMarkup);
  return html;
}

let generatedCount = 0;

for (const route of ROUTES) {
  const renderedHtml = generateRouteHtml(route, templateHtml);

  if (route.path === '/') {
    fs.writeFileSync(INDEX_HTML_PATH, renderedHtml, 'utf-8');
    generatedCount++;
    console.log(`Prerendered: / (dist/index.html)`);
  } else {
    const routeDir = path.join(DIST_DIR, route.path.replace(/^\//, ''));
    fs.mkdirSync(routeDir, { recursive: true });
    
    // Write dist/<route>/index.html
    const targetFile = path.join(routeDir, 'index.html');
    fs.writeFileSync(targetFile, renderedHtml, 'utf-8');

    // Also write dist/<route>.html for vercel cleanUrls support
    const cleanUrlFile = path.join(DIST_DIR, `${route.path.replace(/^\//, '')}.html`);
    fs.writeFileSync(cleanUrlFile, renderedHtml, 'utf-8');

    generatedCount++;
    console.log(`Prerendered: ${route.path} -> ${targetFile}`);
  }
}

console.log(`\nSuccessfully pre-rendered ${generatedCount} static pages for Google Search Console indexing!`);
