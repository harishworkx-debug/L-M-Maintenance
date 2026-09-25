import ServicePageLayout from '@/components/ServicePageLayout';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Home Maintenance in Grand Junction, CO',
  description: 'Connect with independent residential home maintenance providers in Grand Junction, CO.',
  areaServed: { '@type': 'City', name: 'Grand Junction, CO' },
  provider: { '@type': 'LocalBusiness', name: 'L&M Maintenance and Repair', telephone: '+19706653162' },
};

export default function HomeMaintenanceGJ() {
  return (
    <ServicePageLayout
      title="Home Maintenance Grand Junction CO | Residential Property Upkeep"
      metaDescription="Find residential home maintenance providers in Grand Junction, CO. Seasonal upkeep, inspections, and ongoing maintenance for your home. Call (970) 665-3162."
      canonical="/home-maintenance-grand-junction"
      h1="Home Maintenance in Grand Junction, CO"
      heroImage="https://images.pexels.com/photos/5691501/pexels-photo-5691501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt="Residential home maintenance and upkeep in Grand Junction Colorado"
      intro="Connect with available independent local providers for residential home maintenance throughout Grand Junction, CO. Our free service helps Mesa County homeowners find reliable local professionals for routine upkeep that keeps homes in excellent condition year-round."
      bodyContent={`
        <p>Regular home maintenance is one of the best investments a Grand Junction homeowner can make. Staying ahead of small issues — a cracked caulk line, a sticking door, a loose hinge — prevents them from becoming costly repairs. Grand Junction's climate creates specific maintenance needs through the seasons.</p>
        <p>In spring, homes need checks after winter — inspecting weatherstripping, checking exterior caulking, testing HVAC systems, and clearing gutters. Summer maintenance includes checking irrigation systems, inspecting for UV damage on exterior surfaces, and preparing cooling systems. Fall is the time to winterize outdoor water lines, service heating systems, and seal gaps before cold weather arrives.</p>
        <p>Our free connection service helps Grand Junction homeowners find available independent local maintenance providers for all seasons. Whether you want a one-time check or ongoing seasonal maintenance, local providers are ready to help with your residential property.</p>
      `}
      whatWeOffer={[
        'Spring and fall home inspection',
        'Seasonal weatherstripping and caulking',
        'Gutter cleaning and inspection',
        'Exterior wood and trim touch-up',
        'Door and window adjustment',
        'HVAC filter changes and checks',
        'Outdoor faucet and irrigation winterization',
        'Minor roof inspection after storms',
        'Interior and exterior caulk repair',
        'General handyman maintenance tasks',
      ]}
      sectionImage="https://images.pexels.com/photos/4981803/pexels-photo-4981803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      sectionImageAlt="Home maintenance professional working at Grand Junction Colorado residence"
      faqs={[
        { q: 'What seasonal home maintenance is important for Grand Junction homeowners?', a: 'Key seasonal tasks in Grand Junction include fall furnace checks and outdoor faucet winterization, spring inspection of caulking and weatherstripping, summer HVAC filter changes, and post-storm roof and exterior inspections. A local provider can customize a maintenance plan for your home.' },
        { q: 'How do I find a home maintenance provider in Grand Junction?', a: 'Call (970) 665-3162 to connect with available independent local home maintenance providers in Grand Junction. Our free service makes it easy to find reliable help for your residential property.' },
        { q: 'Can a local provider help with multiple maintenance tasks in one visit?', a: 'Yes. Many independent providers in Grand Junction handle multiple maintenance tasks during a single visit, making it efficient to address several items on your home maintenance list at once.' },
        { q: 'Does Grand Junction\'s climate require special home maintenance considerations?', a: 'Yes. The intense UV radiation, dry climate, temperature extremes, and occasional high winds common in Grand Junction mean exterior surfaces, caulking, weatherstripping, and HVAC systems need regular attention to maintain your home in good condition.' },
      ]}
      relatedServices={['residential-home-repair', 'hvac-repair', 'drywall-repair', 'carpentry-repair']}
      schema={schema}
    />
  );
}
