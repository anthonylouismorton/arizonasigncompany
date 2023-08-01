import React from 'react';
import InstallationImage from './InstallationImage';
import InstallationInformation from './InstallationInformation';

export default function Installation() {
  return (
    <div className="flex bg-gray-100">
      <div className="w-1/3 pl-4 pr-4 mt-2">
        <InstallationImage />
      </div>
      <div className="w-2/3 pl-4 pr-4 mt-2">
        <InstallationInformation />
      </div>
    </div>
  );
};
