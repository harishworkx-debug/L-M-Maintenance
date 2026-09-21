import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';
import { PHONE, PHONE_DISPLAY, BUSINESS_NAME } from '@/lib/constants';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact ${BUSINESS_NAME}`,
  description: 'Contact page for L&M Maintenance and Repair — Grand Junction, CO residential home repair service connection.',
  url: 'https://www.gjrepairpros.com/contact',
};

export default function ContactPage() {
  return (
    <>
      <SEO
        title={`Contact | ${BUSINESS_NAME} — Grand Junction, CO`}
        description="Contact L&M Maintenance and Repair to connect with independent local residential home repair providers in Grand Junction, CO. Call (970) 549-6785."
        canonical="/contact"
        schema={schema}
      />

      <section className="relative h-48 sm:h-64 flex items-end overflow-hidden bg-blue-950">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <nav className="flex items-center gap-2 text-blue-300 text-xs mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Contact Us</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Connect with a Local Residential Provider
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                The fastest way to connect with an available independent local residential service provider in Grand Junction is to call directly. Our free connection service matches Mesa County homeowners with qualified local professionals for all types of residential home repairs.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">Phone / Call Now</p>
                    <a href={`tel:${PHONE}`} className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors">{PHONE_DISPLAY}</a>
                    <p className="text-gray-500 text-sm mt-1">Free service — no charge to connect</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">Service Area</p>
                    <p className="text-gray-700">Grand Junction, CO &amp; Mesa County</p>
                    <p className="text-gray-500 text-sm">Including Fruita, Palisade, Clifton, Orchard Mesa &amp; more</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">Residential Only</p>
                    <p className="text-gray-700">Home repair &amp; maintenance connections</p>
                    <p className="text-gray-500 text-sm">For residential properties throughout Mesa County</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  CALL NOW — {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-80 sm:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d794527.9440244504!2d-108.8796112726113!3d38.93255289425556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4c9e508e99e27add%3A0x49059b2429b0fe40!2sL%26M%20Maintenance%20and%20Repair!5e0!3m2!1sen!2sin!4v1790005213948!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="L&M Maintenance and Repair Map"
                />
              </div>
              <p className="text-center text-gray-500 text-sm mt-3">
                Serving Grand Junction and all of Mesa County, Colorado
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
