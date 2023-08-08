import React from "react";

const CraneInfo = () => {
  return (
    <div>
      <img
        src="/cranelift3.jpg"
        alt="Installation"
        className="object-cover object-top w-full h-[calc(100vh-64px)]"
      />
      <div className="bg-gray-100 py-8 px-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Need a lift?</h2>
        <p className="text-gray-800 pt-8">
          At Arizona Sign Company, we specialize in providing reliable crane services to support a wide range of industries. Whether it&apos;s construction, HVAC, landscaping, or machinery moving, our skilled and certified crane operators are equipped to handle diverse projects with utmost precision and safety. Our commitment to safety is paramount in every crane operation we undertake. We adhere to stringent safety protocols and ensure that all safety measures are in place to protect both our workers and the surrounding environment. With Arizona Sign Company&apos;s crane services, you can have peace of mind knowing that your project will be handled with expert care and safety as our top priority.
        </p>
      </div>
    </div>
  );
};

export default CraneInfo;
