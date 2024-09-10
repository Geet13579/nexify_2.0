import React from 'react'

function serve() {
  return (
    <main className="flex flex-col xl:flex-row  bg-primary 2xl:px-40 md:px-10  sm:px-5 py-10  h-50 ">
  <div className="w-full xl:w-1/2 my-4 flex items-center ">
    <div className="w-full ">
      <h1 className="tracking-tight font-bold text-white text-left 2xl:text-start 2xl:text-6xl xl:text-6xl sm:text-4xl leading-relaxed ">Who We Serve!</h1>
      <br/>
      <p className="text-white mt-2 2xl:text-2xl leading-relaxed  sm:text-lg font-regular text-justify">CWe offer tailored solutions that address the specific needs of various sectors, boosting operational efficiency, customer satisfaction, and business growth. Our partners include Vehicle Manufacturers, Authorized Dealerships, NBFCs, Insurance Companies, as well as Vehicle Leasing, Rental, and Roadside Assistance companies</p>
   
    </div>
  </div>
  <div className="w-full xl:w-1/2 flex justify-center 2xl:justify-end ">
    <img className="object-contain " src="/serve.png" alt="Robot Group" />
  </div>
</main>
  )
}

export default serve