import ServicePageLayout from '@/components/ServicePageLayout';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Carpentry Repair in Grand Junction, CO',
  description: 'Connect with independent residential carpentry repair providers in Grand Junction, CO.',
  areaServed: { '@type': 'City', name: 'Grand Junction, CO' },
  provider: { '@type': 'LocalBusiness', name: 'L&M Maintenance and Repair', telephone: '+19705469838' },
};

export default function CarpentryRepairGJ() {
  return (
    <ServicePageLayout
      title="Carpentry Repair Grand Junction CO | Door, Window & Wood Repairs"
      metaDescription="Find residential carpentry repair providers in Grand Junction, CO. Doors, windows, trim, decks, and wood repairs for your home. Free connection. Call (970) 546-9838."
      canonical="/carpentry-repair-grand-junction"
      h1="Carpentry Repair in Grand Junction, CO"
      heroImage="https://images.pexels.com/photos/5691518/pexels-photo-5691518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt="Residential carpentry and door repair in Grand Junction Colorado"
      intro="Connect with available independent local providers for residential carpentry repair throughout Grand Junction, CO. From sticking doors to deck repairs, our free service helps Mesa County homeowners find skilled local carpentry professionals."
      bodyContent={`
        <p>Wood components in Grand Junction homes take a beating from the region's intense UV exposure, dry climate, occasional high winds, and temperature extremes. Doors that stick or don't latch properly, window frames showing weathering, deteriorating deck boards, and worn trim are all common residential carpentry issues in the area.</p>
        <p>Local independent carpentry providers familiar with the Western Slope's climate can recommend the right materials and techniques to ensure repairs stand up to Grand Junction's conditions over time. Whether your home needs a simple door adjustment, a damaged window frame repaired, or deck boards replaced, skilled local providers are available through our free connection service.</p>
        <p>Regular carpentry maintenance — keeping wood sealed and painted, repairing minor damage before it spreads, and ensuring doors and windows open and close properly — protects your home's structural integrity and energy efficiency in Grand Junction's demanding climate.</p>
      `}
      whatWeOffer={[
        'Sticking door adjustment and repair',
        'Door frame and jamb repair',
        'Door hinge and hardware repair',
        'Window frame repair and adjustment',
        'Interior trim and molding repair',
        'Baseboard and casing repair',
        'Cabinet door and drawer repair',
        'Deck board repair and replacement',
        'Fence repair and replacement',
        'Wood rot identification and repair',
      ]}
      sectionImage="https://images.pexels.com/photos/9051071/pexels-photo-9051071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      sectionImageAlt="Door installation and carpentry repair at Grand Junction Colorado residence"
      faqs={[
        { q: 'Why do doors stick or fail to latch in Grand Junction homes?', a: 'Doors stick for several reasons including wood expansion and contraction from humidity changes, settling of the home\'s foundation, and worn or misaligned hinges. Grand Junction\'s dry climate can cause wood to shrink and shift seasonally. A local independent provider can adjust or repair the door to function properly.' },
        { q: 'How does Grand Junction\'s climate affect wood on homes?', a: 'The intense UV radiation, low humidity, and temperature extremes in Grand Junction cause wood to dry, crack, and fade faster than in more temperate climates. Regular sealing, painting, and prompt repair of any wood damage helps extend the life of wood components on your home.' },
        { q: 'Can a carpentry provider help with deck repair in Grand Junction?', a: 'Yes. Local independent carpentry providers can inspect, repair, and replace residential deck components including boards, railings, posts, and supports. Grand Junction\'s sun and wind can accelerate deck wear, making regular inspection important.' },
        { q: 'How do I find a carpentry repair provider in Grand Junction?', a: 'Call (970) 546-9838 to connect with available independent local carpentry repair providers in Grand Junction through our free homeowner connection service.' },
      ]}
      relatedServices={['drywall-repair', 'residential-home-repair', 'home-maintenance']}
      schema={schema}
    />
  );
}
