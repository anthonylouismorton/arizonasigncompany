import React from 'react';
import SignSlider from './SignSlider';
import SignProposal from './SignProposal';
import CustomSigns from './CustomSigns';
import DigitalDisplays from './DigitalDisplays';
import LedLighting from './LedLighting';
export default function Signs() {
  return (
    <div>
      <SignSlider/>
      <CustomSigns/>
      <DigitalDisplays/>
      <LedLighting/>
      <SignProposal/>
    </div>
  );
};
