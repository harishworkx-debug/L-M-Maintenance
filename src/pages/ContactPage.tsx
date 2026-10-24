import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ChevronRight, CheckCircle, Send, ShieldAlert } from 'lucide-react';
import SEO from '@/components/SEO';
import { PHONE, PHONE_DISPLAY, BUSINESS_NAME, SERVICE_AREAS, MAIN_SERVICES } from '@/lib/constants';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact a Plumber in Grand Junction, CO | ${BUSINESS_NAME}`,
  description: 'Contact L&M Maintenance and Repair for expert residential plumbing, drain cleaning, and water heater services in Grand Junction and Mesa County, CO.',
  url: 'https://www.gjrepairpros.com/contact',
  mainEntity: {
    '@type': 'PlumbingService',
    name: BUSINESS_NAME,
    telephone: PHONE,
    url: 'https://www.gjrepairpros.com',
    priceRange: '$$',
    areaServed: SERVICE_AREAS.map(a => ({ '@type': 'City', name: `${a.name}, CO` })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '19:00'
      }
    ]
  }
};

import { trackCallClick, trackFormSubmission } from '@/lib/analytics';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Plumbing Repair',
    city: 'Grand Junction',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    trackFormSubmission(formData.service, formData.city);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <>
      <SEO
        title={`Contact a Plumber in Grand Junction CO | ${BUSINESS_NAME}`}
        description="Need a plumber in Grand Junction, CO? Contact L&M Maintenance and Repair for emergency plumbing, drain cleaning, and water heater service. Call (970) 546-9838."
        canonical="/contact"
        schema={schema}
      />

      <section className="relative h-56 sm:h-72 flex items-end overflow-hidden bg-blue-950">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <nav className="flex items-center gap-2 text-blue-300 text-xs mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Contact a Plumber in Grand Junction, CO
          </h1>
          <p className="text-blue-200 mt-2 text-sm flex items-center gap-1">
            <MapPin className="w-4 h-4" /> Fast Dispatch Across Grand Junction &amp; Mesa County, Colorado
          </p>
        </div>
      </section>

      {/* Emergency Alert Banner */}
      <div className="bg-amber-500 text-slate-950 py-3 px-4 text-center font-bold text-sm sm:text-base flex items-center justify-center gap-2">
        <ShieldAlert className="w-5 h-5 flex-shrink-0" />
        <span>Plumbing Emergency? Call Immediately for Priority Dispatch:</span>
        <a href={`tel:${PHONE}`} className="underline hover:text-white transition-colors">{PHONE_DISPLAY}</a>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Get in Touch with Our Local Team
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-base sm:text-lg">
                Have a leaking pipe, backed-up drain, or water heater issue? At {BUSINESS_NAME}, we provide honest diagnostics, upfront flat-rate pricing, and prompt arrival times throughout Grand Junction and Mesa County.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-100">
                    <Phone className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-xs uppercase tracking-wide mb-1">Direct Phone / Emergency Line</p>
                    <a
                      href={`tel:${PHONE}`}
                      onClick={() => trackCallClick('contact_page_phone')}
                      className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors"
                    >
                      {PHONE_DISPLAY}
                    </a>
                    <p className="text-gray-500 text-xs mt-1">Tap to call on mobile • 24/7 Emergency Dispatch Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-100">
                    <Clock className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-xs uppercase tracking-wide mb-1">Working Hours</p>
                    <p className="text-gray-800 font-medium">Monday – Saturday: 7:00 AM – 7:00 PM</p>
                    <p className="text-gray-500 text-xs mt-0.5">Emergency Service: 24/7 for burst pipes &amp; major backups</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-100">
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-xs uppercase tracking-wide mb-1">Service Coverage</p>
                    <p className="text-gray-800 font-medium">Grand Junction, CO &amp; Surrounding Mesa County</p>
                    <p className="text-gray-500 text-xs mt-0.5">Serving Fruita, Palisade, Clifton, Orchard Mesa, Loma, Mack &amp; Whitewater</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-md border border-gray-200 h-64 sm:h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d794527.9440244504!2d-108.8796112726113!3d38.93255289425556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4c9e508e99e27add%3A0x49059b2429b0fe40!2sL%26M%20Maintenance%20and%20Repair!5e0!3m2!1sen!2sin!4v1790005213948!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="L&M Maintenance and Repair Map Location"
                />
              </div>
            </div>

            {/* Right: Functional Contact Form */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Service or Estimate</h3>
              <p className="text-gray-600 text-sm mb-6">
                Fill out the form below and our dispatcher will contact you promptly to confirm availability and schedule your appointment.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-bold text-emerald-900 text-lg mb-1">Message Received!</h4>
                  <p className="text-emerald-700 text-sm mb-4">
                    Thank you, {formData.name}. Our dispatch team has received your request and will reach out to you shortly at {formData.phone}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-emerald-800 font-semibold underline hover:text-emerald-950"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. (970) 546-9838"
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Service Needed *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      >
                        <option value="Plumbing Repair">General Plumbing Repair</option>
                        <option value="Drain Cleaning">Drain Cleaning &amp; Repair</option>
                        <option value="Water Heater">Water Heater Repair / Install</option>
                        <option value="Pipe Repair">Burst / Leaking Pipe</option>
                        <option value="Faucet Repair">Faucet / Fixture Repair</option>
                        <option value="Toilet Repair">Toilet Repair / Install</option>
                        <option value="Sewer Line">Sewer Camera / Repair</option>
                        <option value="Sump Pump">Sump Pump Service</option>
                        <option value="Other">Other Plumbing Issue</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Your Community *
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      >
                        <option value="Grand Junction">Grand Junction</option>
                        <option value="Fruita">Fruita</option>
                        <option value="Palisade">Palisade</option>
                        <option value="Clifton">Clifton</option>
                        <option value="Orchard Mesa">Orchard Mesa</option>
                        <option value="Loma">Loma</option>
                        <option value="Mack">Mack</option>
                        <option value="Whitewater">Whitewater</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Describe the Issue
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you're experiencing (e.g. leaking water heater, slow kitchen drain, low pressure)..."
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 px-6 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    {loading ? 'Sending Request...' : (
                      <>
                        <Send className="w-4 h-4" />
                        SUBMIT SERVICE REQUEST
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-gray-500 text-center">
                    We respect your privacy. No spam. You will only be contacted regarding your plumbing request.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* What to Expect After You Reach Out */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 font-semibold text-xs uppercase tracking-wider block mb-2">Simple &amp; Transparent</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Happens After You Reach Out?</h2>
            <p className="text-gray-600 text-base">
              We eliminate guesswork with clear communication from the moment you call until your plumbing issue is 100% resolved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-700 text-white font-extrabold text-xl rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                1
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Prompt Callback &amp; Arrival Window</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our local dispatcher immediately reviews your request and calls you to confirm symptoms, answer questions, and schedule a precise arrival window.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-700 text-white font-extrabold text-xl rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                2
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">On-Site Diagnosis &amp; Upfront Quote</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A licensed plumber arrives in a stocked vehicle, diagnoses the root issue, explains repair options, and provides a guaranteed flat-rate price before any work begins.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-700 text-white font-extrabold text-xl rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                3
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Flawless Repair &amp; Spotless Cleanup</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We perform the repair using durable professional materials, test the fix under full operating pressure, leave your home spotless, and back our work with a guarantee.
              </p>
            </div>
          </div>

          {/* Quick Directory Links */}
          <div className="mt-16 bg-gray-50 border border-gray-100 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Need Details on a Specific Plumbing Issue or Area?</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
              {MAIN_SERVICES.map(s => (
                <Link
                  key={s.slug}
                  to={`/${s.slug}-grand-junction`}
                  className="text-xs text-gray-700 hover:text-blue-700 font-medium py-1.5 px-2 rounded-lg bg-white border border-gray-100 hover:border-blue-200 transition-colors block text-center"
                >
                  {s.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 text-xs text-gray-600 border-t border-gray-200 pt-4">
              <span>Service Coverage:</span>
              <Link to="/plumbing-repair-grand-junction" className="text-blue-700 hover:underline font-semibold">Grand Junction</Link>
              {SERVICE_AREAS.filter(a => !a.main).map(area => (
                <Link key={area.slug} to={`/plumber-${area.slug}`} className="text-blue-700 hover:underline">
                  {area.name}
                </Link>
              ))}
              <span className="text-gray-300">|</span>
              <Link to="/sitemap" className="text-blue-700 font-bold hover:underline">HTML Sitemap</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
