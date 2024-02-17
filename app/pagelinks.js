import Image from "next/legacy/image";

export default function PageLinks() {
  return (
    <div className="relative flex flex-col md:flex-col lg:flex-row bg-custom-color">
      <div className="flex-1 mb-2 mx-0 lg:mr-2">
        <div className="w-full h-[400px] relative">
          <a href="/Signs">
            <div className="w-full h-full relative">
              <Image
                src="/dairyQueenResize.jpg"
                alt="Dairy Queen"
                className="transition-brightness hover:brightness-75"
                layout="fill"
                objectFit="cover"
                priority={true}
              />
            </div>
          </a>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-70 flex items-center justify-center transition-transform transform origin-bottom hover:scale-y-105 cursor-pointer">
            <a href="/Signs">
              <p className="text-white text-center hover:text-header-yellow">Signs</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 mb-2">
        <div className="w-full h-[400px] relative">
          <a href="/Installation">
            <div className="w-full h-full relative">
              <Image
                src="/installation2resize.jpg"
                alt="Image 2"
                className="transition-brightness hover:brightness-75"
                layout="fill"
                objectFit="cover"
                priority={true}
              />
            </div>
          </a>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-70 flex items-center justify-center transition-transform transform origin-bottom hover:scale-y-105 cursor-pointer">
            <a href="/Installation">
              <p className="text-white text-center hover:text-header-yellow">Installation</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 mb-2 mx-0 lg:ml-2">
          <div className="w-full h-[400px] relative">
            <a href="/CraneService">
              <div className="w-full h-full relative">
                <Image
                  src="/cranelift2Resize.jpg"
                  alt="Crane Lift"
                  className="transition-brightness hover:brightness-75"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </div>
            </a>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-70 flex items-center justify-center transition-transform transform origin-bottom hover:scale-y-105 cursor-pointer">
              <a href="/CraneService">
                <p className="text-white hover:text-header-yellow">Crane Service</p>
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}
