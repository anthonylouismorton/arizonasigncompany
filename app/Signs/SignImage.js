import React from "react";
import Image from "next/image";

const SignImage = () => {
  return (
    <div>
      <Image
        src="/billboard.jpg"
        alt="Installation"
        layout="responsive"
        width={1920}
        height={1080}
        className="w-full h-[calc(100vh-64px)]"
      />
    </div>
  );
  
};

export default SignImage;
