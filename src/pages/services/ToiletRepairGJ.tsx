import ServicePageLayout from '@/components/ServicePageLayout';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Toilet Repair in Grand Junction, CO',
  description: 'Connect with independent residential toilet repair providers in Grand Junction, CO.',
  areaServed: { '@type': 'City', name: 'Grand Junction, CO' },
  provider: { '@type': 'LocalBusiness', name: 'L&M Maintenance and Repair', telephone: '+19705469838' },
};

export default function ToiletRepairGJ() {
  return (
    <ServicePageLayout
      title="Toilet Repair Grand Junction CO | Residential Toilet Service"
      metaDescription="Find toilet repair providers in Grand Junction, CO. Running toilets, leaks, and toilet replacement for residential homes. Free connection service. Call (970) 546-9838."
      canonical="/toilet-repair-grand-junction"
      h1="Toilet Repair in Grand Junction, CO"
      heroImage="https://images.pexels.com/photos/8141960/pexels-photo-8141960.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt="Residential bathroom and toilet repair in Grand Junction Colorado"
      intro="Connect with available independent local providers for residential toilet repair in Grand Junction, CO. Whether your toilet is running, leaking, rocking, or needs replacement, our free service helps Mesa County homeowners find local help fast."
      bodyContent={`
        <p>A running toilet can waste hundreds of gallons of water daily, significantly increasing water bills. In Grand Junction, where water conservation matters, a leaking or constantly-running toilet should be addressed promptly by a qualified local provider.</p>
        <p>Common toilet issues in Grand Junction residences include flapper deterioration from hard water minerals, fill valve problems, loose mounting bolts causing rocking, wax ring failure causing leaks at the floor, and cracked or damaged porcelain. Local independent providers can diagnose the exact issue and recommend the most effective repair approach for your home.</p>
        <p>Our free connection service helps Grand Junction homeowners quickly find available independent providers for residential toilet repairs of all types, from simple flapper replacements to complete toilet installation.</p>
      `}
      whatWeOffer={[
        'Running toilet diagnosis and repair',
        'Flapper replacement',
        'Fill valve repair and replacement',
        'Flush handle and chain repair',
        'Toilet base leak and wax ring repair',
        'Toilet seat replacement',
        'Rocking toilet stabilization',
        'Water supply line repair',
        'Toilet unclogging',
        'Toilet replacement and installation',
      ]}
      sectionImage="https://images.pexels.com/photos/6653889/pexels-photo-6653889.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      sectionImageAlt="Bathroom toilet repair and fixture service in Grand Junction"
      faqs={[
        { q: 'Why does my toilet keep running in my Grand Junction home?', a: 'A constantly running toilet is usually caused by a worn flapper, a faulty fill valve, or an improperly adjusted float. Grand Junction\'s hard water can accelerate the wear on these components. A local independent provider can identify and fix the exact cause.' },
        { q: 'Is water leaking around the base of my toilet a serious problem?', a: 'Yes. A leak at the toilet base typically indicates a failed wax ring seal, which should be repaired promptly to prevent water damage to the floor and subfloor. Call (970) 546-9838 to connect with a local provider.' },
        { q: 'How do I know if my toilet needs repair or replacement?', a: 'If your toilet has significant cracking, repeated mechanical failures, or is an older inefficient model, replacement may be more cost-effective. A local provider can assess your specific toilet and help you make the right decision.' },
        { q: 'Can a provider help with a toilet that won\'t flush properly?', a: 'Yes. Poor flushing is often due to a clog, an issue with the flapper, or low water in the tank. Local independent providers in Grand Junction can diagnose and fix flushing problems for residential toilets.' },
      ]}
      relatedServices={['plumbing-repair', 'faucet-repair', 'drain-repair', 'home-maintenance']}
      schema={schema}
    />
  );
}
