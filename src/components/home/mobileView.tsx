import React from 'react'

export default function mobileView() {
  return (
    

    <main className="flex flex-col md:flex-row bg-mobile  md:px-10  2xl:px-60 sm:px-0 py-5 h-50 bg-cover">

    <div className="w-full xl:w-1/2 my-4 flex items-center pl-0 sm:pl-[40px] 2xl:justify-start md:justify-center  sm:justify-center">

      <img className="object-contain h-auto h-[500px]" src="/Group 481811.png" alt="Robot Group" />



    </div>
    <div className="w-full xl:w-1/2 flex justify-end xl:justify-center items-center ">
      <div className="lg:w-4/5 w-full p-5">
        <h1 className="tracking-tight font-bold text-black lg:text-left text-center xl:text-[40px]  text-[30px]">Ambassador App</h1>
        <br />
        <p className="text-gray-800 mt-2  text-center  xl:text-[22px]  text-[18px] leading-[33px] font-regular lg:text-left  text-justify">

        Includes an updated UI/UX, a controlled <br className='hidden xl:block'/> environment, fixes for impersonation and fake<br className='hidden xl:block'/> locations, ambassador profiling and rating, a <br className='hidden xl:block'/>chauffeur services module, floating ticket <br className='hidden xl:block'/>solutions, and pre-assigned task<br className='hidden xl:block'/> acceptance.
        </p>
     
      </div>
    </div>
  </main>
  )
}
