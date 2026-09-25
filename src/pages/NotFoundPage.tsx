import { Link } from 'react-router-dom';
import { Home, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import { PHONE_DISPLAY } from '@/lib/constants';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found | L&M Maintenance and Repair" description="The page you're looking for could not be found." />
      <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-md">
          <p className="text-8xl font-extrabold text-blue-100">404</p>
          <h1 className="text-2xl font-bold text-gray-900 mt-4 mb-2">Page Not Found</h1>
          <p className="text-gray-500 mb-8">The page you're looking for doesn't exist. Try heading back home or calling us directly.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-colors">
              <Home className="w-4 h-4" /> Go Home
            </Link>
            <a href={`tel:+19706653162`} className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 py-3 rounded-xl transition-colors">
              <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
