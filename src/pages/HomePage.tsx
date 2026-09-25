import { Link } from 'react-router-dom';
import {
  Phone, MapPin, CheckCircle, Shield, Clock, Home,
  Droplets, Waves, Flame, Droplet, Wrench, ChevronRight, ArrowRight, Star, AlertTriangle
} from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import {
  PHONE, PHONE_DISPLAY, BUSINESS_NAME, SERVICE_AREAS, MAIN_SERVICES
} from '@/lib/constants';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Droplets, Waves, Flame, Droplet, Wrench
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'PlumbingService',
  name: BUSINESS_NAME,
  description: 'Expert residential and commercial plumbing services in Grand Junction, CO.',
  telephone: PHONE,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Grand Junction',
    addressRegion: 'CO',
    addressCountry: 'US',
  },
  url: 'https://www.gjrepairpros.com',
  areaServed: SERVICE_AREAS.map((a) => ({ '@type': 'City', name: `${a.name}, CO` })),
  serviceType: 'Plumbing and Drain Service',
};

const FAQS = [
  {
    q: 'What types of plumbing services do you offer?',
    a: 'We handle a wide range of plumbing needs including leak repairs, drain cleaning, water heater installation and maintenance, faucet repair, and toilet repair for both residential and commercial properties.',
  },
  {
    q: 'Do you serve areas outside Grand Junction?',
    a: 'Yes, we provide expert plumbing services throughout the greater Mesa County area, including Fruita, Palisade, Clifton, Orchard Mesa, Loma, Mack, and Whitewater.',
  },
  {
    q: 'How quickly can you respond to a plumbing emergency?',
    a: 'We prioritize urgent plumbing issues like burst pipes or severe leaks. Call our main line, and we will dispatch a technician to your location as quickly as possible.',
  },
  {
    q: 'Are your plumbers licensed and insured?',
    a: 'Absolutely. Our team is fully licensed, insured, and highly trained to ensure all plumbing work meets local codes and the highest quality standards.',
  },
  {
    q: 'Do you offer upfront pricing?',
    a: 'Yes, we believe in transparent pricing. We evaluate the issue and provide a clear estimate before any work begins, so there are no surprises.',
  },
];

export default function HomePage() {
  return (
    <>
      <SEO
        title={`Plumber in Grand Junction, CO | ${BUSINESS_NAME}`}
        description={`Expert plumbing services in Grand Junction by ${BUSINESS_NAME}. Leaks, drains, water heaters & more. Call (970) 546-9838.`}
        canonical="/"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-blue-950">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/12777517/pexels-photo-12777517.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Grand Junction Colorado mountain landscape"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-700/30 border border-blue-500/40 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              Serving Grand Junction &amp; Mesa County, CO
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Grand Junction's<br />
              <span className="text-blue-400">Trusted Plumbing</span><br />
              Professionals
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              From leaky faucets to full water heater replacements, {BUSINESS_NAME} delivers fast, reliable, and expert plumbing services for your home or business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                CALL NOW — {PHONE_DISPLAY}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 rounded-xl border border-white/20 transition-all"
              >
                Request Service
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-blue-200">
              {['Licensed & Insured', 'Upfront Pricing', 'Local Experts', 'Fast Response'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: 'Licensed & Insured', sub: 'Guaranteed quality' },
              { icon: Clock, label: 'Fast Response', sub: 'Ready when you need us' },
              { icon: MapPin, label: 'Local Experts', sub: 'Serving Mesa County' },
              { icon: Droplets, label: 'Full Service', sub: 'Plumbing & drains' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm leading-tight">{label}</p>
                  <p className="text-gray-500 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              The {BUSINESS_NAME} Difference
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We go above and beyond to ensure you get the best plumbing service in Mesa County.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Experienced Plumbers', desc: 'Our technicians undergo rigorous training and have years of hands-on experience solving complex plumbing issues.', icon: Wrench },
              { title: 'Upfront Pricing', desc: 'No hidden fees or surprises. We provide honest, straightforward pricing before we start any work.', icon: CheckCircle },
              { title: 'Local & Reliable', desc: 'As a locally owned business, we treat our Grand Junction neighbors with the respect and urgency they deserve.', icon: Home }
            ].map((feature) => (
              <div key={feature.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Expert Plumbing Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We offer comprehensive plumbing solutions to keep your water flowing and your property safe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MAIN_SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon];
              return (
                <Link
                  key={service.slug}
                  to={`/${service.slug}-grand-junction`}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all"
                >
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    {Icon && <Icon className="w-6 h-6 text-blue-700" />}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{service.name}</h3>
                  <p className="text-sm text-gray-500 mb-3 leading-relaxed">{service.short}</p>
                  <div className="flex items-center gap-1 text-blue-600 text-sm font-medium">
                    View {service.name} <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Your Local Grand Junction Plumbers
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At {BUSINESS_NAME}, we know that plumbing issues can bring your day to a halt. That's why our dedicated team of professionals is committed to providing fast, effective, and lasting solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We take pride in our workmanship and our reputation in the Grand Junction community. Whether it's a routine inspection, complex pipe repairs, or emergency water heater replacement, you can count on us to deliver exceptional service every time.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Residential & commercial plumbing',
                  'Honest, upfront pricing',
                  'Locally owned and operated',
                  'Highly trained technicians',
                  'Commitment to customer satisfaction',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4981803/pexels-photo-4981803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Plumbing professional at work in Grand Junction"
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white rounded-2xl p-5 shadow-xl">
                <p className="text-3xl font-extrabold">Mesa County</p>
                <p className="text-blue-200 text-sm mt-1">Local Plumbing Experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Callout */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-blue-700/50 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <AlertTriangle className="w-64 h-64 -mt-10 -mr-10 text-white" />
            </div>
            <div className="relative z-10 md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 border border-red-500/30 text-sm font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" /> Emergency Service
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Have a Plumbing Emergency?</h2>
              <p className="text-blue-100 text-lg leading-relaxed max-w-xl">
                Burst pipes, severe leaks, and major clogs don't wait for regular business hours. Call us immediately for fast, responsive emergency plumbing repairs in Grand Junction.
              </p>
            </div>
            <div className="relative z-10">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xl px-8 py-5 rounded-xl shadow-lg transition-all"
              >
                <Phone className="w-6 h-6" />
                CALL NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      <CallCTA />

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Coverage</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Plumbing Service Areas in Mesa County
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide professional plumbing services throughout Grand Junction and the surrounding Mesa County communities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                to={area.main ? `/plumbing-repair-grand-junction` : `/plumber-${area.slug}`}
                className="group bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all"
              >
                <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors text-sm">{area.name}</p>
                <p className="text-xs text-gray-500">Mesa County, CO</p>
                {area.main && (
                  <span className="mt-1.5 inline-block text-xs bg-blue-100 text-blue-700 font-medium px-2 py-0.5 rounded-full">Main Area</span>
                )}
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors"
            >
              View All Service Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 font-medium">Rated 4.8/5 based on 42 reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', loc: 'Grand Junction, CO', text: 'Incredibly fast response when our water heater broke. The technician was polite, explained the costs upfront, and had a new unit installed the same day. Highly recommended!' },
              { name: 'David L.', loc: 'Fruita, CO', text: 'L&M Maintenance fixed a stubborn leak under our kitchen sink that two other companies couldn\'t figure out. Honest pricing and fantastic workmanship.' },
              { name: 'Jennifer K.', loc: 'Palisade, CO', text: 'I called them for a clogged main sewer line. They were at my house within an hour and had the problem resolved quickly. Will definitely use them again.' }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map(({ q, a }) => (
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

      {/* Map + Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Find Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Grand Junction, Colorado Service Area
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-80 lg:h-auto min-h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d794527.9440244504!2d-108.8796112726113!3d38.93255289425556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4c9e508e99e27add%3A0x49059b2429b0fe40!2sL%26M%20Maintenance%20and%20Repair!5e0!3m2!1sen!2sin!4v1790005213948!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="L&M Maintenance and Repair Map"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your Service</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Need a plumber fast? Call us today to schedule your service or request an estimate. We are ready to help with any plumbing issue in Grand Junction and surrounding areas.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Call or Text</p>
                    <a href={`tel:${PHONE}`} className="font-bold text-gray-900 hover:text-blue-700 transition-colors text-lg">{PHONE_DISPLAY}</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Service Area</p>
                    <p className="font-semibold text-gray-900">Grand Junction, CO &amp; Mesa County</p>
                  </div>
                </div>
              </div>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                CALL NOW — {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
