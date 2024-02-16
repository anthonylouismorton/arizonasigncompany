import React from 'react';
import SignProposal from './SignProposal';
import SignInfo from './SignInfo';
import SignImage from './SignImage';
export default function Signs() {
  return (
    <div className="pt-16 bg-custom-color">
      <SignImage/>
      <SignInfo/>
      <SignProposal/>
    </div>
  );
};
