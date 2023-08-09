import React from 'react';
import CraneInfo from './CraneInfo';
import CraneForm from './CraneForm';

export default function CraneService() {
  return (
    <div className="pt-16 bg-custom-color">
      <CraneInfo/>
      <CraneForm/>
    </div>                                   
  );
};
