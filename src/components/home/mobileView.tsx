import React from 'react'

export default function mobileView() {
  return (
    

    <main className="flex flex-col md:flex-row bg-mobile  2xl:px-44 sm:px-0 py-5  h-50 object-scale-down ">

    <div className="w-full xl:w-1/2 my-4 flex items-center">

      <img className="object-contain " src="/mobile (1).png" alt="Robot Group" />



    </div>
    <div className="w-full xl:w-1/2 flex justify-end sm:justify-center items-center">
      <div className="w-4/6 sm:w-full p-5">
        <h1 className="tracking-tight font-bold text-black text-center  2xl:text-4xl  sm:text-3xl leading-relaxed ">Ambassador App</h1>
        <br />
        <p className="text-gray-800 mt-2 2xl:text-2xl text-center leading-relaxed  sm:text-xl">

        Includes an updated UI/UX, a controlled environment, fixes for impersonation and fake locations, ambassador profiling and rating, a chauffeur services module, floating ticket solutions, and pre-assigned task acceptance.
        </p>
     
      </div>
    </div>
  </main>
  )
}
