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
    '@graph': [
      {
        '@type': 'PlumbingService',
        name: seoData.h1,
        description: seoData.metaDescription,
        areaServed: { '@type': 'City', name: 'Grand Junction, CO' },
        provider: { '@type': 'LocalBusiness', name: BUSINESS_NAME, telephone: PHONE },
        telephone: PHONE,
        priceRange: '$$',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.gjrepairpros.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Service Areas',
            item: 'https://www.gjrepairpros.com/service-areas',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: seoData.h1,
            item: `https://www.gjrepairpros.com/${activeSlug}-grand-junction`,
          },
        ],
      },
      ...(seoData.faqs && seoData.faqs.length > 0 ? [{
        '@type': 'FAQPage',
        mainEntity: seoData.faqs.map((faq: { q: string, a: string }) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a.replace(/<[^>]*>/g, '')
          }
        }))
      }] : [])
    ]
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
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-blue-600 font-semibold text-xs uppercase tracking-wider block mb-2">Regional Coverage</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Providing {service.name} Throughout Mesa County
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We dispatch fully equipped plumbing trucks from Grand Junction to all surrounding communities. Select your neighborhood below for local service details:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {SERVICE_AREAS.filter(a => !a.main).map(area => (
              <Link
                key={area.slug}
                to={`/plumber-${area.slug}`}
                className="group bg-gray-50 hover:bg-blue-50/70 p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5 text-blue-700">
                    <MapPin className="w-4 h-4" />
                    <span className="font-bold text-gray-900 group-hover:text-blue-700 text-sm">
                      {area.name}, CO
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">
                    Fast {service.name.toLowerCase()} &amp; emergency dispatch in {area.name}.
                  </p>
                </div>
                <span className="text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                  Plumber in {area.name} →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center flex flex-wrap justify-center items-center gap-4 text-xs text-gray-600">
            <span>Need service in another Grand Valley location?</span>
            <Link to="/service-areas" className="text-blue-700 font-semibold hover:underline">
              View All Service Areas Directory →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
