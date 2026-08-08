import React, { Suspense, lazy, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Industries = lazy(() => import("../pages/Industries"));
const Pricing = lazy(() => import("../pages/Pricing"));
const Gallery = lazy(() => import("../pages/Gallery"));
const FAQ = lazy(() => import("../pages/FAQ"));
const Contact = lazy(() => import("../pages/Contact"));
const RequestQuote = lazy(() => import("../pages/RequestQuote"));
const BookService = lazy(() => import("../pages/BookService"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const ContentPage = lazy(() => import("../pages/ContentPage"));
const NotFound = lazy(() => import("../pages/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-label="Loading page">
      <span className="loading-mark" />
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingScreen />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/industries" element={<PageTransition><Industries /></PageTransition>} />
            <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
            <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/quote" element={<PageTransition><RequestQuote /></PageTransition>} />
            <Route path="/book" element={<PageTransition><BookService /></PageTransition>} />
            <Route path="/dashboard" element={<PageTransition><Dashboard mode="client" /></PageTransition>} />
            <Route path="/admin" element={<PageTransition><Dashboard mode="admin" /></PageTransition>} />
            <Route path="/careers" element={<PageTransition><ContentPage type="careers" /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><ContentPage type="blog" /></PageTransition>} />
            <Route path="/privacy" element={<PageTransition><ContentPage type="privacy" /></PageTransition>} />
            <Route path="/terms" element={<PageTransition><ContentPage type="terms" /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}
