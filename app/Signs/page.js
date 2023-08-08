import React from 'react';
import SignSlider from './SignSlider';
import SignProposal from './SignProposal';
import SignInfo from './SignInfo';
export default function Signs() {
  return (
    <div className="pt-16 bg-custom-color">
      <SignSlider/>
      <SignInfo/>
      <SignProposal/>
    </div>
  );
};
