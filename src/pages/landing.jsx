import React from "react";
import Hero from '../components/layouts/hero.jsx';
import HowItWorks from '../components/layouts/working.jsx';
import CoreFeatures from '../components/layouts/features.jsx';
import Improvements from '../components/layouts/improvements.jsx';
import VisualInsights from '../components/layouts/visualInsights.jsx'
import SuccessStories from '../components/layouts/success.jsx'
import JoinNow from '../components/layouts/joinnow.jsx'

export default function Landing() {
  return (
    <>
      <Hero/>
      <HowItWorks />
      <CoreFeatures/>
      <Improvements/>
      <VisualInsights/>
      <SuccessStories/>
      <JoinNow/>
    </>
  );
}