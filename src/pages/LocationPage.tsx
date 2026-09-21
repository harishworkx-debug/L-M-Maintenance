import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import { PHONE, PHONE_DISPLAY, MAIN_SERVICES, SERVICE_AREAS, BUSINESS_NAME } from '@/lib/constants';

interface LocationPageProps {
  city: string;
  slug: string;
  county?: string;
  description?: string;
}

export default function LocationPage({
  city,
  slug,
  county = 'Mesa County',
  description,
}: LocationPageProps) {
  const canonical = `/plumber-${slug}`;
  const title = `Plumber in ${city} CO | ${BUSINESS_NAME}`;
  const metaDescription =
    description ||
    `Expert plumbing services in ${city}, CO. Call ${BUSINESS_NAME} at ${PHONE_DISPLAY} for fast, reliable plumbing, drain, and water heater repair.`;

  const h1 = `Expert Plumber in ${city}, CO`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'PlumbingService',
    name: h1,
    description: metaDescription,
    areaServed: { '@type': 'City', name: `${city}, CO` },
    provider: { '@type': 'LocalBusiness', name: BUSINESS_NAME, telephone: PHONE },
  };

  const nearby = SERVICE_AREAS.filter((a) => a.slug !== slug && !a.main).slice(0, 4);

  return (
    <>
      <SEO title={title} description={metaDescription} canonical={canonical} schema={schema} />

      {/* Hero */}
      <section className="relative h-64 sm:h-80 flex items-end overflow-hidden bg-blue-950">
        <img
          src="https://images.pexels.com/photos/15048771/pexels-photo-15048771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt={`Residential neighborhood in ${city}, Colorado`}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <nav className="flex items-center gap-2 text-blue-300 text-xs mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{city}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">{h1}</h1>
          <p className="text-blue-200 mt-2 flex items-center gap-1 text-sm">
            <MapPin className="w-4 h-4" /> {city}, {county}, Colorado
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Looking for a reliable plumber in {city}, CO? {BUSINESS_NAME} is your local expert for all plumbing, drain cleaning, and water heater repairs. We provide fast, professional service to ensure your home or business plumbing systems are running smoothly.
              </p>

              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  As a locally owned and operated business, we understand the unique plumbing needs of {city} residents. Whether you're dealing with a leaky faucet, a stubborn clog, or need a complete water heater replacement, our experienced technicians are ready to help.
                </p>
                <p>
                  Don't let plumbing issues disrupt your day. We pride ourselves on prompt arrivals, transparent pricing, and getting the job done right the first time.
                </p>
              </div>

              <h2 className="text-xl font-bold text-gray-900 pt-2">
                Our Plumbing Services in {city}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MAIN_SERVICES.map((s) => (
                  <li key={s.slug} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{s.name}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 mt-8">
                <h3 className="font-bold text-gray-900 mb-2">
                  Why Choose Us for Your {city} Home?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We are committed to providing top-tier plumbing services across {county}. Our team is fully equipped to handle everything from minor repairs to major installations, ensuring your home remains comfortable and safe. Call us today to schedule your service.
                </p>
              </div>
            </div>

            <aside>
              <div className="bg-blue-700 rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-bold text-xl mb-2">Need a Plumber in {city}?</h3>
                <p className="text-blue-100 text-sm mb-5">Call our local experts for fast, reliable service.</p>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-5 py-3.5 rounded-xl hover:bg-blue-50 transition-colors mb-4 text-center"
                >
                  <Phone className="w-5 h-5" />
                  CALL NOW
                </a>
                <p className="text-center text-blue-200 font-semibold text-lg">{PHONE_DISPLAY}</p>

                <div className="mt-6 pt-6 border-t border-blue-600">
                  <p className="text-blue-300 text-xs font-medium uppercase tracking-wider mb-3">Our Services</p>
                  <div className="space-y-1">
                    {MAIN_SERVICES.slice(0, 5).map((s) => (
                      <Link
                        key={s.slug}
                        to={`/${s.slug}-grand-junction`}
                        className="block text-sm text-blue-200 hover:text-white transition-colors py-0.5"
                      >
                        → {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CallCTA />

      {/* Nearby Areas */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nearby Service Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/plumbing-repair-grand-junction"
              className="group bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all"
            >
              <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
              <p className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors text-sm">Grand Junction</p>
              <p className="text-xs text-gray-500">Main Service Area</p>
            </Link>
            {nearby.map((area) => (
              <Link
                key={area.slug}
                to={`/plumber-${area.slug}`}
                className="group bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all"
              >
                <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors text-sm">{area.name}</p>
                <p className="text-xs text-gray-500">Mesa County, CO</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
