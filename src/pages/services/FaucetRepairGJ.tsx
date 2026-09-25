import ServicePageLayout from '@/components/ServicePageLayout';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Faucet Repair in Grand Junction, CO',
  description: 'Connect with independent residential faucet repair providers in Grand Junction, CO.',
  areaServed: { '@type': 'City', name: 'Grand Junction, CO' },
  provider: { '@type': 'LocalBusiness', name: 'L&M Maintenance and Repair', telephone: '+19705469838' },
};

export default function FaucetRepairGJ() {
  return (
    <ServicePageLayout
      title="Faucet Repair Grand Junction CO | Residential Fixture Service"
      metaDescription="Connect with residential faucet repair providers in Grand Junction, CO. Dripping faucets, fixture replacements, and more. Free connection service. Call (970) 546-9838."
      canonical="/faucet-repair-grand-junction"
      h1="Faucet Repair in Grand Junction, CO"
      heroImage="https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt="Faucet and fixture repair in Grand Junction Colorado home"
      intro="Find available independent local providers for residential faucet and fixture repair in Grand Junction, CO. From dripping kitchen faucets to bathroom fixture replacements, our free service connects Mesa County homeowners with qualified local providers."
      bodyContent={`
        <p>A dripping faucet might seem like a small issue, but even a slow drip can waste thousands of gallons of water per year and add significantly to your water bill. In the semi-arid environment of Grand Junction, water conservation is particularly important — getting a dripping faucet repaired promptly benefits both your home budget and the local community.</p>
        <p>Grand Junction's hard water can accelerate wear on faucet washers, o-rings, cartridges, and seats, causing drips and reduced water flow over time. Local independent providers familiar with residential fixtures in the area can diagnose the cause and recommend the most effective repair.</p>
        <p>Whether you have a dripping kitchen faucet, a leaking bathroom fixture, a loose spout, reduced water pressure, or a faucet that needs full replacement, our free connection service helps you reach available local providers in Grand Junction quickly.</p>
      `}
      whatWeOffer={[
        'Dripping faucet repair (kitchen and bathroom)',
        'Washer and o-ring replacement',
        'Cartridge and valve repair',
        'Faucet handle repair and replacement',
        'Spout and aerator cleaning and repair',
        'Under-sink supply line repair',
        'Outdoor hose bib and spigot repair',
        'Low water pressure diagnosis',
        'Faucet replacement and installation',
        'Two-handle and single-handle faucet repair',
      ]}
      sectionImage="https://images.pexels.com/photos/6653889/pexels-photo-6653889.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      sectionImageAlt="Bathroom faucet and fixture repair in Grand Junction home"
      faqs={[
        { q: 'Why is my faucet dripping even when fully closed?', a: 'A dripping faucet usually means worn internal components such as a washer, o-ring, or cartridge. Grand Junction\'s moderately hard water can accelerate this wear. A local independent provider can diagnose and repair the specific cause.' },
        { q: 'Is it worth repairing an older faucet or should I replace it?', a: 'It depends on the faucet\'s age and condition. Local independent providers connected through our service can inspect your fixture and advise whether repair or replacement is the more cost-effective option for your home.' },
        { q: 'Can I get my outdoor spigot repaired in Grand Junction before winter?', a: 'Yes. Outdoor hose bibs and frost-free spigots should be inspected and repaired before cold weather arrives in Grand Junction. Call (970) 546-9838 to connect with local providers who can address outdoor water fixtures.' },
        { q: 'Does low water pressure mean I need a faucet repair?', a: 'Low pressure from a single faucet is often a clogged aerator or cartridge issue. Low pressure throughout the home may indicate a different supply problem. A local provider can diagnose the root cause for your specific situation.' },
      ]}
      relatedServices={['plumbing-repair', 'toilet-repair', 'drain-repair', 'water-heater-service']}
      schema={schema}
    />
  );
}
