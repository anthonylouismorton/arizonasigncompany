import React from 'react';
export default function Home() {
  return (
    <div className='py-16 bg-custom-color'>
      <div>
      <img src="/kingmanSign.jpg" alt="railroadPark" className="w-full object-cover object-top h-[60vh]"/>
      </div>
      <div className="w-full pt-16">
        <div>
          <h1 className="relative text-header-yellow font-bold text-5xl pb-6 pl-24 before:absolute before:content ' ' before:w-3 before:h-14 before:bg-before-yellow before:left-0 before:top-1/6">
            Who We Serve
          </h1>
          <p className="px-32">
            We provide exceptional services to a wide range of customers spanning across Arizona, Nevada, and California. Whether you operate a small local business or a large-scale multinational corporation, we are committed to serving you with unparalleled dedication and craftsmanship. With our customer-centric approach and the ability to deliver nationwide, we are poised to meet the unique needs of every client, making a lasting impact through our high-quality signage solutions.
          </p>
        </div>
        <div>
        <h1 className="pt-12 relative text-header-yellow font-bold text-5xl pb-6 pl-24 before:absolute before:content ' ' before:w-3 before:h-14 before:bg-before-yellow before:left-0 before:top-1/6">
          Our Products and Services
        </h1>
          <p className="px-32">
            At Arizona Sign Company, we offer a comprehensive range of products and services tailored to meet your signage needs. From billboards to monument signs, channel letters, decals, and more, we specialize in crafting a diverse array of signs that make a powerful impact. Our expertise extends beyond sign fabrication, as we also provide installation services not only for our own products but also for other sign companies nationwide. Whatever your signage requirements may be, we are dedicated to delivering top-quality solutions and exceptional service, making your brand stand out with every sign we create and install.
          </p>
        </div>
        <div>
        <h1 className="pt-12 relative text-header-yellow font-bold text-5xl pb-6 pl-24 before:absolute before:content ' ' before:w-3 before:h-14 before:bg-before-yellow before:left-0 before:top-1/6">
          Over 70 years of Service
        </h1>
          <p className="px-32">
            Founded in 1945, our company has upheld a distinguished reputation for delivering outstanding products and services over the years. With a legacy of excellence, we remain dedicated to providing unparalleled solutions to our esteemed clientele, ensuring their complete satisfaction.
          </p>
        </div>
      </div>
    </div>
  )
}
