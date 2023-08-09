import React from 'react';
import InstallationInfo from './InstallationInfo';
import InstallationForm from './InstallationForm';

export default function Installation() {
  return (
    <div className="pt-16 bg-custom-color">
      <InstallationInfo/>
      <InstallationForm/>
    </div>
  );
};
