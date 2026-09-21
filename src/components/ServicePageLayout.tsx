import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ChevronRight, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import { PHONE, PHONE_DISPLAY, MAIN_SERVICES } from '@/lib/constants';

interface FAQ {
  q: string;
  a: string;
}

interface ServicePageLayoutProps {
  title: string;
  metaDescription: string;
  canonical: string;
  h1: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  whatWeOffer: string[];
  bodyContent: string;
  faqs: FAQ[];
  schema: object;
  relatedServices?: string[];
  sectionImage?: string;
  sectionImageAlt?: string;
}

export default function ServicePageLayout({
  title,
  metaDescription,
  canonical,
  h1,
  heroImage,
  heroImageAlt,
  intro,
  whatWeOffer,
  bodyContent,
  faqs,
  schema,
  relatedServices = [],
  sectionImage,
  sectionImageAlt,
}: ServicePageLayoutProps) {
  const related = MAIN_SERVICES.filter((s) => relatedServices.includes(s.slug));

  return (
    <>
      <SEO title={title} description={metaDescription} canonical={canonical} schema={schema} />

      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-end overflow-hidden">
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <nav className="flex items-center gap-2 text-blue-300 text-xs mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/service-areas" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{h1}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">{h1}</h1>
          <p className="text-blue-200 mt-2 flex items-center gap-1 text-sm">
            <MapPin className="w-4 h-4" /> Grand Junction, CO &amp; Mesa County
          </p>
        </div>
      </section>

      {/* Intro + CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-5">
              <p className="text-lg text-gray-700 leading-relaxed">{intro}</p>
              <div
                className="text-gray-600 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: bodyContent }}
              />
            </div>
            <aside>
              <div className="bg-blue-700 rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-bold text-xl mb-2">Schedule Service Today</h3>
                <p className="text-blue-100 text-sm mb-5">Our local plumbing experts in Grand Junction are ready to help you.</p>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-5 py-3.5 rounded-xl hover:bg-blue-50 transition-colors mb-4 text-center"
                >
                  <Phone className="w-5 h-5" />
                  CALL NOW
                </a>
                <p className="text-center text-blue-200 font-semibold text-lg">{PHONE_DISPLAY}</p>
                <p className="text-center text-blue-300 text-xs mt-2">Fast, professional, and reliable</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Common Residential Service Needs</h2>
              <ul className="space-y-3">
                {whatWeOffer.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            {sectionImage ? (
              <div className="rounded-2xl overflow-hidden shadow-lg h-80">
                <img src={sectionImage} alt={sectionImageAlt || ''} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden shadow-lg h-80 bg-blue-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <Phone className="w-16 h-16 text-blue-300 mx-auto mb-4" />
                  <p className="text-blue-600 font-semibold">Call to schedule service</p>
                  <p className="text-blue-700 font-bold text-xl mt-2">{PHONE_DISPLAY}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <CallCTA />

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-gray-900 hover:text-blue-700 transition-colors">
                  {q}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-3" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-14 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Residential Services in Grand Junction</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  to={`/${s.slug}-grand-junction`}
                  className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all flex items-center justify-between"
                >
                  <span className="font-medium text-gray-800 group-hover:text-blue-700 transition-colors">{s.name}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
