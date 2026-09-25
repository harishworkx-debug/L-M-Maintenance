import ServicePageLayout from '@/components/ServicePageLayout';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lighting Repair in Grand Junction, CO',
  description: 'Connect with independent residential lighting repair and installation providers in Grand Junction, CO.',
  areaServed: { '@type': 'City', name: 'Grand Junction, CO' },
  provider: { '@type': 'LocalBusiness', name: 'L&M Maintenance and Repair', telephone: '+19705469838' },
};

export default function LightingRepairGJ() {
  return (
    <ServicePageLayout
      title="Lighting Repair Grand Junction CO | Residential Light Fixture Service"
      metaDescription="Find residential lighting repair and installation providers in Grand Junction, CO. Interior and exterior light fixtures, ceiling fans, and more. Call (970) 546-9838."
      canonical="/lighting-repair-grand-junction"
      h1="Lighting Repair in Grand Junction, CO"
      heroImage="https://images.pexels.com/photos/5691503/pexels-photo-5691503.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt="Residential lighting repair and fixture installation in Grand Junction Colorado"
      intro="Find available independent local providers for residential lighting repair and installation in Grand Junction, CO. From flickering fixtures to exterior lighting, our free connection service helps Mesa County homeowners find qualified local help."
      bodyContent={`
        <p>Good lighting affects both the function and feel of your home. Flickering lights, non-functioning fixtures, or outdated lighting can make daily life more difficult and reduce the comfort of your home. Getting residential lighting issues addressed promptly by a local independent provider improves safety and quality of life.</p>
        <p>Grand Junction's bright, sunny climate means exterior lighting plays an important role in extending the usable hours of outdoor residential spaces during evening hours. Interior lighting repairs — from ceiling fixtures to under-cabinet lights — help maintain the look and function of your home's interior.</p>
        <p>Whether you need a single light fixture swapped out or have widespread lighting issues throughout your home, our free service connects you with available independent local residential lighting repair providers in Grand Junction and surrounding Mesa County communities.</p>
      `}
      whatWeOffer={[
        'Light fixture repair and replacement',
        'Ceiling fan installation and repair',
        'Recessed lighting repair',
        'Dimmer switch installation and repair',
        'Bathroom vanity light repair',
        'Exterior porch and security light repair',
        'Landscape and pathway lighting',
        'Motion-sensor light repair',
        'Light switch replacement',
        'Chandelier and pendant light repair',
      ]}
      sectionImage="https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      sectionImageAlt="Electrical outlet and lighting repair for residential home in Grand Junction"
      faqs={[
        { q: 'Why are the lights flickering in my Grand Junction home?', a: 'Flickering lights can indicate a loose bulb, a faulty fixture, a bad switch, or in more serious cases, a wiring issue. A local independent provider can troubleshoot and determine the exact cause for your specific situation.' },
        { q: 'Can I get exterior lighting repaired or installed in Grand Junction?', a: 'Yes. Local independent providers in Grand Junction can help with exterior porch lights, motion-sensor security lights, garage lights, and outdoor landscape lighting for residential properties.' },
        { q: 'Does ceiling fan installation require a licensed electrician in Grand Junction?', a: 'If your installation involves new wiring or changes to the electrical box, a licensed electrician is typically required. If it\'s a direct fixture swap, requirements may differ. Verify with your provider before work begins.' },
        { q: 'How do I connect with a lighting repair provider in Grand Junction?', a: 'Simply call (970) 546-9838 to connect with available independent lighting repair providers in Grand Junction through our free homeowner connection service.' },
      ]}
      relatedServices={['electrical-repair', 'residential-home-repair', 'home-maintenance']}
      schema={schema}
    />
  );
}
