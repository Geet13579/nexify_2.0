import React from 'react'

function FastReliable() {
  return (
    
<main className="flex flex-col md:flex-row  bg-primary  3xl:px-[20rem] 2xl:px-60 sm:px-5 md:px-10 xl:px-20 py-10  h-50 ">
  <div className="w-full xl:w-1/2 my-4 flex items-center ">
    <div className="w-full ">
      <h1 className="tracking-tight font-bold text-white xl:text-[76px] xl:leading-[100px] leading-[70px] text-[50px]">Fast, Reliable, <br/>Hassle-Free!</h1>
     
      <p className="text-white lg:mt-10 mt-5 xl:text-[36px] text-[24px] xl:leading-[54px]  leading-[38px]   text-justify font-medium">Connect with top service centers,<br className='hidden xl:block'/> schedule pick-ups, and track <br className='hidden xl:block'/>repairs effortlessly.</p>
      <div className='flex pt-8 '>
      <img className="object-contain lg:h-[53px]  h-[40px]" src="/pngwing.com (6) 2 (1).png" alt="play strore" />

      <img className="object-contain lg:h-[53px]  h-[40px]" src="/pngwing.com (6) 1 (1).png" alt="app store" />

      </div>
      <p className='font-medium lg:text-[16px]  text-[14px]'>Download the Nexify App Today!</p>
    </div>
  </div>
  <div className="w-full xl:w-1/2 flex justify-end md:justify-center sm:justify-center">
    <img className="object-contain 2xl:h-auto md:h-[500px] sm:h-[400px]" src="/Group 481810.png" alt="Robot Group" />
  </div>
</main>
  )
}

export default FastReliable