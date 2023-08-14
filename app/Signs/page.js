import React from 'react';
import SignSlider from './SignSlider';
import SignProposal from './SignProposal';
import SignInfo from './SignInfo';
import SignImage from './SignImage';
export default function Signs() {
  return (
    <div className="pt-15 bg-custom-color">
      {/* <SignSlider/> */}
      <SignImage/>
      <SignInfo/>
      <SignProposal/>
    </div>
  );
};
