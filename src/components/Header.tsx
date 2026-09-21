import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { PHONE, PHONE_DISPLAY, BUSINESS_NAME, MAIN_SERVICES, SERVICE_AREAS } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block text-blue-900 font-bold text-sm sm:text-base leading-none">L&M Maintenance</span>
                <span className="block text-blue-600 text-xs font-medium">and Repair — Plumber</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-gray-700 hover:text-blue-700 font-medium text-sm transition-colors">Home</Link>

              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-700 font-medium text-sm transition-colors">
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2 grid grid-cols-1 gap-0.5">
                    {MAIN_SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/${s.slug}-grand-junction`}
                        className="px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Link to="/service-areas" className="flex items-center gap-1 text-gray-700 hover:text-blue-700 font-medium text-sm transition-colors">
                  Service Areas <ChevronDown className="w-4 h-4" />
                </Link>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2 grid grid-cols-1 gap-0.5">
                    {SERVICE_AREAS.filter(a => !a.main).map((a) => (
                      <Link
                        key={a.slug}
                        to={`/plumber-${a.slug}`}
                        className="px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        {a.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link to="/about" className="text-gray-700 hover:text-blue-700 font-medium text-sm transition-colors">About Us</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-700 font-medium text-sm transition-colors">Contact</Link>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-blue-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <Link to="/" className="block px-3 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors">Home</Link>

              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-1 space-y-0.5">
                    {MAIN_SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/${s.slug}-grand-junction`}
                        className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  onClick={() => setAreasOpen(!areasOpen)}
                >
                  Service Areas <ChevronDown className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
                </button>
                {areasOpen && (
                  <div className="ml-4 mt-1 space-y-0.5">
                    <Link
                      to="/service-areas"
                      className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors font-semibold"
                    >
                      All Areas
                    </Link>
                    {SERVICE_AREAS.filter(a => !a.main).map((a) => (
                      <Link
                        key={a.slug}
                        to={`/plumber-${a.slug}`}
                        className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        {a.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/about" className="block px-3 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors">About Us</Link>
              <Link to="/contact" className="block px-3 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors">Contact</Link>

              <div className="pt-2">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg w-full transition-colors hover:bg-blue-800"
                >
                  <Phone className="w-4 h-4" />
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
