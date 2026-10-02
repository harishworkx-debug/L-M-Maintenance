import { useParams, Navigate, Link } from 'react-router-dom';
import ServicePageLayout from '@/components/ServicePageLayout';
import { MAIN_SERVICES, BUSINESS_NAME, PHONE, SERVICE_AREAS } from '@/lib/constants';
import { SERVICE_SEO_CONTENT } from '@/lib/seo-content';
import { MapPin } from 'lucide-react';

interface Props {
  serviceSlug?: string;
}

export default function ServicePageGJ({ serviceSlug }: Props) {
  const { slug } = useParams();
  
  // Use prop if available, otherwise fallback to URL param for backward compatibility
  const activeSlug = serviceSlug || slug;

  const service = MAIN_SERVICES.find((s) => s.slug === activeSlug);

  if (!service || !activeSlug) {
    return <Navigate to="/not-found" />;
  }

  const seoData = SERVICE_SEO_CONTENT[activeSlug] || {
    h1: `${service.name} in Grand Junction, CO`,
    metaDescription: `Expert ${service.name.toLowerCase()} services in Grand Junction, CO. Fast, reliable, and professional plumbing by ${BUSINESS_NAME}. Call (970) 546-9838.`,
    intro: `Looking for professional ${service.name.toLowerCase()} in Grand Junction? ${BUSINESS_NAME} provides expert plumbing solutions for your home or business.`,
    bodyContent: `<p>Dealing with plumbing issues can be stressful and disruptive. Our experienced team in Grand Junction is fully equipped to handle all aspects of ${service.name.toLowerCase()}.</p>`,
    faqs: [
      { q: `Do you provide ${service.name.toLowerCase()} for commercial properties?`, a: 'Yes, our team is equipped to handle both residential and commercial plumbing needs across Grand Junction.' },
    ]
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: seoData.h1,
    description: seoData.metaDescription,
    areaServed: { '@type': 'City', name: 'Grand Junction, CO' },
    provider: { '@type': 'LocalBusiness', name: BUSINESS_NAME, telephone: PHONE },
  };

  return (
    <>
      <ServicePageLayout
        serviceName={service.name}
        title={seoData.seoTitle || `${seoData.h1} | ${BUSINESS_NAME}`}
        metaDescription={seoData.metaDescription}
        canonical={`/${activeSlug}-grand-junction`}
        h1={seoData.h1}
        heroImage="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        heroImageAlt={`${service.name} in Grand Junction Colorado`}
        intro={seoData.intro}
        bodyContent={seoData.bodyContent}
        whatWeOffer={[
          'Comprehensive diagnostics and troubleshooting',
          'Fast and reliable repair services',
          'Professional installations and replacements',
          'Routine maintenance to prevent future issues',
          'Upfront, transparent pricing',
        ]}
        sectionImage="https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        sectionImageAlt={`Professional ${service.name} tools and blueprint`}
        faqs={seoData.faqs}
        relatedServices={MAIN_SERVICES.filter(s => s.slug !== activeSlug).slice(0, 4).map(s => s.slug)}
        schema={schema}
      />

      {/* Internal Linking to Location Pages */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Providing {service.name} Across Mesa County</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            In addition to Grand Junction, our expert plumbers are ready to assist you in the following nearby communities:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.filter(a => !a.main).map(area => (
              <Link
                key={area.slug}
                to={`/plumber-${area.slug}`}
                className="inline-flex items-center gap-2 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-medium px-4 py-2 rounded-full border border-gray-200 hover:border-blue-200 transition-colors text-sm"
              >
                <MapPin className="w-4 h-4 text-blue-500" />
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
