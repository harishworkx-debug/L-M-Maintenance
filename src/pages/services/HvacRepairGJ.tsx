import ServicePageLayout from '@/components/ServicePageLayout';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'HVAC Repair in Grand Junction, CO',
  description: 'Connect with independent residential HVAC repair providers in Grand Junction, CO.',
  areaServed: { '@type': 'City', name: 'Grand Junction, CO' },
  provider: { '@type': 'LocalBusiness', name: 'L&M Maintenance and Repair', telephone: '+19706653162' },
};

export default function HvacRepairGJ() {
  return (
    <ServicePageLayout
      title="HVAC Repair Grand Junction CO | Residential Heating & Cooling Service"
      metaDescription="Find residential HVAC repair providers in Grand Junction, CO. Heating and cooling system repair and maintenance for your home. Free connection. Call (970) 665-3162."
      canonical="/hvac-repair-grand-junction"
      h1="HVAC Repair in Grand Junction, CO"
      heroImage="https://images.pexels.com/photos/36344878/pexels-photo-36344878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt="Residential HVAC and heating system repair in Grand Junction Colorado"
      intro="Connect with available independent local providers for residential HVAC repair and maintenance in Grand Junction, CO. In the Western Slope's climate — with hot summers and cold winters — a functioning heating and cooling system is essential for your home."
      bodyContent={`
        <p>Grand Junction experiences some of Colorado's most extreme temperature ranges, with summer highs often exceeding 100°F and winter temperatures regularly dropping below freezing. For homeowners in the area, a properly functioning HVAC system isn't a luxury — it's a necessity for comfortable, safe residential living throughout the year.</p>
        <p>Air conditioning systems work hard during Grand Junction's long, hot summers, while heating systems face the demands of cold winters. Both systems benefit from regular maintenance and prompt repairs when issues arise. Catching problems early with the help of a local independent provider can prevent full system failures during extreme weather.</p>
        <p>Our free connection service helps Grand Junction homeowners find available independent local HVAC repair providers for all residential heating and cooling needs. From furnace issues to air conditioning repairs, local providers familiar with the area's climate demands are available to help.</p>
      `}
      whatWeOffer={[
        'Air conditioner repair and maintenance',
        'Furnace repair and inspection',
        'Heat pump service and repair',
        'Thermostat repair and replacement',
        'Air filter replacement',
        'Ductwork inspection and repair',
        'Evaporative cooler service',
        'HVAC system cleaning',
        'Refrigerant checks (licensed providers)',
        'Seasonal HVAC tune-up',
      ]}
      sectionImage="https://images.pexels.com/photos/38353473/pexels-photo-38353473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      sectionImageAlt="Residential air conditioning and HVAC unit in Grand Junction"
      faqs={[
        { q: 'Why is my air conditioner not cooling my Grand Junction home?', a: 'Common causes include a clogged filter, low refrigerant, a dirty evaporator coil, or a malfunctioning compressor. In Grand Junction\'s intense summer heat, AC issues need prompt attention. Call (970) 665-3162 to connect with a local provider.' },
        { q: 'When should I service my furnace in Grand Junction before winter?', a: 'Fall is the ideal time for furnace inspection and service in Grand Junction, before temperatures drop significantly. An independent provider can check the heat exchanger, igniter, blower, and other components to ensure your furnace is ready for winter.' },
        { q: 'Are evaporative coolers common in Grand Junction homes?', a: 'Yes. Grand Junction\'s low humidity makes evaporative (swamp) coolers effective and popular in residential homes. Local providers can service, repair, and maintain evaporative cooling systems alongside traditional air conditioning.' },
        { q: 'Do I need a licensed HVAC technician in Grand Junction?', a: 'For work involving refrigerants, Colorado requires EPA 608 certification at minimum. Always verify that your provider holds the appropriate credentials for HVAC work before any service begins.' },
      ]}
      relatedServices={['electrical-repair', 'home-maintenance', 'residential-home-repair']}
      schema={schema}
    />
  );
}
