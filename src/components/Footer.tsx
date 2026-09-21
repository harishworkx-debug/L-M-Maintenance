import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import { PHONE, PHONE_DISPLAY, BUSINESS_NAME, MAIN_SERVICES, SERVICE_AREAS } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-sm">L&M Maintenance</span>
                <span className="block text-blue-400 text-xs">and Repair — Plumber</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              Your trusted local experts for all plumbing, drain cleaning, and water heater services in Grand Junction and Mesa County.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Our Services</h3>
            <ul className="space-y-2">
              {MAIN_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}-grand-junction`}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty Space for layout or Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/service-areas" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">All Service Areas</Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.filter((a) => !a.main).slice(0, 5).map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/plumber-${area.slug}`}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {area.name}, CO
                  </Link>
                </li>
              ))}
              <li>
                 <Link to="/service-areas" className="text-sm text-gray-400 hover:text-blue-400 transition-colors font-medium">View All Areas →</Link>
              </li>
            </ul>
            <div className="mt-4 flex items-start gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500" />
              <span>Grand Junction &amp; Surrounding Mesa County Areas</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 border-t border-gray-700 pt-6">
          <p>&copy; {year} {BUSINESS_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
