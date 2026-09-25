import { Link } from 'react-router-dom';
import { MapPin, ChevronRight, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import { PHONE, PHONE_DISPLAY, SERVICE_AREAS, MAIN_SERVICES } from '@/lib/constants';

export default function ServiceAreasPage() {
  return (
    <>
      <SEO
        title="Home Repair Service Areas | Grand Junction & Mesa County, CO"
        description="Residential home repair and maintenance service connection covering Grand Junction, Fruita, Palisade, Clifton, Orchard Mesa, and all of Mesa County, CO. Call (970) 546-9838."
        canonical="/service-areas"
      />

      <section className="relative h-56 sm:h-72 flex items-end overflow-hidden bg-blue-950">
        <img
          src="https://images.pexels.com/photos/11165837/pexels-photo-11165837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Grand Junction Colorado aerial view service area"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-blue-900/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <nav className="flex items-center gap-2 text-blue-300 text-xs mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Service Areas</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Service Areas</h1>
          <p className="text-blue-200 mt-2 text-sm flex items-center gap-1">
            <MapPin className="w-4 h-4" /> Grand Junction, CO &amp; Mesa County
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Residential Home Repair Coverage in Mesa County
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our free connection service helps homeowners throughout Grand Junction and the greater Mesa County area find available independent local residential service providers. Whether you're in the heart of Grand Junction or in one of the surrounding communities, local providers are available to assist with your home repair and maintenance needs.
            </p>
          </div>

          {/* Grand Junction Main */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center text-white text-xs font-bold">★</span>
              Grand Junction — Main Service Area
            </h2>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Grand Junction is our primary service area, with the largest selection of independent local residential providers available. Grand Junction homeowners have access to specialized service pages for all major repair categories.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {MAIN_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}-grand-junction`}
                    className="flex items-center justify-between bg-white rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all group"
                  >
                    <span className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors">{s.name}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Other Locations */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Surrounding Mesa County Service Areas</h2>
            <p className="text-gray-600 mb-6">
              In addition to Grand Junction, our service connects homeowners in these Mesa County communities with available independent residential service providers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICE_AREAS.filter((a) => !a.main).map((area) => (
                <div key={area.slug} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-gray-900">{area.name}, CO</h3>
                  </div>
                  <div className="space-y-2">
                    <Link
                      to={`/home-repair-${area.slug}`}
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-blue-700 transition-colors group"
                    >
                      <span>Home Repair</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                    </Link>
                    <Link
                      to={`/maintenance-repair-${area.slug}`}
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-blue-700 transition-colors group"
                    >
                      <span>Maintenance &amp; Repair</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallCTA />

      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Area Listed?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our network of independent providers covers the greater Mesa County area. If your community is not listed above, call us — there may be providers available to connect with in your area.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
