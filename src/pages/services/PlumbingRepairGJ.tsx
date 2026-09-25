import ServicePageLayout from '@/components/ServicePageLayout';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Plumbing Repair in Grand Junction, CO',
      description: 'Connect with independent local residential plumbing repair providers in Grand Junction, CO.',
      areaServed: { '@type': 'City', name: 'Grand Junction, CO' },
      provider: { '@type': 'LocalBusiness', name: 'L&M Maintenance and Repair', telephone: '+19705469838' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Can I find emergency plumbing repair providers in Grand Junction?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, our free connection service can help you find available local independent plumbing repair providers in Grand Junction, including for urgent residential plumbing needs.' } },
      ],
    },
  ],
};

export default function PlumbingRepairGJ() {
  return (
    <ServicePageLayout
      title="Plumbing Repair Grand Junction CO | Residential Plumbing Service"
      metaDescription="Find available independent residential plumbing repair providers in Grand Junction, CO. Leaks, pipe issues, fixtures and more. Call (970) 546-9838 to connect."
      canonical="/plumbing-repair-grand-junction"
      h1="Plumbing Repair in Grand Junction, CO"
      heroImage="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt="Residential plumbing repair in Grand Junction Colorado"
      intro="Find available independent local providers for residential plumbing repairs in Grand Junction, CO. From leaking pipes to fixture replacements, our free service connects Mesa County homeowners with qualified plumbing professionals."
      bodyContent={`
        <p>Plumbing problems in Grand Junction homes can escalate quickly — a small drip can lead to water damage, mold, and costly structural issues if left unaddressed. The area's hard water and shifting soils also put extra stress on residential pipe systems over time.</p>
        <p>Our free connection service helps Grand Junction homeowners quickly find available independent local plumbing repair providers for all types of residential plumbing needs. Whether you have a dripping faucet, a pipe leak under your kitchen sink, a running toilet, or a more complex plumbing issue, local providers are ready to assist.</p>
        <p>Residential plumbing in Grand Junction's older neighborhoods often involves older supply lines and fixtures that benefit from regular inspection and timely repair. Getting connected with a qualified independent provider early can prevent minor issues from becoming major expenses.</p>
      `}
      whatWeOffer={[
        'Leaking pipe detection and repair',
        'Supply line replacement and repair',
        'Faucet and fixture repair',
        'Toilet repair and replacement',
        'Drain cleaning and unclogging',
        'Water heater plumbing connections',
        'Shut-off valve repair and replacement',
        'Under-sink plumbing repair',
        'Garbage disposal repair',
        'Outdoor spigot and hose bib repair',
      ]}
      sectionImage="https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      sectionImageAlt="Plumbing tools and blueprint for residential repair in Grand Junction"
      faqs={[
        { q: 'What residential plumbing repairs can local providers help with in Grand Junction?', a: 'Independent local providers connected through our service can assist with a full range of residential plumbing repairs including leaks, drain issues, toilet repairs, faucet and fixture work, water heater connections, and more.' },
        { q: 'How do I find a plumbing repair provider quickly in Grand Junction?', a: 'Simply call (970) 546-9838 to connect with available independent local plumbing providers in Grand Junction. Our free service makes it easy to find qualified help fast.' },
        { q: 'Are Grand Junction plumbing providers licensed?', a: 'We strongly recommend verifying that any plumbing provider you hire carries a current Colorado plumbing license and appropriate liability insurance before work begins.' },
        { q: 'Does Grand Junction\'s water quality affect home plumbing?', a: 'Yes. The Grand Junction area has moderately hard water, which can cause mineral buildup in pipes, faucets, and fixtures over time. Regular maintenance and timely repairs by local providers can help extend the life of your home plumbing system.' },
      ]}
      relatedServices={['drain-repair', 'faucet-repair', 'toilet-repair', 'water-heater-service']}
      schema={schema}
    />
  );
}
