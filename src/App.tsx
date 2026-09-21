import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';
import ScrollToTop from '@/components/ScrollToTop';

import HomePage from '@/pages/HomePage';
import ServiceAreasPage from '@/pages/ServiceAreasPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';
import AboutPage from '@/pages/AboutPage';
import LocationPage from '@/pages/LocationPage';

// Grand Junction service pages (Plumbing focused)
import ServicePageGJ from '@/pages/ServicePageGJ';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Grand Junction service pages (Dynamic) */}
          <Route path="/:slug-grand-junction" element={<ServicePageGJ />} />

          {/* Single Plumber Location Pages */}
          <Route path="/plumber-fruita" element={<LocationPage city="Fruita" slug="fruita" />} />
          <Route path="/plumber-palisade" element={<LocationPage city="Palisade" slug="palisade" />} />
          <Route path="/plumber-clifton" element={<LocationPage city="Clifton" slug="clifton" />} />
          <Route path="/plumber-orchard-mesa" element={<LocationPage city="Orchard Mesa" slug="orchard-mesa" />} />
          <Route path="/plumber-loma" element={<LocationPage city="Loma" slug="loma" />} />
          <Route path="/plumber-mack" element={<LocationPage city="Mack" slug="mack" />} />
          <Route path="/plumber-whitewater" element={<LocationPage city="Whitewater" slug="whitewater" />} />

          {/* Misc */}
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <StickyCallButton />
    </BrowserRouter>
  );
}
