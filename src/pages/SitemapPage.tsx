import { Link } from 'react-router-dom';
import { MapPin, Wrench, Building, ChevronRight, FileText, Phone, CheckCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import { PHONE, PHONE_DISPLAY, BUSINESS_NAME, SERVICE_AREAS, MAIN_SERVICES } from '@/lib/constants';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: `HTML Sitemap | ${BUSINESS_NAME}`,
      description: 'Complete website directory of all plumbing services, Mesa County service areas, and customer resources.',
      url: 'https://www.gjrepairpros.com/sitemap',
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
          name: 'Sitemap',
          item: 'https://www.gjrepairpros.com/sitemap',
        },
      ],
    },
  ],
};

export default function SitemapPage() {
  return (
    <>
      <SEO
        title={`HTML Sitemap | All Pages & Services | ${BUSINESS_NAME}`}
        description={`Complete site directory for ${BUSINESS_NAME}. Easily browse all residential plumbing services, Grand Junction service areas, customer reviews, and contact info.`}
        canonical="/sitemap"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-blue-950 py-16 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-blue-300 text-xs mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">HTML Sitemap</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Website Sitemap & Directory
          </h1>
          <p className="text-blue-200 text-base sm:text-lg max-w-2xl">
            Quickly navigate every page, service, and local service area covered by {BUSINESS_NAME} across Grand Junction and Mesa County, Colorado.
          </p>
        </div>
      </section>

      {/* Directory Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Primary Company Pages */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700">
                  <Building className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Company & Overview</h2>
              </div>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="text-gray-800 hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    Home Page
                  </Link>
                  <p className="text-xs text-gray-500 ml-6 mt-1">Main overview of our licensed Grand Junction plumbing services.</p>
                </li>
                <li>
                  <Link to="/about" className="text-gray-800 hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    About Us
                  </Link>
                  <p className="text-xs text-gray-500 ml-6 mt-1">Our story, local values, credentials, and company mission.</p>
                </li>
                <li>
                  <Link to="/service-areas" className="text-gray-800 hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    All Service Areas Hub
                  </Link>
                  <p className="text-xs text-gray-500 ml-6 mt-1">Full Mesa County coverage, response times, and travel policies.</p>
                </li>
                <li>
                  <Link to="/reviews" className="text-gray-800 hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    Customer Reviews
                  </Link>
                  <p className="text-xs text-gray-500 ml-6 mt-1">4.8-star verified Google customer testimonials and ratings.</p>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-800 hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    Contact &amp; Emergency Dispatch
                  </Link>
                  <p className="text-xs text-gray-500 ml-6 mt-1">Direct phone line, contact form, and service scheduling.</p>
                </li>
              </ul>
            </div>

            {/* Plumbing Services */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700">
                  <Wrench className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Grand Junction Plumbing Services (10 Services)</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {MAIN_SERVICES.map((s) => (
                  <div key={s.slug} className="bg-white p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-all">
                    <Link
                      to={`/${s.slug}-grand-junction`}
                      className="text-gray-900 hover:text-blue-700 font-bold flex items-center justify-between transition-colors mb-1 text-sm"
                    >
                      <span>{s.name}</span>
                      <ChevronRight className="w-4 h-4 text-blue-500" />
                    </Link>
                    <p className="text-xs text-gray-500 leading-relaxed">{s.short}</p>
                    <span className="text-[11px] text-blue-600 font-medium block mt-2">
                      gjrepairpros.com/{s.slug}-grand-junction
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Service Areas Section */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Mesa County Communities &amp; Location Pages</h2>
                <p className="text-xs text-gray-500">Dedicated local plumbing guides for each community across the Grand Valley.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full inline-block mb-2">Central Hub</span>
                <Link to="/plumbing-repair-grand-junction" className="text-gray-900 hover:text-blue-700 font-bold block text-sm">
                  Grand Junction, CO
                </Link>
                <p className="text-xs text-gray-500 mt-1">Complete residential plumbing and central emergency dispatch.</p>
                <span className="text-[11px] text-blue-600 block mt-2">gjrepairpros.com/</span>
              </div>

              {SERVICE_AREAS.filter(a => !a.main).map((area) => (
                <div key={area.slug} className="bg-white p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-all">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full inline-block mb-2">Mesa County</span>
                  <Link to={`/plumber-${area.slug}`} className="text-gray-900 hover:text-blue-700 font-bold block text-sm">
                    Plumber in {area.name}, CO
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">
                    {area.slug === 'fruita' && 'Hard water descaling, backflow & crawl space plumbing.'}
                    {area.slug === 'palisade' && 'Canyon water pressure PRVs & yard hydrant repairs.'}
                    {area.slug === 'clifton' && 'Sanitation district laterals & swamp cooler water lines.'}
                    {area.slug === 'orchard-mesa' && 'Expansive clay soil pipe fixes & slab leak detection.'}
                    {area.slug === 'loma' && 'Domestic well pressure tanks & rural water filtration.'}
                    {area.slug === 'mack' && 'Alkali water heater anode protection & drain care.'}
                    {area.slug === 'whitewater' && 'Pressure surge regulation & water hammer elimination.'}
                  </p>
                  <span className="text-[11px] text-blue-600 block mt-2">
                    gjrepairpros.com/plumber-{area.slug}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Crawl & Index Info */}
          <div className="mt-12 bg-blue-50/60 rounded-2xl p-6 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-blue-700 flex-shrink-0" />
              <span>
                Looking for our XML machine-readable sitemap? View <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold underline">sitemap.xml</a>.
              </span>
            </div>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-xs flex-shrink-0"
            >
              <Phone className="w-4 h-4" />
              Call {PHONE_DISPLAY}
            </a>
          </div>

        </div>
      </section>

      <CallCTA />
    </>
  );
}
