import React from 'react'

function serve() {
  return (
    <main className="flex flex-col xl:flex-row  bg-primary 2xl:px-60 md:px-10  sm:px-5 py-10  h-50 ">
  <div className="w-full xl:w-1/2 my-4 flex items-center ">
    <div className="w-full ">
      <h1 className="tracking-tight font-bold text-white text-left 2xl:text-start lg:text-[56px] lg:leading-[54px] text-[45px] leading-[35px] leading-relaxed xl:text-left text-center">Who We Serve!</h1>
      <br/>
      <p className="text-white mt-2 text-[20px] leading-[30px]  lg:text-[26px] lg:leading-[39px]  font-regular text-justify">

      We offer tailored solutions that address the specific needs of various sectors, boosting operational efficiency, customer satisfaction, and business growth.<br  className='hidden xl:block'/><br  className='hidden xl:block'/> Our partners include Vehicle Manufacturers, Authorized Dealerships, NBFCs, Insurance Companies, as well as Vehicle Leasing, Rental, and Roadside Assistance companies.
      </p>
   
    </div>
  </div>
  <div className="w-full xl:w-1/2 flex justify-center 2xl:justify-end ">
    <img className="object-contain " src="/serve.png" alt="Robot Group" />
  </div>
</main>
  )
}

export default serve