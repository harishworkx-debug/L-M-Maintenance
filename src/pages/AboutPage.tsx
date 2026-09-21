import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, Award, Users, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import { PHONE, PHONE_DISPLAY, BUSINESS_NAME } from '@/lib/constants';

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: BUSINESS_NAME,
      description: 'Locally owned and operated plumbing business serving Grand Junction and Mesa County.',
      telephone: PHONE,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Grand Junction',
        addressRegion: 'CO',
        addressCountry: 'US',
      },
    },
  };

  return (
    <>
      <SEO
        title={`About Us | ${BUSINESS_NAME} - Grand Junction Plumber`}
        description={`Learn more about ${BUSINESS_NAME}, your trusted local plumbing experts in Grand Junction, CO. Dedicated to quality, honesty, and fast service.`}
        canonical="/about"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-blue-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/12777517/pexels-photo-12777517.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Grand Junction landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">About {BUSINESS_NAME}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Your trusted neighbors and local plumbing experts dedicated to keeping Grand Junction's water flowing smoothly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Our Story</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Rooted in Grand Junction, Built on Trust</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  At <strong>{BUSINESS_NAME}</strong>, we started with a simple mission: to provide the homeowners and businesses of Mesa County with plumbing services they can genuinely rely on. We understand that inviting a contractor into your home requires trust, and we work hard to earn that trust every single day.
                </p>
                <p>
                  We are proud to be a locally owned and operated business. We aren't a faceless national corporation; we are your neighbors. We drive the same roads, face the same hard water challenges, and care deeply about the community we serve.
                </p>
                <p>
                  Whether it's a midnight emergency pipe burst, a stubborn clogged drain, or a full water heater installation, our team of highly trained technicians approaches every job with the same level of dedication and professionalism.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4981803/pexels-photo-4981803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Plumbing professional working"
                className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-lg max-w-xs hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-gray-900 text-lg">Locally Owned</span>
                </div>
                <p className="text-sm text-gray-600">Proudly serving Grand Junction and Mesa County.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The principles that guide every repair, installation, and customer interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Honesty & Integrity', icon: Award, desc: 'We provide upfront, transparent pricing. No hidden fees, no unnecessary upselling. Just honest work.' },
              { title: 'Expert Workmanship', icon: CheckCircle, desc: 'Our technicians are highly trained professionals who take pride in doing the job right the first time.' },
              { title: 'Fast Reliability', icon: Clock, desc: 'When you have a plumbing emergency, you can\'t wait. We prioritize fast response times to protect your property.' },
              { title: 'Community First', icon: Users, desc: 'As locals, we are deeply committed to the well-being and satisfaction of our Mesa County neighbors.' },
            ].map((val) => (
              <div key={val.title} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <val.icon className="w-7 h-7 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                <p className="text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Don't settle for subpar plumbing services. Join the hundreds of satisfied homeowners in Grand Junction who trust {BUSINESS_NAME} for all their plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-colors w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              Call {PHONE_DISPLAY}
            </a>
            <Link
              to="/service-areas"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold text-lg px-8 py-4 rounded-xl transition-colors w-full sm:w-auto"
            >
              <MapPin className="w-5 h-5" />
              View Service Areas
            </Link>
          </div>
        </div>
      </section>

      <CallCTA 
        heading="Need a Plumber Right Now?" 
        subtext="Our experienced local technicians are ready to tackle your toughest plumbing problems." 
        dark={false} 
      />
    </>
  );
}
