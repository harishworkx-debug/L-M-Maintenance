import { Link } from 'react-router-dom';
import { MapPin, ChevronRight, Phone, Clock, Shield, CheckCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import { PHONE, PHONE_DISPLAY, BUSINESS_NAME, SERVICE_AREAS, MAIN_SERVICES } from '@/lib/constants';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'PlumbingService',
  name: BUSINESS_NAME,
  description: 'Professional plumbing service coverage across Grand Junction and surrounding Mesa County communities.',
  url: 'https://www.gjrepairpros.com/service-areas',
  telephone: PHONE,
  areaServed: SERVICE_AREAS.map((a) => ({
    '@type': 'City',
    name: `${a.name}, CO`,
  })),
};

export default function ServiceAreasPage() {
  return (
    <>
      <SEO
        title={`Plumbing Service Areas Around Grand Junction CO | ${BUSINESS_NAME}`}
        description="Looking for a reliable plumber near Grand Junction? We serve Grand Junction, Fruita, Palisade, Clifton, Orchard Mesa, Loma, Mack, and Whitewater, CO. Call (970) 546-9838."
        canonical="/service-areas"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative h-60 sm:h-80 flex items-end overflow-hidden bg-blue-950">
        <img
          src="https://images.pexels.com/photos/11165837/pexels-photo-11165837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Aerial view of Grand Junction and the Grand Valley service area"
          width={940}
          height={650}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <nav className="flex items-center gap-2 text-blue-300 text-xs mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Service Areas</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Plumbing Service Areas Around Grand Junction, CO
          </h1>
          <p className="text-blue-200 mt-2 text-sm flex items-center gap-1">
            <MapPin className="w-4 h-4" /> Full Mesa County Residential &amp; Emergency Plumbing Coverage
          </p>
        </div>
      </section>

      {/* Dispatch & Coverage Info */}
      <section className="py-12 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
              <Clock className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Rapid Emergency Dispatch</h3>
                <p className="text-xs text-gray-600 mt-1">Average 30–60 min arrival across the Grand Junction metro; 60–90 min for outlying county areas.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
              <Shield className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-900 text-sm">No Travel Surcharges</h3>
                <p className="text-xs text-gray-600 mt-1">Transparent flat-rate pricing applied equally across all 8 Mesa County community zones.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
              <CheckCircle className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Mesa County Code Compliant</h3>
                <p className="text-xs text-gray-600 mt-1">All repairs and installations meet strict Grand Junction &amp; Colorado plumbing regulations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Local Plumbing Coverage Across the Grand Valley
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              At {BUSINESS_NAME}, we understand that when a water heater bursts or a main sewer backs up, you need a plumber who knows your neighborhood’s water pressure, soil conditions, and municipal regulations. We proudly dispatch certified technicians throughout Grand Junction and every major community across Mesa County.
            </p>
          </div>

          {/* Grand Junction Hub */}
          <div className="mb-14">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center text-white text-xs font-bold">★</span>
                Grand Junction — Central Dispatch Hub
              </h2>
              <Link to="/contact" className="text-blue-700 text-sm font-semibold hover:underline">
                Schedule Service in Grand Junction →
              </Link>
            </div>
            <div className="bg-blue-50/70 rounded-2xl p-6 sm:p-8 border border-blue-100 mb-6">
              <p className="text-gray-700 leading-relaxed mb-6">
                Grand Junction is our central headquarters and main service hub. We offer complete emergency plumbing, drain cleaning, water heater installations, and sewer camera diagnostics with same-day priority dispatch.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {MAIN_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}-grand-junction`}
                    className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all group"
                  >
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">{s.name}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* 7 Nearby Communities */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Nearby Service-Area Communities</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Each community in the Grand Valley has unique plumbing considerations—from high water pressure in Palisade and Whitewater to expansive clay soils in Orchard Mesa and rural well setups in Loma and Mack. Click any community below to view localized service guidance:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICE_AREAS.filter((a) => !a.main).map((area) => (
                <div key={area.slug} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-blue-700" />
                      <h3 className="font-bold text-gray-900 text-lg">{area.name}, CO</h3>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">
                      {area.slug === 'fruita' && 'Hard water descaling, crawl space winterization & irrigation backflow.'}
                      {area.slug === 'palisade' && 'Canyon water pressure regulation, yard hydrants & tree root removal.'}
                      {area.slug === 'clifton' && 'Clifton Sanitation District laterals & swamp cooler water line fixes.'}
                      {area.slug === 'orchard-mesa' && 'Expansive clay soil pipe repairs, slab leaks & sewer line replacement.'}
                      {area.slug === 'loma' && 'Well pump pressure tanks, water softeners & livestock freeze protection.'}
                      {area.slug === 'mack' && 'High alkali water conditioning, sacrificial anodes & septic-safe drain care.'}
                      {area.slug === 'whitewater' && 'Pressure surge PRV installation, sediment filtration & water hammer fixes.'}
                    </p>
                  </div>
                  <Link
                    to={`/plumber-${area.slug}`}
                    className="inline-flex items-center justify-between w-full bg-white hover:bg-blue-700 hover:text-white text-blue-700 text-sm font-bold px-4 py-2.5 rounded-xl border border-blue-200 transition-colors shadow-sm"
                  >
                    <span>View {area.name} Page</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Boundaries FAQ */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Service Coverage Boundaries &amp; Travel Policy</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-1 text-base">What are the exact boundaries of your service coverage?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We service all residential properties located within Mesa County across the Grand Valley corridor—from Palisade in the east to Mack and Loma in the west, and from the Redlands/Fruita in the north down to Whitewater in the south.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-1 text-base">Do you charge extra travel fees for outlying areas like Mack or Whitewater?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No. All 8 communities listed in our service areas receive standard upfront, flat-rate pricing without travel penalties or surprise mileage fees.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-1 text-base">How do I request emergency service outside Grand Junction city limits?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Call our direct line at (970) 546-9838. Our dispatch coordinator will give you an exact arrival window and dispatch the closest mobile service technician directly to your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallCTA />
    </>
  );
}
