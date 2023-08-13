import React from "react";
import Image from "next/image";

const CraneInfo = () => {
  return (
    <div>
      <Image
        src="/cranelift3.jpg"
        alt="Installation"
        layout="responsive"
        width={1920}
        height={1080}
        className="w-full h-[calc(100vh-64px)]"
      />
      <div className="pt-12">
        <h1 className="relative text-header-yellow font-bold text-5xl pb-6 pl-6 pr-6 sm:pl-6 md:pl-12 lg:pl-24 before:absolute before:content ' ' before:w-3 before:h-14 before:bg-before-yellow before:left-0 before:top-1/6">
          Need a lift?
        </h1>
        <div className="flex justify-center">
          <p className="px-6 lg:px-24 md:px-12 sm:px-6">
            At Arizona Sign Company, we specialize in providing reliable crane services to support a wide range of industries. Whether it&apos;s construction, HVAC, landscaping, or machinery moving, our skilled and certified crane operators are equipped to handle diverse projects with utmost precision and safety. Our commitment to safety is paramount in every crane operation we undertake. We adhere to stringent safety protocols and ensure that all safety measures are in place to protect both our workers and the surrounding environment. With Arizona Sign Company&apos;s crane services, you can have peace of mind knowing that your project will be handled with expert care and safety as our top priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CraneInfo;
