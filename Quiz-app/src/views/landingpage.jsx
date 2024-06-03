import React, { useState } from 'react';
import Header from './layouts/header';
import Footer from './layouts/Footer';
import HeroSection from './layouts/HeroSection';
import Features from './layouts/Features';
import CTA from './layouts/CTA';

const LandingPage = () => {
 
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
