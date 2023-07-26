import React from 'react';
import FullPageCarousel from './FullPageCarousel';
import BillboardProposal from './BillboardProposal';
import CustomSigns from './CustomSigns';
import DigitalDisplays from './DigitalDisplays';
import LedLighting from './LedLighting';
export default function Billboards() {
  return (
      <div>
        <FullPageCarousel/>
        <BillboardProposal/>
        <CustomSigns/>
        <DigitalDisplays/>
        <LedLighting/>
      </div>
  );
};
