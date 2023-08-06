import React from "react";

const CraneInfo = () => {
  return (
    <div>
      <img
        src="/cranelift3.jpg"
        alt="Installation"
        className="object-cover object-center w-full h-[100vh]"
      />
      <div className="bg-gray-100 p-4">
        <div className="flex justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mt-2">Need a lift?</h2>
        </div>
        <p className="text-gray-800 p-6">
          At Arizona Sign Company, we specialize in providing reliable crane services to support a wide range of industries. Whether it&apos;s construction, HVAC, landscaping, or machinery moving, our skilled and certified crane operators are equipped to handle diverse projects with utmost precision and safety. Our commitment to safety is paramount in every crane operation we undertake. We adhere to stringent safety protocols and ensure that all safety measures are in place to protect both our workers and the surrounding environment. With Arizona Sign Company&apos;s crane services, you can have peace of mind knowing that your project will be handled with expert care and safety as our top priority.
        </p>
      </div>
    </div>
  );
};

export default CraneInfo;
