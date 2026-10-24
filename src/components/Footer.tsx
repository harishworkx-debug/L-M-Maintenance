import { Link } from 'react-router-dom';
import { Phone, MapPin, ChevronRight, ShieldCheck, Clock } from 'lucide-react';
import { PHONE, PHONE_DISPLAY, BUSINESS_NAME, MAIN_SERVICES, SERVICE_AREAS } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 inline-flex">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-sm">L&M Maintenance</span>
                <span className="block text-blue-400 text-xs">and Repair — Plumber</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              Your trusted local licensed plumbing contractor for leak repairs, drain cleaning, water heaters, and pipe services across Grand Junction and Mesa County, CO.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
            <div className="mt-4 flex flex-col gap-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Licensed, Insured &amp; Mesa County Code Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Emergency Same-Day Dispatch Available</span>
              </div>
            </div>
          </div>

          {/* Plumbing Services (All 10 Linked) */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Plumbing Services
            </h3>
            <ul className="space-y-2">
              {MAIN_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}-grand-junction`}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-blue-500 flex-shrink-0" />
                    <span>{s.name} Grand Junction</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-blue-500 flex-shrink-0" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-blue-500 flex-shrink-0" />
                  Service Areas Directory
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-blue-500 flex-shrink-0" />
                  About Our Company
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-blue-500 flex-shrink-0" />
                  Customer Reviews (4.8★)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-blue-500 flex-shrink-0" />
                  Contact &amp; Emergency Request
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-sm text-blue-400 hover:text-blue-300 font-semibold transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-blue-400 flex-shrink-0" />
                  HTML Sitemap (All Pages)
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas (All 8 Linked) */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Mesa County Service Areas
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/plumbing-repair-grand-junction"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors font-medium flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-blue-500 flex-shrink-0" />
                  Grand Junction, CO (Main Hub)
                </Link>
              </li>
              {SERVICE_AREAS.filter((a) => !a.main).map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/plumber-${area.slug}`}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-blue-500 flex-shrink-0" />
                    Plumber in {area.name}, CO
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/service-areas" className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-semibold flex items-center gap-1.5 mt-2">
                  <ChevronRight className="w-3 h-3 text-blue-400 flex-shrink-0" />
                  View All Coverage Details →
                </Link>
              </li>
            </ul>
            <div className="mt-5 flex items-start gap-2 text-xs text-gray-400">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500" />
              <span>Proudly serving all of Mesa County and the Grand Valley.</span>
            </div>
          </div>
        </div>

        {/* SEO Cross-Linking Contextual Text */}
        <div className="border-t border-gray-800 pt-8 pb-6 text-xs text-gray-400 leading-relaxed">
          <p className="mb-3 font-semibold text-gray-300">
            Local Mesa County Plumbing Network:
          </p>
          <p>
            Looking for a dependable plumber near you? {BUSINESS_NAME} provides fast-response <Link to="/plumbing-repair-grand-junction" className="text-gray-300 hover:text-blue-400 underline">plumbing repair</Link>, <Link to="/drain-repair-grand-junction" className="text-gray-300 hover:text-blue-400 underline">drain cleaning</Link>, <Link to="/water-heater-service-grand-junction" className="text-gray-300 hover:text-blue-400 underline">water heater repair &amp; replacement</Link>, <Link to="/pipe-repair-grand-junction" className="text-gray-300 hover:text-blue-400 underline">pipe leak repair</Link>, and <Link to="/sewer-line-repair-grand-junction" className="text-gray-300 hover:text-blue-400 underline">sewer line repair</Link>. We proudly dispatch certified technicians across <Link to="/" className="text-gray-300 hover:text-blue-400 underline">Grand Junction</Link>, <Link to="/plumber-fruita" className="text-gray-300 hover:text-blue-400 underline">Fruita</Link>, <Link to="/plumber-palisade" className="text-gray-300 hover:text-blue-400 underline">Palisade</Link>, <Link to="/plumber-clifton" className="text-gray-300 hover:text-blue-400 underline">Clifton</Link>, <Link to="/plumber-orchard-mesa" className="text-gray-300 hover:text-blue-400 underline">Orchard Mesa</Link>, <Link to="/plumber-loma" className="text-gray-300 hover:text-blue-400 underline">Loma</Link>, <Link to="/plumber-mack" className="text-gray-300 hover:text-blue-400 underline">Mack</Link>, and <Link to="/plumber-whitewater" className="text-gray-300 hover:text-blue-400 underline">Whitewater, CO</Link>. For a complete index of all pages, visit our <Link to="/sitemap" className="text-blue-400 hover:text-blue-300 underline font-medium">HTML Sitemap</Link>.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 border-t border-gray-800 pt-6">
          <p>&copy; {year} {BUSINESS_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/sitemap" className="hover:text-gray-300 transition-colors">Sitemap</Link>
            <Link to="/service-areas" className="hover:text-gray-300 transition-colors">Service Areas</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
