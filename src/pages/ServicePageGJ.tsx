import { useParams, Navigate } from 'react-router-dom';
import ServicePageLayout from '@/components/ServicePageLayout';
import { MAIN_SERVICES, BUSINESS_NAME, PHONE } from '@/lib/constants';

export default function ServicePageGJ() {
  const { slug } = useParams();

  const service = MAIN_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/not-found" />;
  }

  const h1 = `${service.name} in Grand Junction, CO`;
  const metaDescription = `Expert ${service.name.toLowerCase()} services in Grand Junction, CO. Fast, reliable, and professional plumbing by ${BUSINESS_NAME}. Call (970) 665-3162.`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: h1,
    description: metaDescription,
    areaServed: { '@type': 'City', name: 'Grand Junction, CO' },
    provider: { '@type': 'LocalBusiness', name: BUSINESS_NAME, telephone: PHONE },
  };

  return (
    <ServicePageLayout
      title={`${service.name} Grand Junction CO | ${BUSINESS_NAME}`}
      metaDescription={metaDescription}
      canonical={`/${slug}-grand-junction`}
      h1={h1}
      heroImage="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      heroImageAlt={`${service.name} in Grand Junction Colorado`}
      intro={`Looking for professional ${service.name.toLowerCase()} in Grand Junction? ${BUSINESS_NAME} provides expert plumbing solutions for your home or business.`}
      bodyContent={`
        <p>Dealing with plumbing issues can be stressful and disruptive. Our experienced team in Grand Junction is fully equipped to handle all aspects of ${service.name.toLowerCase()}.</p>
        <p>We pride ourselves on delivering fast, effective, and long-lasting results. Our upfront pricing and commitment to customer satisfaction mean you can trust us to get the job done right the first time.</p>
        <p>Don't wait for minor issues to turn into costly damage. Contact your local Grand Junction plumbing experts today to schedule a service.</p>
      `}
      whatWeOffer={[
        'Comprehensive diagnostics and troubleshooting',
        'Fast and reliable repair services',
        'Professional installations and replacements',
        'Routine maintenance to prevent future issues',
        'Upfront, transparent pricing',
      ]}
      sectionImage="https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      sectionImageAlt={`Professional ${service.name} tools and blueprint`}
      faqs={[
        { q: `Do you provide ${service.name.toLowerCase()} for commercial properties?`, a: 'Yes, our team is equipped to handle both residential and commercial plumbing needs across Grand Junction.' },
        { q: 'How quickly can you respond to a service call?', a: 'We prioritize urgent issues and strive to dispatch a technician to your location as quickly as possible. Call us for immediate assistance.' },
        { q: 'Are your technicians licensed and insured?', a: 'Absolutely. All of our plumbing professionals are fully licensed, insured, and highly trained.' },
      ]}
      relatedServices={MAIN_SERVICES.filter(s => s.slug !== slug).slice(0, 4).map(s => s.slug)}
      schema={schema}
    />
  );
}
