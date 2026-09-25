import ServicePageLayout from '@/components/ServicePageLayout';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Electrical Repair in Grand Junction, CO',
  description: 'Connect with independent residential electrical repair providers in Grand Junction, CO.',
  areaServed: { '@type': 'City', name: 'Grand Junction, CO' },
  provider: { '@type': 'LocalBusiness', name: 'L&M Maintenance and Repair', telephone: '+19706653162' },
};

export default function ElectricalRepairGJ() {
  return (
    <ServicePageLayout
      title="Electrical Repair Grand Junction CO | Residential Electrical Service"
      metaDescription="Find residential electrical repair providers in Grand Junction, CO. Outlets, switches, panels, and wiring repairs for your home. Call (970) 665-3162 to connect."
      canonical="/electrical-repair-grand-junction"
      h1="Electrical Repair in Grand Junction, CO"
      heroImage="https://images.pexels.com/photos/3615731/pexels-photo-3615731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt="Residential electrical repair and wiring in Grand Junction Colorado"
      intro="Connect with available independent local providers for residential electrical repair in Grand Junction, CO. From outlet replacements to panel troubleshooting, our free service helps Mesa County homeowners find qualified local electrical professionals."
      bodyContent={`
        <p>Electrical issues in a home should never be ignored. Faulty wiring, tripping breakers, flickering lights, and dead outlets are all signs that your home's electrical system needs attention from a qualified provider. Left unaddressed, electrical problems can pose safety risks to your family and home.</p>
        <p>Many Grand Junction homes — particularly those built before 1980 — may have older wiring systems that benefit from inspection and updates. Local independent electrical providers familiar with residential systems in the area can assess your home's electrical safety and address any issues found.</p>
        <p>Our free connection service helps Grand Junction homeowners reach available independent local electrical repair providers. All providers are independent contractors; we encourage homeowners to verify appropriate licensing before electrical work begins.</p>
      `}
      whatWeOffer={[
        'Outlet and switch repair and replacement',
        'Circuit breaker troubleshooting and replacement',
        'GFCI outlet installation and repair',
        'Electrical panel inspection',
        'Ceiling fan installation and repair',
        'Light fixture replacement',
        'Doorbell repair and installation',
        'Smoke and CO detector installation',
        'Wiring troubleshooting',
        'Electrical safety inspection',
      ]}
      sectionImage="https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      sectionImageAlt="Electrical panel and wiring repair for residential home in Grand Junction"
      faqs={[
        { q: 'What residential electrical repairs can I find providers for in Grand Junction?', a: 'Local independent providers connected through our service can help with a range of residential electrical repairs including outlets, switches, breakers, ceiling fans, light fixtures, GFCI installations, and general electrical troubleshooting for your home.' },
        { q: 'Is electrical repair in Grand Junction homes safe to delay?', a: 'No. Electrical issues like frequent breaker trips, burning smells, flickering lights, or sparking outlets should be addressed promptly. These symptoms can indicate wiring problems that pose fire or safety risks.' },
        { q: 'Do electrical providers in Grand Junction need to be licensed?', a: 'Yes. Electrical work in Colorado typically requires a licensed electrician. We strongly encourage all homeowners to verify that the provider they hire holds a valid Colorado electrical license and appropriate insurance.' },
        { q: 'Can I find a provider for older wiring in my Grand Junction home?', a: 'Yes. Many older Grand Junction homes have wiring systems that need updates or repairs. Local independent providers can inspect your home\'s electrical system and advise on what work is needed to keep your residence safe.' },
      ]}
      relatedServices={['lighting-repair', 'residential-home-repair', 'hvac-repair', 'home-maintenance']}
      schema={schema}
    />
  );
}
