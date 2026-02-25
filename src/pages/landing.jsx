import React from "react";
import Hero from '../components/hero.jsx';
import HowItWorks from '../components/working.jsx';
import CoreFeatures from '../components/features.jsx';

export default function Landing() {
  return (
    <>
      <Hero/>
      <HowItWorks />
      <CoreFeatures/>
    </>
  );
}