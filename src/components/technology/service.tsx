import React from 'react'
import Link from 'next/link';

function service() {
  return (
<>
    
<main className="flex flex-col md:flex-row  2xl:px-60 sm:px-5 md:px-10 xl:px-20 py-10  h-50 ">
  <div className="w-full xl:w-1/2 my-4 flex items-center justify-around">
    <div className="w-full xl:w-1/2 ">
        <div className='h-[50px] w-[260px] bg-primary text-white rounded-md flex justify-center items-center mb-5'>

        <Link
      href={'#contact'} className='text-[16px]'>

Ambassador App (Driver App)
      </Link>
        </div>
      <h1 className="tracking-tight font-bold text-black xl:text-[40px] xl:leading-[55px] leading-[70px] text-[50px] font-bold"><span className='text-primary'>Ambassador App : </span>
      
       Your Partner for On-the-Go 
       
       Service</h1>
     
      
    </div>
  </div>
  <div className="w-full xl:w-1/2 flex justify-end md:justify-center sm:justify-center">
    <img className="object-contain 2xl:h-auto md:h-[500px] sm:h-[400px]" src="/Group 481811 (2).png" alt="Robot Group" />
  </div>
</main>
</>
  )
}

export default service