import ServicePageLayout from '@/components/ServicePageLayout';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Water Heater Service in Grand Junction, CO',
  description: 'Find independent residential water heater repair and service providers in Grand Junction, CO.',
  areaServed: { '@type': 'City', name: 'Grand Junction, CO' },
  provider: { '@type': 'LocalBusiness', name: 'L&M Maintenance and Repair', telephone: '+19706653162' },
};

export default function WaterHeaterServiceGJ() {
  return (
    <ServicePageLayout
      title="Water Heater Service Grand Junction CO | Repair & Replacement"
      metaDescription="Find available water heater repair and service providers in Grand Junction, CO. Residential water heater repair, maintenance, and replacement. Call (970) 665-3162."
      canonical="/water-heater-service-grand-junction"
      h1="Water Heater Service in Grand Junction, CO"
      heroImage="https://images.pexels.com/photos/34938439/pexels-photo-34938439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt="Water heater service and repair in Grand Junction Colorado"
      intro="Connect with available independent local providers for residential water heater service, repair, and replacement in Grand Junction, CO. Our free connection service helps Mesa County homeowners quickly find qualified help for water heater issues."
      bodyContent={`
        <p>A failing water heater affects daily life immediately — no hot water for showers, dishes, or laundry. In Grand Junction's climate, with cold winters and high hot water demands, a functioning water heater is essential to residential comfort.</p>
        <p>Grand Junction's moderately hard water can cause sediment buildup in traditional tank water heaters over time, reducing efficiency and potentially shortening the unit's lifespan. Regular flushing and maintenance by a local independent provider can help extend the life of your water heater.</p>
        <p>Whether your water heater is making noise, producing rusty water, not heating adequately, or showing visible signs of corrosion or leaking, finding an available local provider quickly helps prevent further damage to your home. Our free service connects Grand Junction homeowners with independent providers who specialize in residential water heater service.</p>
      `}
      whatWeOffer={[
        'Water heater inspection and diagnosis',
        'Sediment flushing and maintenance',
        'Thermostat adjustment and repair',
        'Heating element replacement',
        'Pilot light and igniter repair',
        'Pressure relief valve inspection',
        'Anode rod inspection and replacement',
        'Water heater unit replacement',
        'Tankless water heater service',
        'Water heater connections and supply line repair',
      ]}
      sectionImage="https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      sectionImageAlt="Water heater system maintenance in Grand Junction home"
      faqs={[
        { q: 'How do I know if my Grand Junction home water heater needs repair or replacement?', a: 'Signs that your water heater needs attention include inconsistent hot water, rusty or discolored water, unusual noises like rumbling or popping, water pooling around the base, or a unit that is more than 10-12 years old. A local independent provider can assess your specific situation.' },
        { q: 'Does Grand Junction\'s hard water affect water heaters?', a: 'Yes. The mineral content in Grand Junction\'s water supply can cause sediment buildup at the bottom of traditional tank water heaters, reducing heating efficiency and potentially causing damage. Annual flushing by a local provider is recommended.' },
        { q: 'Can I connect with a provider for a tankless water heater in Grand Junction?', a: 'Yes. Our service connects homeowners with independent providers who work with both traditional tank and tankless water heater systems in Grand Junction and throughout Mesa County.' },
        { q: 'How quickly can a local provider address my water heater issue?', a: 'Availability varies by provider and time of day. Call (970) 665-3162 to connect with available independent providers in Grand Junction who may be able to assist with your water heater needs.' },
      ]}
      relatedServices={['plumbing-repair', 'drain-repair', 'home-maintenance', 'faucet-repair']}
      schema={schema}
    />
  );
}
