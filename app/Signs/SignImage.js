import React from "react";
import Image from "next/image";

const SignImage = () => {
  return (
    <Image
      src="/culvers2.jpg"
      alt="Installation"
      layout="responsive"
      width={1298}
      height={731}
      className="max-w-full"
    />
  );
  
};

export default SignImage;
