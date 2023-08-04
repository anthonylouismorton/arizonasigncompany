import React from 'react';
import FullPageCarousel from './FullPageCarousel';
import SignProposal from './SignProposal';
import CustomSigns from './CustomSigns';
import DigitalDisplays from './DigitalDisplays';
import LedLighting from './LedLighting';
export default function Signs() {
  return (
    <div>
      <FullPageCarousel/>
      <CustomSigns/>
      <DigitalDisplays/>
      <LedLighting/>
      <SignProposal/>
    </div>
  );
};
