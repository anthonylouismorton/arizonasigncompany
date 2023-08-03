import React from 'react';
import InstallationInfo from './InstallationInfo';
import InstallationForm from './InstallationForm';

export default function Installation() {
  return (
    <div className="bg-gray-100">
      <InstallationInfo/>
      <InstallationForm/>
    </div>
  );
};
