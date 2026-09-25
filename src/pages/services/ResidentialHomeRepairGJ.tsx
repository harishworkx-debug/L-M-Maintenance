import ServicePageLayout from '@/components/ServicePageLayout';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Residential Home Repair in Grand Junction, CO',
      description: 'Connect with independent local residential home repair providers in Grand Junction, CO.',
      areaServed: { '@type': 'City', name: 'Grand Junction, CO' },
      provider: { '@type': 'LocalBusiness', name: 'L&M Maintenance and Repair', telephone: '+19706653162' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What types of home repairs can I find providers for in Grand Junction?', acceptedAnswer: { '@type': 'Answer', text: 'You can connect with local independent providers for a wide range of residential repairs including plumbing, electrical, drywall, carpentry, HVAC, and general handyman tasks.' } },
        { '@type': 'Question', name: 'Is this service free for Grand Junction homeowners?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, our provider connection service is completely free for homeowners in Grand Junction and the surrounding Mesa County area.' } },
      ],
    },
  ],
};

export default function ResidentialHomeRepairGJ() {
  return (
    <ServicePageLayout
      title="Residential Home Repair Grand Junction CO | L&M Maintenance and Repair"
      metaDescription="Find available independent residential home repair providers in Grand Junction, CO. Connect with local service professionals for all types of home repairs. Call (970) 665-3162."
      canonical="/residential-home-repair-grand-junction"
      h1="Residential Home Repair in Grand Junction, CO"
      heroImage="https://images.pexels.com/photos/17063686/pexels-photo-17063686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt="Home repair professional working in Grand Junction Colorado"
      intro="Connect with available independent local providers for residential home repairs throughout Grand Junction, CO and the greater Mesa County area. Our free service helps homeowners find qualified service professionals quickly and easily."
      bodyContent={`
        <p>Grand Junction homeowners deal with a unique set of home maintenance challenges driven by the region's high desert climate — intense summer heat, cold winters, and low humidity all take a toll on residential structures over time. Finding a reliable local provider quickly makes a real difference in protecting your home investment.</p>
        <p>Whether you own an older home near downtown Grand Junction, a mid-century residence in the Orchard Mesa area, or a newer home in the rapidly growing neighborhoods to the north and east of the city, our free connection service helps you reach available independent local residential repair professionals.</p>
        <p>Common residential repairs in the Grand Junction area include patching drywall, repairing or replacing doors and windows, fixing trim and millwork, addressing weather-related damage, and maintaining the structural integrity of your home's systems. Local providers connected through our service specialize exclusively in residential properties.</p>
      `}
      whatWeOffer={[
        'General home repairs and handyman services',
        'Drywall patching, texturing, and repair',
        'Door and window repair and adjustment',
        'Trim, molding, and millwork fixes',
        'Minor roof and exterior repairs',
        'Fence and gate repair',
        'Deck and patio maintenance',
        'Interior and exterior painting prep',
        'Weatherstripping and caulking',
        'Seasonal home maintenance checks',
      ]}
      sectionImage="https://images.pexels.com/photos/8293678/pexels-photo-8293678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      sectionImageAlt="Home inspector reviewing residential property in Grand Junction"
      faqs={[
        { q: 'What types of residential home repairs can I request in Grand Junction?', a: 'You can request help connecting with local independent providers for almost any residential repair — from general handyman tasks to specific repairs like drywall, carpentry, plumbing, electrical, HVAC, and more. Our service covers the full range of home maintenance needs.' },
        { q: 'Do providers serve areas outside of Grand Junction proper?', a: 'Yes. Our network of independent providers serves the broader Mesa County area including Fruita, Palisade, Clifton, Orchard Mesa, Loma, Mack, and Whitewater.' },
        { q: 'How do I know if a provider is qualified to work on my home?', a: 'We encourage all homeowners to verify that any hired contractor carries the appropriate license and insurance for the work being performed. Always ask for credentials before work begins.' },
        { q: 'Can I request multiple repair services at once?', a: 'Absolutely. Many independent providers in Grand Junction handle multiple types of residential repairs. When you call, describe everything you need and they can advise on whether one provider or multiple specialists are best suited.' },
      ]}
      relatedServices={['plumbing-repair', 'electrical-repair', 'drywall-repair', 'carpentry-repair', 'home-maintenance']}
      schema={schema}
    />
  );
}
