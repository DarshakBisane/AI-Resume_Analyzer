import React from "react";
import Hero from '../components/hero.jsx';
import HowItWorks from '../components/working.jsx';
import CoreFeatures from '../components/features.jsx';
import Improvements from '../components/improvements.jsx';
import VisualInsights from '../components/visualInsights.jsx'
import SuccessStories from '../components/success.jsx'
import JoinNow from '../components/joinnow.jsx'

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