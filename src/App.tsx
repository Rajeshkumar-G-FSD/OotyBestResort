/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { SuitesPage } from './pages/Suites';
import { DiningPage } from './pages/Dining';
import { WellnessPage } from './pages/Wellness';
import { ExperiencesPage } from './pages/Experiences';
import { GalleryPage } from './pages/Gallery';

import { BookingProvider } from './BookingContext';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/suites" element={<SuitesPage />} />
            <Route path="/dining" element={<DiningPage />} />
            <Route path="/wellness" element={<WellnessPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </BookingProvider>
    </BrowserRouter>
  );
}
