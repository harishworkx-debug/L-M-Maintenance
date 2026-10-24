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

const MAIN_SERVICES_LIST = [
  { slug: 'plumbing-repair', name: 'Plumbing Repair' },
  { slug: 'drain-repair', name: 'Drain Cleaning & Repair' },
  { slug: 'water-heater-service', name: 'Water Heater Service' },
  { slug: 'faucet-repair', name: 'Faucet Repair' },
  { slug: 'toilet-repair', name: 'Toilet Repair' },
  { slug: 'pipe-repair', name: 'Pipe Repair & Replacement' },
  { slug: 'garbage-disposal-repair', name: 'Garbage Disposal Repair' },
  { slug: 'sump-pump-service', name: 'Sump Pump Service' },
  { slug: 'sewer-line-repair', name: 'Sewer Line Repair' },
  { slug: 'shower-tub-repair', name: 'Shower & Tub Repair' }
];

const SERVICE_AREAS_LIST = [
  { name: 'Grand Junction', slug: 'grand-junction', url: '/' },
  { name: 'Fruita', slug: 'fruita', url: '/plumber-fruita' },
  { name: 'Palisade', slug: 'palisade', url: '/plumber-palisade' },
  { name: 'Clifton', slug: 'clifton', url: '/plumber-clifton' },
  { name: 'Orchard Mesa', slug: 'orchard-mesa', url: '/plumber-orchard-mesa' },
  { name: 'Loma', slug: 'loma', url: '/plumber-loma' },
  { name: 'Mack', slug: 'mack', url: '/plumber-mack' },
  { name: 'Whitewater', slug: 'whitewater', url: '/plumber-whitewater' }
];

const ROUTES = [
  // 1. Home
  {
    path: '/',
    title: 'Plumber Grand Junction CO | L&M Maintenance and Repair',
    description: 'Looking for a reliable plumber in Grand Junction, CO? We provide emergency repairs, drain cleaning, water heaters, and pipe services across Mesa County. Call (970) 546-9838.',
    canonical: '/',
    h1: 'Plumber in Grand Junction, CO',
    bodyHtml: `
      <p>Welcome to ${BUSINESS_NAME}, your trusted local partner for residential and commercial plumbing across Grand Junction and Mesa County, Colorado. From dripping faucets and burst frozen pipes to water heater replacements and full sewer inspections, our experienced plumbers deliver fast, transparent, and durable repairs.</p>
      
      <h2>Full-Service Plumbing in Grand Junction</h2>
      <p>Plumbing emergencies never happen at a convenient time. When a pipe ruptures or your water heater begins leaking onto your basement floor, you need an experienced professional on-site quickly. We arrive with fully stocked service vehicles, evaluate the issue accurately, provide honest upfront estimates, and get your home running safely again.</p>

      <h2>Serving Grand Junction & Surrounding Mesa County</h2>
      <p>We proudly serve the entire Grand Valley, including Grand Junction, Fruita, Palisade, Clifton, Orchard Mesa, Loma, Mack, and Whitewater. Whether you are dealing with mineral-heavy hard water scaling, seasonal cold-weather freeze risks, or aging sewer laterals, we have the local expertise to fix it right the first time.</p>
    `,
    faqs: [
      { q: 'What areas do you serve in Mesa County?', a: 'We serve Grand Junction, Fruita, Palisade, Clifton, Orchard Mesa, Loma, Mack, and Whitewater, Colorado.' },
      { q: 'Do you offer emergency plumbing repairs?', a: 'Yes. We prioritize urgent issues such as burst pipes, severe water heater leaks, and sewer backups with same-day emergency dispatch.' },
      { q: 'How can I get an estimate for plumbing services?', a: 'Simply call us at (970) 546-9838 or submit our online contact form. We provide transparent upfront pricing before performing any repair work.' }
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'PlumbingService',
      name: BUSINESS_NAME,
      description: 'Expert residential and commercial plumbing services in Grand Junction, CO.',
      telephone: PHONE,
      url: DOMAIN,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Grand Junction',
        addressRegion: 'CO',
        addressCountry: 'US'
      }
    }
  },

  // 2. Service Areas Page
  {
    path: '/service-areas',
    title: 'Plumbing Service Areas Around Grand Junction | L&M Maintenance',
    description: 'Serving Grand Junction, Fruita, Palisade, Clifton, Orchard Mesa, Loma, Mack, and Whitewater. Local plumbing repairs across Mesa County, CO.',
    canonical: '/service-areas',
    h1: 'Plumbing Service Areas in Grand Junction & Mesa County',
    bodyHtml: `
      <p>${BUSINESS_NAME} proudly provides high-quality plumbing repairs, water heater services, and drain cleaning throughout Mesa County, Colorado. Our service radius encompasses the entire Grand Valley, ensuring homeowners and businesses have quick access to dependable, licensed plumbing professionals.</p>

      <h2>Communities We Proudly Service</h2>
      <p>Explore our dedicated location pages for localized plumbing advice, common neighborhood challenges, and emergency response details:</p>
      <ul>
        <li><a href="/plumber-fruita"><strong>Fruita, CO:</strong></a> Hard water descaling, crawl space winterization, and dual irrigation backflow prevention.</li>
        <li><a href="/plumber-palisade"><strong>Palisade, CO:</strong></a> Pressure regulator valves (PRVs), orchard yard hydrants, and tree root sewer clearing.</li>
        <li><a href="/plumber-clifton"><strong>Clifton, CO:</strong></a> Clifton Sanitation District lateral backups, swamp cooler line maintenance, and water heater swaps.</li>
        <li><a href="/plumber-orchard-mesa"><strong>Orchard Mesa, CO:</strong></a> Expansive bentonite clay soil pipe shifts, slab leak detection, and sewer repair.</li>
        <li><a href="/plumber-loma"><strong>Loma, CO:</strong></a> Domestic well pressure tank maintenance, livestock hydrant repair, and rural water filtration.</li>
        <li><a href="/plumber-mack"><strong>Mack, CO:</strong></a> High alkali water conditioning, sacrificial water heater anodes, and septic-safe drain cleaning.</li>
        <li><a href="/plumber-whitewater"><strong>Whitewater, CO:</strong></a> Elevation gradient pressure spike remediation, water hammer elimination, and canyon drainage repair.</li>
      </ul>
    `,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: BUSINESS_NAME,
      description: 'Local plumbing service connection covering Grand Junction and all surrounding Mesa County communities.',
      telephone: PHONE,
      url: `${DOMAIN}/service-areas`
    }
  },

  // 3. About Us
  {
    path: '/about',
    title: 'About L&M Maintenance and Repair | Trusted Plumber Grand Junction CO',
    description: 'Learn about L&M Maintenance and Repair. Trusted plumbing repair and home maintenance in Grand Junction, CO and Mesa County.',
    canonical: '/about',
    h1: 'About L&M Maintenance and Repair',
    bodyHtml: `
      <p>${BUSINESS_NAME} is dedicated to delivering superior plumbing repair and maintenance services throughout Grand Junction and Mesa County, Colorado. We believe that homeowners deserve transparent pricing, punctual technicians, and lasting solutions.</p>

      <h2>Our Mission & Values</h2>
      <p>Plumbing integrity is the foundation of a safe, comfortable home. We never cut corners or recommend unnecessary replacements. Our technicians diagnose root causes and explain all available repair options clearly before any work begins.</p>
      
      <h2>Why Grand Valley Homeowners Trust Us</h2>
      <p>From prompt response times to respect for your home, our certified plumbers treat every job with exceptional attention to detail. Whether it is clearing a blocked drain, tuning up a water heater, or repiping an aging system, we stand behind our workmanship.</p>
    `,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: `About ${BUSINESS_NAME}`,
      description: 'Learn about L&M Maintenance and Repair serving Grand Junction, CO.',
      url: `${DOMAIN}/about`
    }
  },

  // 4. Contact Us
  {
    path: '/contact',
    title: 'Contact a Plumber in Grand Junction CO | L&M Maintenance',
    description: 'Get in touch with L&M Maintenance and Repair for expert plumbing services in Grand Junction and surrounding areas. Call (970) 546-9838.',
    canonical: '/contact',
    h1: 'Contact a Plumber in Grand Junction, CO',
    bodyHtml: `
      <p>Need plumbing service, advice, or emergency repairs in Grand Junction or anywhere in Mesa County? We are ready to help. Call us directly at ${PHONE_DISPLAY} or fill out our online inquiry form.</p>
      
      <h2>Service Hours & Emergency Response</h2>
      <p>We are available for scheduled appointments Monday through Saturday, with emergency response for burst pipes, flooding, and severe backups. Contact us today to speak directly with our friendly dispatch team.</p>
    `,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: `Contact ${BUSINESS_NAME}`,
      telephone: PHONE,
      url: `${DOMAIN}/contact`
    }
  },

  // 5. Customer Reviews
  {
    path: '/reviews',
    title: 'Reviews for L&M Maintenance and Repair (GJ Repair Pros) | Grand Junction CO',
    description: 'Read real reviews from satisfied customers in Grand Junction, CO. Rated 4.8 stars for plumbing and drain repair services.',
    canonical: '/reviews',
    h1: 'Customer Reviews for L&M Maintenance and Repair',
    bodyHtml: `
      <p>See why homeowners across Grand Junction and Mesa County rate ${BUSINESS_NAME} (GJ Repair Pros) 4.8 out of 5 stars for reliable plumbing, rapid drain cleaning, and water heater repairs.</p>
      
      <h2>Verified Local Customer Feedback</h2>
      <p>Our customers consistently highlight our upfront pricing, quick arrival times, clean workspace practices, and courteous technicians. We invite you to read through our testimonials and experience the difference on your next plumbing service call.</p>
    `,
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

  // HTML Sitemap Route
  {
    path: '/sitemap',
    title: 'HTML Sitemap | All Pages & Services | L&M Maintenance and Repair',
    description: 'Complete directory of all residential plumbing services, Mesa County service areas, and customer resources for L&M Maintenance and Repair.',
    canonical: '/sitemap',
    h1: 'Website Sitemap & Directory',
    bodyHtml: `
      <p>Quickly navigate every page, service, and local service area covered by ${BUSINESS_NAME} across Grand Junction and Mesa County, Colorado.</p>
      
      <h2>Main Pages</h2>
      <ul>
        <li><a href="/">Home Page</a> — Grand Junction Plumber overview</li>
        <li><a href="/about">About Us</a> — Company story, values, and credentials</li>
        <li><a href="/service-areas">Service Areas Hub</a> — Full Mesa County coverage map</li>
        <li><a href="/reviews">Customer Reviews</a> — 4.8★ Google verified testimonials</li>
        <li><a href="/contact">Contact Us</a> — Phone number, direct form, and emergency dispatch</li>
      </ul>

      <h2>Grand Junction Plumbing Services</h2>
      <ul>
        ${MAIN_SERVICES_LIST.map(s => `<li><a href="/${s.slug}-grand-junction">${s.name} in Grand Junction, CO</a></li>`).join('')}
      </ul>

      <h2>Mesa County Communities & Location Pages</h2>
      <ul>
        <li><a href="/plumbing-repair-grand-junction">Grand Junction, CO (Central Dispatch Hub)</a></li>
        ${SERVICE_AREAS_LIST.filter(a => a.url !== '/').map(a => `<li><a href="${a.url}">Plumber in ${a.name}, CO</a></li>`).join('')}
      </ul>
    `,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `HTML Sitemap | ${BUSINESS_NAME}`,
      description: 'Complete website directory of all plumbing services and Mesa County service areas.',
      url: `${DOMAIN}/sitemap`
    }
  },

  // 6. Plumbing Repair Grand Junction
  {
    path: '/plumbing-repair-grand-junction',
    title: 'Plumbing Repair Grand Junction CO | L&M Maintenance and Repair',
    description: 'Need plumbing repairs in Grand Junction, CO? Reliable leak diagnosis, pipe repairs, fixture fixes, and emergency response. Call (970) 546-9838.',
    canonical: '/plumbing-repair-grand-junction',
    h1: 'Plumbing repair Grand Junction CO',
    bodyHtml: `
      <p>Don't let a plumbing emergency disrupt your day. From minor leaks to major pipe bursts, our team provides fast, reliable, and expert residential plumbing repair in Grand Junction, Colorado.</p>
      <p>Whether it's a dripping faucet that's driving you crazy or a hidden pipe leak causing water damage, our experienced plumbers have the tools and expertise to fix it right the first time. We specialize in comprehensive local plumbing repair services tailored to the unique needs of our community.</p>
      <h2>Our Plumbing Repair Process</h2>
      <p>We take pride in a transparent and efficient repair process. First, we accurately diagnose issues using state-of-the-art leak detection and inspection tools. Next, we provide you with upfront, honest pricing before any work begins. Finally, our certified plumbers complete the job quickly to restore your plumbing system's functionality while ensuring long-term reliability.</p>
      <h2>Plumbing Repair for Grand Junction Homes</h2>
      <p>Every home is unique, and so are its plumbing needs. We have extensive experience servicing residential properties throughout the area. Whether you live in a historic home requiring delicate care or a newer build needing a fixture replacement, we deliver tailored repairs. From routine fixes to complex pipe and drain repairs, we have you covered.</p>
    `,
    faqs: [
      { q: 'What counts as a plumbing emergency?', a: 'Any situation that causes significant water damage, such as a burst pipe, severe leak, or a major sewage backup, is considered an emergency. Call us immediately if you experience these issues.' },
      { q: 'How quickly can you respond to a repair call in Grand Junction?', a: 'We prioritize urgent plumbing repairs in Grand Junction and strive to offer same-day service for critical issues. Our technicians are dispatched as quickly as possible.' },
      { q: 'Do you guarantee your plumbing repairs?', a: 'Yes, we stand behind our workmanship. Our repairs are backed by a satisfaction guarantee to ensure you have peace of mind.' }
    ]
  },

  // 7. Drain Repair Grand Junction
  {
    path: '/drain-repair-grand-junction',
    title: 'Drain Repair Grand Junction CO | Clog Clearing & Pipe Repair',
    description: 'Slow or blocked drains in Grand Junction, CO? We diagnose recurring clogs, clean main lines, and repair damaged drain pipes fast. Call (970) 546-9838.',
    canonical: '/drain-repair-grand-junction',
    h1: 'Drain repair Grand Junction CO',
    bodyHtml: `
      <p>Clogged drains are more than just an annoyance; they can lead to severe plumbing backups. Our Grand Junction drain experts are equipped to clear the toughest blockages quickly.</p>
      <p>A slow-draining sink or shower is often the first sign of a deeper issue within your plumbing system. Hair, grease, soap scum, and other debris can accumulate over time, leading to stubborn clogs that store-bought chemicals just can't fix.</p>
      <p>Our drain cleaning and repair services in Grand Junction utilize advanced motorized augers and hydro-jetting to completely clear your pipes without damaging them. If your drain pipes are damaged or collapsed, we also offer professional repair and replacement solutions.</p>
    `,
    faqs: [
      { q: 'Why do my drains keep clogging?', a: 'Recurring clogs are often caused by a buildup of grease, hair, or scale deep within the pipes, or even tree root intrusion in the main sewer line. We can inspect your pipes to find the root cause.' },
      { q: 'Is hydro-jetting safe for my pipes?', a: 'Yes, hydro-jetting is highly effective and safe for most modern plumbing systems. We assess the condition of your pipes before choosing the best cleaning method.' },
      { q: 'How often should I have my drains professionally cleaned?', a: 'For preventative maintenance, we recommend a professional drain cleaning every 1 to 2 years, especially if you live in an older home or frequently experience slow drains.' }
    ]
  },

  // 8. Water Heater Service Grand Junction
  {
    path: '/water-heater-service-grand-junction',
    title: 'Water Heater Repair Grand Junction CO | Tank & Tankless Services',
    description: 'No hot water? Get expert water heater repair, maintenance, and replacement in Grand Junction, CO. Gas, electric, and tankless units serviced. Call (970) 546-9838.',
    canonical: '/water-heater-service-grand-junction',
    h1: 'Water heater repair Grand Junction CO',
    bodyHtml: `
      <p>Losing hot water can disrupt your entire routine. Our Grand Junction technicians provide rapid water heater repairs, routine maintenance, and expert replacements.</p>
      <p>Your water heater works hard every day to provide comfort for your family. When it starts failing—whether it's producing lukewarm water, making strange noises, or leaking—you need an expert you can trust. We service both traditional tank water heaters and modern tankless systems in Grand Junction.</p>
      <p>If your water heater is over 10 years old and requiring frequent repairs, it might be time for a replacement. Alongside our comprehensive plumbing repair options, we offer energy-efficient water heater replacements that can help lower your utility bills and provide endless hot water.</p>
    `,
    faqs: [
      { q: 'How do I know if my water heater needs to be replaced?', a: 'Signs include the tank leaking, rust-colored water, loud rumbling noises, or if the unit is more than 10-15 years old and struggling to heat water.' },
      { q: 'Do you install tankless water heaters?', a: 'Yes, we specialize in the installation and maintenance of high-efficiency tankless water heaters for endless hot water on demand.' },
      { q: 'Why is my water heater making a popping noise?', a: 'Popping or rumbling noises usually indicate a buildup of sediment at the bottom of the tank. Flushing the water heater can often resolve this issue.' }
    ]
  },

  // 9. Faucet Repair Grand Junction
  {
    path: '/faucet-repair-grand-junction',
    title: 'Faucet Repair Grand Junction CO | Kitchen & Bathroom Fixture Service',
    description: 'Fix dripping, low flow, or leaking faucets in Grand Junction, CO. Expert repairs for kitchen sinks, bathroom vanities, and outdoor spigots. Call (970) 546-9838.',
    canonical: '/faucet-repair-grand-junction',
    h1: 'Faucet repair Grand Junction CO',
    bodyHtml: `
      <p>A dripping faucet isn't just annoying—it wastes gallons of water and increases your utility bills. Let our Grand Junction experts fix or replace your faulty fixtures.</p>
      <p>Faucets have many small moving parts, including O-rings, washers, and cartridges, which can wear out over time. Whether it's a leaky kitchen sink, a bathroom faucet that won't shut off, or a worn-out outdoor spigot, we have the parts and expertise to repair it.</p>
      <p>If your fixtures are outdated or heavily corroded, we also offer professional faucet replacement and installation to modernize your space and improve water efficiency.</p>
    `,
    faqs: [
      { q: 'Can you repair a dripping faucet or do I need a new one?', a: 'Most dripping faucets can be repaired by replacing worn-out internal components like cartridges or washers. However, if the fixture is very old or severely corroded, replacement might be more cost-effective.' },
      { q: 'Do you install customer-supplied faucets?', a: 'Yes! If you have purchased a specific faucet you love, our team is happy to provide professional installation services to ensure it works perfectly.' }
    ]
  },

  // 10. Toilet Repair Grand Junction
  {
    path: '/toilet-repair-grand-junction',
    title: 'Toilet Repair Grand Junction CO | Running, Leaking & Clogged Toilets',
    description: 'Running toilet, weak flush, or leaks around the base? Fast toilet repair and replacement services in Grand Junction, CO. Call (970) 546-9838.',
    canonical: '/toilet-repair-grand-junction',
    h1: 'Toilet repair Grand Junction CO',
    bodyHtml: `
      <p>A malfunctioning toilet is an urgent issue. Whether it's constantly running, leaking at the base, or won't flush, our Grand Junction plumbers are ready to help.</p>
      <p>Toilets are essential fixtures, and when they stop working correctly, it causes immediate inconvenience. A constantly running toilet can waste thousands of gallons of water a month, while a leak at the base can rot your flooring and cause significant water damage.</p>
      <p>We diagnose and repair all types of toilet problems, including faulty fill valves, worn flappers, broken handles, and stubborn clogs.</p>
    `,
    faqs: [
      { q: 'Why does my toilet keep running after it flushes?', a: 'A running toilet is usually caused by a faulty flapper valve, an improperly adjusted float, or a broken fill valve. These are common issues we can fix very quickly.' },
      { q: 'My toilet is rocking back and forth. Is that bad?', a: 'Yes. A rocking toilet can break the wax ring seal, leading to leaks and water damage around the base. It should be stabilized and resealed immediately.' }
    ]
  },

  // 11. Pipe Repair Grand Junction
  {
    path: '/pipe-repair-grand-junction',
    title: 'Pipe Repair Grand Junction CO | Burst, Frozen & Leaking Pipe Services',
    description: 'Expert pipe leak detection and repair in Grand Junction, CO. We repair copper, PEX, and galvanized pipes, including burst winter lines. Call (970) 546-9838.',
    canonical: '/pipe-repair-grand-junction',
    h1: 'Pipe repair Grand Junction CO',
    bodyHtml: `
      <p>Leaking or burst pipes can cause devastating water damage to your property. Our Grand Junction pipe repair experts provide fast, reliable solutions to protect your home.</p>
      <p>From frozen pipes bursting in the winter to aging copper or galvanized pipes developing pinhole leaks, plumbing pipe issues require immediate professional attention. We use advanced leak detection techniques to locate hidden pipe leaks behind walls or under floors.</p>
      <p>We handle all aspects of pipe repair, including section replacements, whole-home repiping, and fixing noisy water hammer issues using durable PEX and modern copper.</p>
    `,
    faqs: [
      { q: 'How do I know if I have a hidden pipe leak?', a: 'Signs of a hidden leak include unexplained increases in your water bill, the sound of running water, damp spots on walls or floors, and a musty smell.' },
      { q: 'What should I do if a pipe bursts?', a: 'Immediately locate and turn off your main water shut-off valve to stop the flooding, then call us for emergency repair services.' }
    ]
  },

  // 12. Garbage Disposal Repair Grand Junction
  {
    path: '/garbage-disposal-repair-grand-junction',
    title: 'Garbage Disposal Repair Grand Junction CO | Jammed & Leaking Units',
    description: 'Jammed, humming, or leaking garbage disposal in Grand Junction, CO? We diagnose electrical issues, unjam blades, or install replacements. Call (970) 546-9838.',
    canonical: '/garbage-disposal-repair-grand-junction',
    h1: 'Garbage disposal repair Grand Junction CO',
    bodyHtml: `
      <p>A broken garbage disposal can quickly lead to a smelly sink and clogged drains. Our experts in Grand Junction can repair or replace your disposal fast.</p>
      <p>Garbage disposals are incredibly convenient, but they are prone to jamming when hard foods, bones, or fibrous vegetables are put down the drain. If your disposal is humming but not spinning, completely dead, or leaking from the bottom, it's time to call a professional.</p>
    `,
    faqs: [
      { q: 'Why is my garbage disposal just humming and not grinding?', a: 'A humming disposal usually means the motor is receiving power, but the grinding plates are jammed by an object. It requires safe removal of the blockage.' },
      { q: 'What should I NEVER put down my garbage disposal?', a: 'Avoid putting coffee grounds, eggshells, fibrous vegetables, grease, oil, bones, and large amounts of pasta or rice down the disposal.' }
    ]
  },

  // 13. Sump Pump Service Grand Junction
  {
    path: '/sump-pump-service-grand-junction',
    title: 'Sump Pump Service Grand Junction CO | Repair, Testing & Installation',
    description: 'Protect your basement and crawlspace from flooding. Professional sump pump repair, float switch testing, and replacement in Grand Junction. Call (970) 546-9838.',
    canonical: '/sump-pump-service-grand-junction',
    h1: 'Sump pump service Grand Junction CO',
    bodyHtml: `
      <p>A reliable sump pump is your first line of defense against basement flooding. Our Grand Junction plumbers ensure your pump is ready for the next heavy rain.</p>
      <p>If you live in an area prone to high water tables or heavy runoff, a functioning sump pump is critical. When a sump pump fails, it can result in thousands of dollars in water damage to your basement or crawlspace in a matter of hours.</p>
    `,
    faqs: [
      { q: 'How often should a sump pump be replaced?', a: 'Most primary sump pumps last between 7 and 10 years. We recommend testing your pump regularly and considering replacement if approaching the end of its lifespan.' },
      { q: 'Do I really need a battery backup sump pump?', a: 'Yes! Severe storms often knock out power exactly when you need your sump pump the most. A battery backup ensures your basement stays dry even during a blackout.' }
    ]
  },

  // 14. Sewer Line Repair Grand Junction
  {
    path: '/sewer-line-repair-grand-junction',
    title: 'Sewer Line Repair Grand Junction CO | Camera Inspection & Repairs',
    description: 'Recurring sewer backups or foul odors? Professional sewer line repair, root clearing, and video camera inspections in Grand Junction, CO. Call (970) 546-9838.',
    canonical: '/sewer-line-repair-grand-junction',
    h1: 'Sewer line repair Grand Junction CO',
    bodyHtml: `
      <p>A damaged sewer line is a serious plumbing emergency. Our Grand Junction team uses advanced technology to inspect and repair sewer lines efficiently.</p>
      <p>Frequent drain backups, lush green patches in your yard, and foul odors are strong indicators of a broken or clogged main sewer line. Tree roots, shifting soil, and aging pipes can all cause major blockages or collapses in your sewer system.</p>
    `,
    faqs: [
      { q: 'What are the signs of a broken sewer line?', a: 'Look out for multiple drains clogging simultaneously, gurgling sounds from your toilets, sewage backing up into the bathtub, and foul odors around your property.' },
      { q: 'What is a sewer camera inspection?', a: 'We feed a specialized waterproof camera down your sewer line to visually inspect the inside of the pipes, allowing us to find tree roots, cracks, or bellied pipes accurately.' }
    ]
  },

  // 15. Shower & Tub Repair Grand Junction
  {
    path: '/shower-tub-repair-grand-junction',
    title: 'Shower and Tub Repair Grand Junction CO | Leaks, Valves & Drains',
    description: 'Leaking shower valve, poor water pressure, or a slow bathtub drain? Expert shower and tub repairs across Grand Junction, CO. Call (970) 546-9838.',
    canonical: '/shower-tub-repair-grand-junction',
    h1: 'Shower and tub repair Grand Junction CO',
    bodyHtml: `
      <p>Your shower and bathtub should be a place of relaxation, not frustration. Whether you are dealing with a showerhead that trickles, a tub that takes hours to drain, or a leaky valve behind the wall, we have the expertise to fix it.</p>
      <p>We handle everything from replacing worn-out diverter valves and cartridges to unclogging stubborn hair blockages deep within the tub drain.</p>
    `,
    faqs: [
      { q: 'Why is water leaking from my showerhead when it is turned off?', a: 'This is almost always caused by a worn-out internal cartridge or rubber O-ring inside the shower valve behind the handle.' },
      { q: 'How do you fix a slow-draining bathtub?', a: 'Bathtubs usually clog due to a buildup of hair and soap scum. We use specialized drain snakes to pull the blockage out and clear the line completely.' }
    ]
  },

  // 16. Fruita Location Page
  {
    path: '/plumber-fruita',
    title: 'Plumber in Fruita CO | Plumbing Services in Fruita | L&M Maintenance',
    description: 'Looking for a reliable plumber in Fruita, CO? L&M Maintenance provides emergency plumbing repairs, water heater service, drain cleaning, and freeze protection.',
    canonical: '/plumber-fruita',
    h1: 'Plumbing Services in Fruita, CO',
    bodyHtml: `
      <p>Need a licensed, dependable plumber in Fruita, Colorado? At ${BUSINESS_NAME}, we deliver prompt, professional plumbing repairs and installations tailored specifically to Fruita homeowners and businesses. Whether you are living in a historic Victorian near downtown Fruita or a newer subdivision close to Kokopelli Trails and the Dinosaur Journey Museum, we understand the local plumbing infrastructure and provide long-lasting solutions.</p>
      
      <h2>Unique Plumbing Challenges in Fruita, CO</h2>
      <p>Fruita homes face distinct plumbing demands shaped by the Grand Valley’s arid climate, seasonal temperature extremes, and local water characteristics:</p>
      <ul>
        <li><strong>Hard Water Mineral Scaling:</strong> Water sourced across the Grand Valley contains significant calcium and magnesium. Over time, this mineral buildup coats water heater heating elements, clogs faucet aerators, and restricts flow in shower cartridges. We offer professional water heater flushing and descaling to protect your appliances.</li>
        <li><strong>Winter Freezing Vulnerabilities:</strong> Winter overnight temperatures in Fruita regularly dip into the single digits. Older crawl spaces, uninsulated perimeter pipes, and outdoor hose spigots without frost-proof sillcocks are prime burst-pipe hazards. We install frost-free bibbs and insulate vulnerable piping before freezes hit.</li>
        <li><strong>Dual Irrigation and Potable Water Systems:</strong> Many Fruita properties switch between domestic drinking water and seasonal canal irrigation. We install and inspect backflow prevention assemblies to keep your drinking water pure and safe.</li>
      </ul>

      <h2>Our Comprehensive Plumbing Services for Fruita</h2>
      <p>From minor nuisance leaks to full-scale plumbing emergencies, our experienced plumbers arrive fully equipped to resolve your problem on the spot.</p>
      <ul>
        <li><a href="/plumbing-repair-grand-junction"><strong>General Plumbing Repairs:</strong></a> Fast diagnostics for pipe leaks, low pressure, slab leaks, and valve malfunctions.</li>
        <li><a href="/drain-repair-grand-junction"><strong>Drain Cleaning & Unclogging:</strong></a> Motorized auger and snake services to clear kitchen sinks, showers, and main drain lines.</li>
        <li><a href="/water-heater-service-grand-junction"><strong>Water Heater Repair & Installation:</strong></a> Servicing standard gas, electric, and high-efficiency tankless water heaters.</li>
        <li><a href="/pipe-repair-grand-junction"><strong>Frozen & Burst Pipe Repairs:</strong></a> Rapid emergency response when freezing weather causes sudden pipe ruptures.</li>
        <li><a href="/faucet-repair-grand-junction"><strong>Faucet & Fixture Services:</strong></a> Upgrading old corroded faucets, shower valves, and outdoor sillcocks.</li>
      </ul>

      <h2>Why Fruita Homeowners Choose ${BUSINESS_NAME}</h2>
      <p>We pride ourselves on transparent communication, upfront flat pricing with no hidden surprises, and treating your home with utmost care. Our technicians live and work in Mesa County, ensuring rapid dispatch to Fruita without prolonged travel delays. Call us today at ${PHONE_DISPLAY} to schedule your service.</p>
    `,
    faqs: [
      { q: 'How quickly can you dispatch a plumber to Fruita, CO?', a: 'Because our technicians operate throughout Mesa County, we routinely provide same-day service and rapid emergency response to homes across Fruita, usually within 60 to 90 minutes of your call.' },
      { q: 'Why is hard water such a common problem for water heaters in Fruita?', a: 'Water in the Grand Valley carries heavy dissolved minerals that settle to the bottom of water heater tanks, causing rumbling sounds, reduced heating efficiency, and early tank failure. We recommend an annual flush and descaling to double your water heater lifespan.' },
      { q: 'How can I prevent outdoor pipes and spigots from freezing in Fruita?', a: 'Before the first hard freeze, disconnect all garden hoses, shut off interior valves to outdoor lines if equipped, and consider upgrading to modern frost-proof exterior sillcocks. If you have exposed pipes in a crawl space, our team can install durable heat tape and insulation.' },
      { q: 'Do you work on both historic Fruita homes and new construction?', a: 'Yes. We have specialized experience working with older galvanized and cast-iron lines found near downtown Fruita, as well as modern PEX and PVC systems in newer communities like Comstock and Kokopelli.' }
    ]
  },

  // 17. Palisade Location Page
  {
    path: '/plumber-palisade',
    title: 'Plumber in Palisade CO | Plumbing Services in Palisade | L&M Maintenance',
    description: 'Trusted plumbing service in Palisade, CO. We repair water heaters, fix burst pipes, regulate water pressure, and clear clogged drains across Palisade.',
    canonical: '/plumber-palisade',
    h1: 'Plumbing Services in Palisade, CO',
    bodyHtml: `
      <p>Looking for a dependable, skilled plumber in Palisade, Colorado? ${BUSINESS_NAME} proudly serves homeowners, vineyard estates, and agricultural properties throughout Palisade and the eastern Grand Valley. Located along the scenic Colorado River beneath Mount Garfield, Palisade homes have distinct plumbing systems that require experienced, careful hands.</p>
      
      <h2>Common Plumbing Issues in Palisade Homes & Orchards</h2>
      <p>Palisade’s geography and rich agricultural heritage create specific challenges for residential and farm plumbing systems:</p>
      <ul>
        <li><strong>High Water Pressure Spikes:</strong> Because Palisade sits directly at the mouth of De Beque Canyon where water supplies descend from higher elevations, water main pressures can surge over 100 PSI. Uncontrolled pressure damages washing machine hoses, blows out toilet fill valves, and ruins water heaters. We inspect, repair, and install certified Pressure Reducing Valves (PRVs).</li>
        <li><strong>Historic Piping & Tree Root Intrusion:</strong> Palisade’s historic farmsteads often contain older galvanized steel water pipes and clay sewer laterals. Deep roots from mature peach trees and cottonwoods frequently invade pipe joints, resulting in severe backups. We provide video camera sewer inspections and root clearing.</li>
        <li><strong>Agricultural & Yard Hydrant Plumbing:</strong> Many local properties have outbuildings, wine-tasting rooms, and frost-free yard hydrants connected to residential water supplies. We repair leaking underground hydrants, backflow preventers, and irrigation tie-ins.</li>
      </ul>

      <h2>Our Palisade Plumbing Repair Solutions</h2>
      <p>We provide full-service plumbing support across the 81526 zip code, including:</p>
      <ul>
        <li><a href="/water-heater-service-grand-junction"><strong>Water Heater Repair & Replacement:</strong></a> Fixing leaking tanks, faulty thermostats, and installing high-output tankless units.</li>
        <li><a href="/pipe-repair-grand-junction"><strong>Pipe Leak Repair & Whole-Home Repiping:</strong></a> Replacing corroded, rusted galvanized pipes with modern durable PEX.</li>
        <li><a href="/sewer-line-repair-grand-junction"><strong>Sewer Line Repair & Video Camera Inspection:</strong></a> Clearing root blockages and repairing broken sewer laterals.</li>
        <li><a href="/drain-repair-grand-junction"><strong>Drain Cleaning & Unclogging:</strong></a> Fast resolution for backed-up kitchen sinks, bathroom drains, and utility sinks.</li>
        <li><a href="/faucet-repair-grand-junction"><strong>Faucet & Valve Replacement:</strong></a> Replacing failing shutoff valves and repairing leaky indoor and outdoor fixtures.</li>
      </ul>

      <h2>Reliable Local Service Dedicated to Palisade</h2>
      <p>When you call ${BUSINESS_NAME}, you are partnering with technicians who respect your schedule and your property. We arrive with fully stocked trucks, diagnose the problem accurately, and provide honest, upfront pricing before turning a single wrench. Call ${PHONE_DISPLAY} for fast plumbing service in Palisade.</p>
    `,
    faqs: [
      { q: 'Why is my water pressure so high in Palisade, CO?', a: 'Palisade is fed by gravity-fed mountain lines descending through the canyon, which frequently generate excessive line pressure. If your water pressure exceeds 75–80 PSI, it puts severe stress on appliances and pipes. We install and calibrate pressure regulator valves (PRVs) to maintain a safe 55–65 PSI.' },
      { q: 'Can peach tree and cottonwood roots crack my sewer line?', a: 'Yes. Palisade’s mature trees seek out moisture and nutrients, penetrating small microscopic fractures in older clay or cast-iron sewer lines. Over time, roots expand and create massive blockages. We use sewer camera inspections to locate roots and hydro-jetting or augers to remove them.' },
      { q: 'Do you repair frost-free yard hydrants on Palisade agricultural properties?', a: 'Yes. We routinely service and replace leaking underground frost-free yard hydrants, repair shut-off plungers, and ensure proper drainage below the frost line so they do not freeze during winter.' },
      { q: 'How fast can a plumber arrive in Palisade for an emergency?', a: 'We are stationed right here in Mesa County and can reach most Palisade homes within an hour of your call for emergencies like burst pipes, flooded basements, or sewer backups.' }
    ]
  },

  // 18. Clifton Location Page
  {
    path: '/plumber-clifton',
    title: 'Plumber in Clifton CO | Plumbing Services in Clifton | L&M Maintenance',
    description: 'Need a top-rated plumber in Clifton, CO? We provide fast drain cleaning, sewer line repair, water heater replacement, and leak repairs across Clifton.',
    canonical: '/plumber-clifton',
    h1: 'Plumbing Services in Clifton, CO',
    bodyHtml: `
      <p>For homeowners and property managers in Clifton, Colorado, plumbing issues can quickly cause stress and property damage. At ${BUSINESS_NAME}, we offer fast-response plumbing repair, drain cleaning, and water heater services throughout the Clifton community. Whether you live near the I-70B corridor, along F Road, or in an established neighborhood near Clifton Sanitation District, our technicians have the experience and equipment to solve your plumbing problems promptly.</p>
      
      <h2>Typical Plumbing Demands in Clifton Homes</h2>
      <p>Clifton features a dense mix of mid-century ranch homes, modern subdivisions, and rental properties. Common plumbing concerns include:</p>
      <ul>
        <li><strong>Aging Sewer Lateral Backups:</strong> Many older homes in Clifton were built with cast-iron or clay sewer laterals that have deteriorated over decades. Shifts in the soil and tree root blockages frequently cause whole-house drain backups. We clear clogs fast and perform complete sewer line repairs.</li>
        <li><strong>Evaporative (Swamp) Cooler Water Line Leaks:</strong> Swamp coolers are extremely popular across Clifton during our hot, dry summers. Aging plastic or copper supply lines frequently crack, corrode, or freeze if not shut down properly in autumn, leading to ceiling water stains and attic leaks.</li>
        <li><strong>Frequent Water Heater Failures:</strong> High family water usage paired with Grand Valley hard water creates heavy sediment layers at the bottom of Clifton water heaters, leading to pilot light failures, burner element burnouts, and tank leaks.</li>
      </ul>

      <h2>Complete Plumbing Services for Clifton Residents</h2>
      <p>Our licensed and insured plumbing team handles all jobs, big and small, throughout Clifton:</p>
      <ul>
        <li><a href="/drain-repair-grand-junction"><strong>Clogged Drain Cleaning:</strong></a> Professional drain snaking for stubborn kitchen grease, hair clogs, and main line stoppages.</li>
        <li><a href="/water-heater-service-grand-junction"><strong>Water Heater Repair & Replacement:</strong></a> Rapid replacement of failed tanks and installation of energy-saving gas or electric models.</li>
        <li><a href="/toilet-repair-grand-junction"><strong>Toilet Repair & Installation:</strong></a> Fixing constantly running toilets, broken flappers, leaking wax seals, and stubborn clogs.</li>
        <li><a href="/pipe-repair-grand-junction"><strong>Emergency Pipe Repair:</strong></a> Locating hidden leaks in walls, ceilings, and under concrete slabs before water damage escalates.</li>
        <li><a href="/garbage-disposal-repair-grand-junction"><strong>Garbage Disposal Repair:</strong></a> Unjamming, repairing, or replacing dead kitchen garbage disposals.</li>
      </ul>

      <h2>Why Call ${BUSINESS_NAME} for Clifton Plumbing?</h2>
      <p>We believe in honest, straightforward service without upselling. Clifton homeowners appreciate our punctual arrival, clean work practices, transparent upfront pricing, and lasting craftsmanship. Call us at ${PHONE_DISPLAY} to book an experienced Clifton plumber today.</p>
    `,
    faqs: [
      { q: 'Why are all the drains in my Clifton home backing up at once?', a: 'When multiple fixtures (like showers and toilets) back up simultaneously, the issue is almost always a blockage in the main sewer lateral connecting your home to the Clifton Sanitation District line. Call us immediately so we can inspect and snake the main line before sewage spills into your home.' },
      { q: 'Can you service or replace water lines for swamp coolers in Clifton?', a: 'Yes. We install durable copper or braided stainless steel water feed lines, replace faulty shutoff valves, and perform winter shutoff services to keep your cooler lines from freezing and leaking.' },
      { q: 'How long does a water heater typically last in Clifton, CO?', a: 'Due to local hard water mineral content, traditional tank water heaters in Clifton generally last 8 to 12 years. Regular sediment flushing can extend this lifespan significantly.' }
    ]
  },

  // 19. Orchard Mesa Location Page
  {
    path: '/plumber-orchard-mesa',
    title: 'Plumber in Orchard Mesa CO | Plumbing Services in Orchard Mesa | L&M Maintenance',
    description: 'Professional plumbing service in Orchard Mesa, CO. Specializing in expansive soil pipe repairs, water heaters, sewer lines, and leak detection.',
    canonical: '/plumber-orchard-mesa',
    h1: 'Plumbing Services in Orchard Mesa, CO',
    bodyHtml: `
      <p>Are you experiencing plumbing trouble in Orchard Mesa, Colorado? From sudden pipe leaks and failing water heaters to stubborn sewer backups, ${BUSINESS_NAME} provides expert plumbing services to Orchard Mesa homeowners and businesses. Situated on the elevated plateau south of the Colorado River, Orchard Mesa properties have distinct soil and plumbing characteristics that require seasoned local professionals.</p>
      
      <h2>Plumbing Issues Caused by Orchard Mesa’s Expansive Soils</h2>
      <p>Orchard Mesa is well known for its unique geology, which directly impacts residential plumbing systems:</p>
      <ul>
        <li><strong>Expansive Bentonite Clay Soils:</strong> The ground on Orchard Mesa contains active clay soils that swell significantly when saturated and shrink drastically during dry spells. This ground movement creates tremendous shear pressure on underground water service lines and sewer pipes, leading to cracked main lines, slab leaks, and bellied sewer laterals.</li>
        <li><strong>Transitions Between Septic and District Sewer:</strong> While many homes are connected to the Orchard Mesa Sanitation District, several properties still utilize private septic systems or have had retrofitted connections that require specialized maintenance and venting inspections.</li>
        <li><strong>Elevated Terrain Water Pressure Changes:</strong> Water pressure can vary across different elevations of the mesa. Homes on lower slopes can experience excessive pressure, while higher neighborhoods may encounter pressure drop-offs during peak summer irrigation periods.</li>
      </ul>

      <h2>Our Comprehensive Orchard Mesa Plumbing Services</h2>
      <p>We provide full-spectrum residential plumbing across the 81503 area:</p>
      <ul>
        <li><a href="/pipe-repair-grand-junction"><strong>Underground Pipe & Slab Leak Repair:</strong></a> Advanced leak detection to locate subterranean pipe breaks without tearing up your entire yard or foundation.</li>
        <li><a href="/sewer-line-repair-grand-junction"><strong>Sewer Lateral Repair & Hydro-Jetting:</strong></a> Clearing dirt, gravel, and roots from shifting sewer laterals.</li>
        <li><a href="/water-heater-service-grand-junction"><strong>Water Heater Maintenance & Replacement:</strong></a> Servicing high-efficiency tank and tankless water heaters suited for mesa water conditions.</li>
        <li><a href="/drain-repair-grand-junction"><strong>Drain Cleaning & Unclogging:</strong></a> Restoring full flow to clogged bathtubs, kitchen sinks, and laundry lines.</li>
        <li><a href="/faucet-repair-grand-junction"><strong>Pressure Reducing Valve (PRV) Replacements:</strong></a> Installing reliable regulators to safeguard your indoor fixtures from sudden pressure spikes.</li>
      </ul>

      <h2>Local Knowledge You Can Count On</h2>
      <p>Because we work throughout Mesa County, we know Orchard Mesa’s terrain and plumbing codes inside and out. We treat your property with respect, provide honest explanations of what caused the failure, and deliver repairs built to withstand ground shifts and hard water. Call ${PHONE_DISPLAY} today.</p>
    `,
    faqs: [
      { q: 'How does Orchard Mesa’s clay soil affect my home’s plumbing pipes?', a: 'Bentonite clay expands when wet and contracts when dry, creating ground shifting that puts severe stress on buried PVC, ABS, and cast-iron lines. This often causes sheared pipe joints, sunken sewer sections (bellies), and slab leaks.' },
      { q: 'What are the signs of an underground water leak on Orchard Mesa?', a: 'Signs include unexplained spikes in your water bill, damp or spongy spots in your lawn during dry weather, warm areas on your floor (hot slab leak), and the continuous sound of running water when all taps are off.' },
      { q: 'Do you offer emergency plumbing repairs on Orchard Mesa?', a: 'Yes. We provide prompt emergency dispatch across Orchard Mesa for broken water mains, burst pipes, water heater leaks, and sewer backups.' }
    ]
  },

  // 20. Loma Location Page
  {
    path: '/plumber-loma',
    title: 'Plumber in Loma CO | Plumbing Services in Loma | L&M Maintenance',
    description: 'Expert rural and residential plumbing services in Loma, CO. We repair well pressure tanks, water heaters, burst pipes, and drains across Loma.',
    canonical: '/plumber-loma',
    h1: 'Plumbing Services in Loma, CO',
    bodyHtml: `
      <p>Looking for a trustworthy plumber in Loma, Colorado? Operating in rural Mesa County requires specialized expertise in both standard residential plumbing and rural property infrastructure. At ${BUSINESS_NAME}, we proudly serve homeowners, agricultural ranches, and equestrian properties throughout Loma and the surrounding Grand Valley farmland.</p>
      
      <h2>Unique Plumbing Challenges for Loma Properties</h2>
      <p>Loma properties frequently feature expansive acreage, outbuildings, and private water infrastructure that differ significantly from urban homes:</p>
      <ul>
        <li><strong>Private Well Systems & Pressure Tanks:</strong> Many Loma homes rely on domestic wells or long Ute Water service line runs. Failing pressure tank bladders, cycling well switches, and sediment filtration issues can cause dramatic water pressure drops or complete water outages.</li>
        <li><strong>Severe Hard Water & Mineral Buildup:</strong> Loma well water and canal-fed aquifers often carry elevated mineral content, dissolved iron, and high alkalinity. Without proper water filtration or water softeners, faucets corrode, water heater elements burn out quickly, and scale coats interior pipe walls.</li>
        <li><strong>Exposed Agricultural & Barn Piping:</strong> Barn lines, outdoor livestock watering stations, and unheated workshop plumbing are vulnerable to deep winter freezes. We install heavy-duty frost-free yard hydrants and heat-taped PEX lines built to withstand sub-zero Colorado nights.</li>
      </ul>

      <h2>Our Specialized Loma Plumbing Services</h2>
      <p>Whether you have a rural farmhouse or a modern country residence, we provide end-to-end plumbing support:</p>
      <ul>
        <li><a href="/plumbing-repair-grand-junction"><strong>Rural Plumbing & Pressure Tank Service:</strong></a> Diagnosing pressure switch failures, bladder tank replacements, and long-run line repairs.</li>
        <li><a href="/water-heater-service-grand-junction"><strong>Water Heater Repair & Installation:</strong></a> Heavy-duty tank and tankless water heaters installed with sediment filtration protection.</li>
        <li><a href="/pipe-repair-grand-junction"><strong>Frozen Pipe Thawing & Repair:</strong></a> Fast response for frozen barn, crawl space, and exterior water lines.</li>
        <li><a href="/drain-repair-grand-junction"><strong>Septic-Safe Drain Cleaning:</strong></a> Clearing clogs safely without using corrosive chemicals that damage septic tank bacterial balance.</li>
        <li><a href="/faucet-repair-grand-junction"><strong>Frost-Proof Yard Hydrants & Bibbs:</strong></a> Installing and repairing freeze-proof hydrants for pastures, gardens, and horse stalls.</li>
      </ul>

      <h2>Prompt, Professional Service for Rural Mesa County</h2>
      <p>We know that living outside city limits shouldn’t mean waiting days for an emergency plumbing repair. Our technicians are equipped to handle long rural driveways, well configurations, and heavy-duty fixtures. Call ${PHONE_DISPLAY} today for honest, dependable service in Loma.</p>
    `,
    faqs: [
      { q: 'Do you service well pressure tanks and water switches in Loma?', a: 'Yes. We diagnose and replace faulty well pressure tanks, water pressure switches, and sediment filters to ensure your home maintains constant, strong water pressure.' },
      { q: 'How do you clean drains in homes with private septic systems in Loma?', a: 'We use mechanical augers and professional snaking tools to physically clear blockages rather than pouring harsh chemical drain openers, which destroy the vital anaerobic bacteria inside your septic tank and leach field.' },
      { q: 'What should I do if my barn water line freezes in Loma?', a: 'Shut off the isolation valve to that line immediately to prevent flooding once the pipe thaws. Do not use open flame torches, which are a major fire hazard. Call our team at (970) 546-9838 for safe electronic pipe thawing and repair.' }
    ]
  },

  // 21. Mack Location Page
  {
    path: '/plumber-mack',
    title: 'Plumber in Mack CO | Plumbing Services in Mack | L&M Maintenance',
    description: 'Looking for a reliable plumber in Mack, CO? We provide water heater repair, emergency leak fixes, septic-friendly drain cleaning, and rural plumbing in Mack.',
    canonical: '/plumber-mack',
    h1: 'Plumbing Services in Mack, CO',
    bodyHtml: `
      <p>Mack, Colorado sits at the western edge of the Grand Valley, known for wide-open ranching country and proximity to Highline Lake State Park. When plumbing issues arise in Mack, you need a plumbing contractor who is willing to make the trip and has the specialized knowledge to handle rural and residential plumbing systems. At ${BUSINESS_NAME}, we are committed to serving Mack residents with prompt, top-tier plumbing services.</p>
      
      <h2>Plumbing Considerations for Mack, Colorado Properties</h2>
      <p>Homes in Mack face distinct conditions due to geography, climate, and water infrastructure:</p>
      <ul>
        <li><strong>High Alkali & Mineral Water Conditions:</strong> The western Grand Valley has naturally mineral-rich, alkali water that accelerates corrosion on copper pipes and rapidly destroys water heater anode rods. We install sacrificial anode rods and descaling systems to protect your water heaters and fixtures.</li>
        <li><strong>Long Water Line Runs:</strong> Properties in Mack often feature extended service lines connecting to rural water mains or well pumps. Minor ground settling or underground rock shifts can puncture older poly or PVC lines, causing undetected water loss.</li>
        <li><strong>Sub-Zero Winter Freeze Vulnerability:</strong> The open terrain in Mack exposes properties to high winter winds and freezing drafts. Crawl spaces, mobile home underbellies, and detached shop water lines require specialized winterization and high-grade insulation.</li>
      </ul>

      <h2>Our Professional Plumbing Services in Mack</h2>
      <p>From everyday faucet drips to urgent pipe leaks, we provide full plumbing coverage for Mack:</p>
      <ul>
        <li><a href="/water-heater-service-grand-junction"><strong>Water Heater Repair & Replacement:</strong></a> Flushing sediment, repairing heating elements, and replacing worn tanks with durable models.</li>
        <li><a href="/pipe-repair-grand-junction"><strong>Burst & Leaking Pipe Repair:</strong></a> Fast repair of frozen, ruptured, or corroded supply lines with PEX piping.</li>
        <li><a href="/drain-repair-grand-junction"><strong>Septic-Safe Drain Cleaning:</strong></a> Mechanical snaking that clears grease and hair clogs safely without disturbing your septic tank.</li>
        <li><a href="/toilet-repair-grand-junction"><strong>Toilet Repair & Replacement:</strong></a> Fixing leaking wax rings, constantly running tanks, and upgrading to efficient modern commodes.</li>
        <li><a href="/faucet-repair-grand-junction"><strong>Outdoor Spigot & Sillcock Upgrades:</strong></a> Replacing standard garden valves with frost-free models to prevent winter freeze-ups.</li>
      </ul>

      <h2>Trusted Plumber Serving Western Mesa County</h2>
      <p>Living near the Utah border shouldn’t leave you stranded when a plumbing emergency happens. At ${BUSINESS_NAME}, we treat Mack customers with the same speed and dedicated care as our neighbors in the heart of Grand Junction. Call ${PHONE_DISPLAY} to speak directly with our team.</p>
    `,
    faqs: [
      { q: 'Do you charge extra travel fees to service homes in Mack, CO?', a: 'No. Mack is an established part of our Mesa County service area. We offer upfront, transparent pricing without surprise trip fees.' },
      { q: 'Why do water heaters fail faster in Mack than in other areas?', a: 'High alkali content and hard minerals cause rapid corrosion and calcification inside tanks. Replacing the sacrificial anode rod every 2–3 years and performing an annual tank flush will dramatically increase your water heater’s operating life.' },
      { q: 'Can you help with low water pressure in Mack?', a: 'Yes. We test your pressure regulator, inspect supply lines for hidden underground leaks, and check well pressure tanks or booster systems to restore healthy water pressure.' }
    ]
  },

  // 22. Whitewater Location Page
  {
    path: '/plumber-whitewater',
    title: 'Plumber in Whitewater CO | Plumbing Services in Whitewater | L&M Maintenance',
    description: 'Expert plumbing repair services in Whitewater, CO. Fast help with water heaters, high water pressure, drain clogs, and frozen pipes across Whitewater.',
    canonical: '/plumber-whitewater',
    h1: 'Plumbing Services in Whitewater, CO',
    bodyHtml: `
      <p>Looking for a licensed, reputable plumber in Whitewater, Colorado? Located where Highway 50 and Highway 141 meet along the Gunnison River, Whitewater is home to riverside residences, canyon-edge properties, and rural homesteads. At ${BUSINESS_NAME}, we bring dependable residential plumbing, emergency repairs, and water heater services directly to Whitewater homes.</p>
      
      <h2>Plumbing Conditions Specific to Whitewater, CO</h2>
      <p>Whitewater’s elevation changes and canyon geography present specific plumbing conditions:</p>
      <ul>
        <li><strong>Severe Elevation Pressure Fluctuations:</strong> Due to steep gradient changes between the Grand Mesa foothills and the Gunnison River basin, incoming municipal and district water lines can experience intense pressure surges. Water pressure exceeding 85 PSI frequently bursts flex hoses and causes toilet fill valves to squeal. We install heavy-duty pressure reducing valves (PRVs).</li>
        <li><strong>River Basin Sediment & Mineral Scale:</strong> Water drawn near the river corridor often carries fine sediment and mineral hardness. We install whole-home spin-down sediment filters and service tankless water heaters to prevent premature heat exchanger failure.</li>
        <li><strong>Rural Septic & Drain Vent Maintenance:</strong> Older properties along Hwy 141 and rural county roads rely on septic systems that require clean, unobstructed plumbing vents to prevent sewer gas odors and gurgling drains.</li>
      </ul>

      <h2>Our Full Range of Plumbing Services in Whitewater</h2>
      <p>We provide comprehensive solutions to keep your water running cleanly and safely:</p>
      <ul>
        <li><a href="/water-heater-service-grand-junction"><strong>Water Heater Repair & Replacement:</strong></a> Fast diagnostics for pilot light outages, heating element failures, and complete replacements.</li>
        <li><a href="/pipe-repair-grand-junction"><strong>Pipe Leak Repair & PRV Installation:</strong></a> Calibrating water pressure regulators to protect your home from sudden surges.</li>
        <li><a href="/drain-repair-grand-junction"><strong>Drain Cleaning & Unclogging:</strong></a> Snaking clogged kitchen sinks, bathtubs, and main waste stacks.</li>
        <li><a href="/toilet-repair-grand-junction"><strong>Toilet & Fixture Repairs:</strong></a> Rebuilding leaky toilets, fixing vibrating pipes (water hammer), and installing modern low-flow commodes.</li>
        <li><a href="/faucet-repair-grand-junction"><strong>Frost-Proof Sillcock Installation:</strong></a> Ensuring your exterior hose connections will not freeze and burst in winter.</li>
      </ul>

      <h2>Fast Dispatch from Nearby Grand Junction</h2>
      <p>Because our dispatch center is situated right in Mesa County, our technicians reach Whitewater within minutes via Highway 50. You get honest pricing, prompt service, and skilled workmanship backed by our satisfaction guarantee. Call ${PHONE_DISPLAY} to schedule your plumbing appointment in Whitewater today.</p>
    `,
    faqs: [
      { q: 'How does high water pressure damage plumbing in Whitewater?', a: 'When incoming water pressure exceeds 80 PSI, it puts continuous stress on appliance solenoid valves, water heater tanks, and flexible braided lines under sinks, drastically increasing the risk of sudden catastrophic floods. We install high-performance Pressure Reducing Valves (PRVs) to keep pressure safely around 60 PSI.' },
      { q: 'How quickly can your plumbers reach Whitewater in an emergency?', a: 'Whitewater is just a quick 10-to-15-minute drive south of Grand Junction down US-50. We provide rapid emergency dispatch for burst pipes, severe water heater leaks, and drain backups.' },
      { q: 'Why do my pipes make a loud banging noise when I turn off the water?', a: 'This banging sound is known as "water hammer," caused by high water pressure or loose pipes when a valve shuts quickly. We install water hammer arrestors and regulate your incoming pressure to eliminate the knocking and protect your pipe joints.' }
    ]
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

  // Build JSON-LD Schema
  let pageSchema;
  if (route.schema) {
    pageSchema = route.schema;
  } else {
    const isLocationPage = route.path.startsWith('/plumber-');
    const cityName = isLocationPage 
      ? route.h1.replace('Plumbing Services in ', '').replace('Expert Plumber in ', '').replace(', CO', '').trim()
      : 'Grand Junction, CO';

    const graphItems = [
      {
        '@type': 'PlumbingService',
        name: route.h1,
        description: route.description,
        url: fullCanonicalUrl,
        telephone: PHONE,
        priceRange: '$$',
        areaServed: {
          '@type': 'City',
          name: cityName
        },
        provider: {
          '@type': 'LocalBusiness',
          name: BUSINESS_NAME,
          telephone: PHONE,
          url: DOMAIN
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${DOMAIN}/`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Service Areas',
            item: `${DOMAIN}/service-areas`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: route.h1,
            item: fullCanonicalUrl
          }
        ]
      }
    ];

    if (route.faqs && route.faqs.length > 0) {
      graphItems.push({
        '@type': 'FAQPage',
        mainEntity: route.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a.replace(/<[^>]*>/g, '')
          }
        }))
      });
    }

    pageSchema = {
      '@context': 'https://schema.org',
      '@graph': graphItems
    };
  }

  const schemaTag = `<script type="application/ld+json" id="page-schema">${JSON.stringify(pageSchema, null, 2)}</script>`;
  html = html.replace('</head>', `  ${schemaTag}\n  </head>`);

  // Build FAQ HTML markup if present
  let faqsMarkup = '';
  if (route.faqs && route.faqs.length > 0) {
    faqsMarkup = `
      <section style="margin: 40px 0; padding-top: 32px; border-top: 1px solid #e2e8f0;">
        <h2 style="font-size: 24px; font-weight: 700; color: #0f172a; margin-bottom: 20px;">Frequently Asked Questions</h2>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${route.faqs.map(f => `
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #1e293b; margin: 0 0 8px 0;">${f.q}</h3>
              <p style="margin: 0; color: #475569; font-size: 15px; line-height: 1.6;">${f.a}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  // Pre-render visible, rich semantic body content inside #root for search engines & audit tools
  const bodyMarkup = `
    <div id="root">
      <header style="background-color: #0f172a; color: #fff; padding: 16px 24px;">
        <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <a href="/" style="color: #fff; font-size: 20px; font-weight: 800; text-decoration: none;">${BUSINESS_NAME}</a>
          <nav style="display: flex; gap: 16px; font-size: 14px; flex-wrap: wrap;">
            <a href="/" style="color: #cbd5e1; text-decoration: none;">Home</a>
            <a href="/service-areas" style="color: #cbd5e1; text-decoration: none;">Service Areas</a>
            <a href="/about" style="color: #cbd5e1; text-decoration: none;">About</a>
            <a href="/reviews" style="color: #cbd5e1; text-decoration: none;">Reviews</a>
            <a href="/contact" style="color: #cbd5e1; text-decoration: none;">Contact</a>
            <a href="/sitemap" style="color: #60a5fa; text-decoration: none; font-weight: 600;">Sitemap</a>
          </nav>
          <a href="tel:${PHONE}" style="background-color: #2563eb; color: #fff; padding: 8px 16px; border-radius: 8px; font-weight: 700; text-decoration: none;">Call ${PHONE_DISPLAY}</a>
        </div>
      </header>
      
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px;">
        <!-- Breadcrumbs -->
        <nav style="font-size: 13px; color: #64748b; margin-bottom: 20px;">
          <a href="/" style="color: #2563eb; text-decoration: none;">Home</a> &gt; 
          <a href="/service-areas" style="color: #2563eb; text-decoration: none;">Service Areas</a> &gt; 
          <span>${route.h1}</span>
        </nav>

        <!-- Hero Header -->
        <header style="margin-bottom: 32px;">
          <h1 style="font-size: 32px; font-weight: 800; color: #0f172a; margin-bottom: 12px;">${route.h1}</h1>
          <p style="font-size: 18px; color: #475569; line-height: 1.6;">${route.description}</p>
        </header>

        <!-- Main Body -->
        <article style="font-size: 16px; color: #334155; line-height: 1.7; margin-bottom: 40px;">
          ${route.bodyHtml || ''}
        </article>

        <!-- Services Grid -->
        <section style="margin: 40px 0; padding-top: 32px; border-top: 1px solid #e2e8f0;">
          <h2 style="font-size: 24px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Plumbing Services in Mesa County</h2>
          <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; list-style: none; padding: 0; margin: 0;">
            ${MAIN_SERVICES_LIST.map(s => `
              <li><a href="/${s.slug}-grand-junction" style="color: #2563eb; text-decoration: none; font-weight: 600;">→ ${s.name}</a></li>
            `).join('')}
          </ul>
        </section>

        <!-- FAQs -->
        ${faqsMarkup}

        <!-- Nearby Areas Grid -->
        <section style="margin: 40px 0; padding-top: 32px; border-top: 1px solid #e2e8f0;">
          <h2 style="font-size: 24px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Nearby Communities We Serve</h2>
          <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; list-style: none; padding: 0; margin: 0;">
            ${SERVICE_AREAS_LIST.map(a => `
              <li><a href="${a.url}" style="color: #1e293b; text-decoration: none; font-weight: 600;">📍 ${a.name}, CO</a></li>
            `).join('')}
          </ul>
        </section>

        <!-- CTA Box -->
        <section style="background-color: #1d4ed8; color: #fff; padding: 36px 24px; border-radius: 16px; text-align: center; margin: 40px 0;">
          <h2 style="font-size: 26px; font-weight: 800; margin-bottom: 12px; color: #fff;">Need Emergency Plumbing Help in Mesa County?</h2>
          <p style="font-size: 16px; color: #dbeafe; margin-bottom: 24px;">Fast, honest, upfront pricing for homes and businesses across Grand Junction and surrounding communities.</p>
          <a href="tel:${PHONE}" style="display: inline-block; background-color: #fff; color: #1d4ed8; font-weight: 800; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-size: 18px;">CALL NOW: ${PHONE_DISPLAY}</a>
        </section>
      </main>

      <footer style="background-color: #0f172a; color: #94a3b8; padding: 40px 20px; font-size: 14px;">
        <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px;">
          <p style="color: #fff; font-weight: 700; font-size: 16px; margin: 0;">${BUSINESS_NAME}</p>
          <p style="margin: 0;">Serving Grand Junction, Fruita, Palisade, Clifton, Orchard Mesa, Loma, Mack, and Whitewater, Colorado.</p>
          <p style="margin: 0;">Direct Phone: <a href="tel:${PHONE}" style="color: #60a5fa;">${PHONE_DISPLAY}</a></p>
          <p style="margin: 0;"><a href="/sitemap" style="color: #60a5fa; text-decoration: underline;">HTML Sitemap</a> | <a href="/service-areas" style="color: #60a5fa; text-decoration: underline;">Service Areas</a> | <a href="/contact" style="color: #60a5fa; text-decoration: underline;">Contact</a></p>
          <p style="margin: 0;">&copy; ${new Date().getFullYear()} ${BUSINESS_NAME}. All rights reserved.</p>
        </div>
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

console.log(`\nSuccessfully pre-rendered ${generatedCount} static pages with visible semantic HTML for search crawlers & audit tools!`);

// Generate sitemap.xml
const SITEMAP_PATH = path.resolve(__dirname, '../public/sitemap.xml');
const currentDate = new Date().toISOString().split('T')[0];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const route of ROUTES) {
  let priority = "0.8";
  let changefreq = "weekly";
  if (route.path === '/') {
    priority = "1.0";
    changefreq = "daily";
  } else if (route.path.includes('grand-junction')) {
    priority = "0.9";
  }
  
  const fullCanonicalUrl = route.canonical === '/' ? `${DOMAIN}/` : `${DOMAIN}${route.canonical}`;

  sitemapXml += `  <url>
    <loc>${fullCanonicalUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
}

sitemapXml += `</urlset>\n`;

const DIST_SITEMAP_PATH = path.resolve(__dirname, '../dist/sitemap.xml');
fs.writeFileSync(SITEMAP_PATH, sitemapXml, 'utf-8');
fs.writeFileSync(DIST_SITEMAP_PATH, sitemapXml, 'utf-8');
console.log(`Successfully generated sitemap.xml with ${ROUTES.length} URLs!`);
