import ServicePageLayout from '@/components/ServicePageLayout';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Drywall Repair in Grand Junction, CO',
  description: 'Connect with independent residential drywall repair providers in Grand Junction, CO.',
  areaServed: { '@type': 'City', name: 'Grand Junction, CO' },
  provider: { '@type': 'LocalBusiness', name: 'L&M Maintenance and Repair', telephone: '+19706653162' },
};

export default function DrywallRepairGJ() {
  return (
    <ServicePageLayout
      title="Drywall Repair Grand Junction CO | Residential Wall & Ceiling Repair"
      metaDescription="Find residential drywall repair providers in Grand Junction, CO. Holes, cracks, water damage, and texture matching for your home. Call (970) 665-3162 to connect."
      canonical="/drywall-repair-grand-junction"
      h1="Drywall Repair in Grand Junction, CO"
      heroImage="https://images.pexels.com/photos/3616762/pexels-photo-3616762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt="Residential drywall repair and patching in Grand Junction Colorado"
      intro="Find available independent local providers for residential drywall repair in Grand Junction, CO. From small nail holes to large damaged sections and texture matching, our free service connects Mesa County homeowners with skilled local drywall repair professionals."
      bodyContent={`
        <p>Drywall damage happens in every home — from doorknobs leaving holes in walls, to water damage from plumbing issues, to cracks that develop as homes settle over time. In Grand Junction, where soil shifting from the clay-heavy valley floor is common, wall cracks can appear even in relatively newer homes.</p>
        <p>Getting drywall repaired by a skilled local independent provider restores the appearance of your home and addresses any underlying issues that contributed to the damage. Proper texture matching — whether your home has smooth walls, orange peel, knockdown, or popcorn ceiling texture — is critical to achieving repairs that blend seamlessly with existing surfaces.</p>
        <p>Our free connection service helps Grand Junction homeowners find available independent local drywall repair providers for all types of residential wall and ceiling damage, from cosmetic repairs to more extensive water-damaged section replacements.</p>
      `}
      whatWeOffer={[
        'Small hole and nail pop repair',
        'Large hole patching and replacement',
        'Crack repair and stress fracture filling',
        'Water-damaged drywall replacement',
        'Ceiling repair and patching',
        'Texture matching (orange peel, knockdown, smooth)',
        'Popcorn ceiling repair',
        'Corner bead repair',
        'Drywall taping, mudding, and finishing',
        'Paint-ready surface preparation',
      ]}
      sectionImage="https://images.pexels.com/photos/36035072/pexels-photo-36035072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      sectionImageAlt="Interior renovation and drywall repair in Grand Junction Colorado home"
      faqs={[
        { q: 'Can a Grand Junction provider match my existing wall texture?', a: 'Yes. Skilled local independent drywall providers can match common residential textures including orange peel, knockdown, smooth finish, and popcorn ceilings, making repairs nearly invisible once painted.' },
        { q: 'What causes cracks in drywall in Grand Junction homes?', a: 'Cracks in Grand Junction homes often result from seasonal soil movement and settling, temperature and humidity fluctuations, and normal structural settling over time. A local provider can assess whether the crack is cosmetic or indicates a more significant structural concern.' },
        { q: 'How do I connect with a drywall repair provider in Grand Junction?', a: 'Call (970) 665-3162 to connect with available independent residential drywall repair providers in Grand Junction through our free connection service.' },
        { q: 'Does drywall repair include painting?', a: 'This varies by provider. Some independent providers offer painting as part of the repair process; others provide repairs to a paint-ready surface. Ask the provider when you connect what\'s included in their service.' },
      ]}
      relatedServices={['carpentry-repair', 'residential-home-repair', 'home-maintenance', 'plumbing-repair']}
      schema={schema}
    />
  );
}
