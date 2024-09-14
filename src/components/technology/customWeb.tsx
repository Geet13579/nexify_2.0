import React from 'react'
import Link from 'next/link';

function service() {
  return (
<>

<main className="flex flex-col-reverse   lg:flex-row md:flex-row md:px-10  2xl:px-60 sm:px-0 py-5 h-50 bg-cover">

<div className="w-full xl:w-1/2 my-4 flex items-center pl-0 sm:pl-[40px] 2xl:justify-start md:justify-center  sm:justify-center">

  <img className="object-contain h-auto h-[500px]" src="/techonolgy/Group 481811 (5).png" alt="Robot Group" />



</div>
<div className="w-full xl:w-1/2 flex justify-end xl:justify-center items-center ">
  <div className="lg:w-4/5 w-full p-5">
    <h1 className="tracking-tight font-bold text-black lg:text-left text-center xl:text-[36px]  text-[25px] ">Customer Web<br className='hidden md:block'/> Interface</h1>
    <br />
    <p className="text-[#211E1E] mt-2  text-center xl:text-[20px] lg:leading-[33px] text-[18px] leading-[33px] font-regular  text-justify">

    Our Customer Web Interface is a B2B2C application that allows end users to track their vehicles in real time, access a digital inventory of services, and view detailed invoices. This intuitive platform ensures full transparency and offers a seamless experience for users to manage all
    </p>
 
  </div>
</div>
</main>
</>
  )
}

export default service