import React from 'react'
import Link from 'next/link';

function service() {
  return (
    <>
      <main className=" 2xl:px-[20rem] 2xl:px-60 sm:px-5 md:px-10 3xl:mt-40 2xl:mt-40 xl:mt-40 lg:mt-48 sm:mt-48 md:mt-48  h-50 ">

        <div className="w-4/6 sm:w-full text-center" >
          <h1 className="tracking-tight font-bold  text-black  lg:text-[46px] text-[33px]">Network Partner Interface</h1>
          <br />
          <p className="text-gray-500 text-[18px] lg:text-[22px] lg:leading-[35px] leading-[30px] font-regular text-justify ">

            The Network Partner Interface is a dynamic, multi-device B2B platform designed for seamless task and booking assignment within our technology ecosystem. It empowers our network partners to efficiently manage workflows, monitor performance, and coordinate operations from any location. Additionally, the platform offers robust reporting capabilities, enabling data-driven insights to optimize performance and support strategic decisionmaking for superior operational outcomes.
          </p>

        </div>

        <div className="flex flex-col md:flex-row 2xl:mt-20 mt-0 ">


          <div className="w-full xl:w-1/2 my-4 flex items-center justify-around">
            <div className="w-full  my-4 flex items-center sm:justify-left">
              <div className="xl:w-4/6 w-full p-5">
                <h1 className="tracking-tight font-bold text-black xl:text-[36px]  text-[30px]  xl:text-left text-center mb-8">Ambassador App</h1>

                <p className="text-[#211E1E] mt-2 font-regular  xl:text-[20px] lg:leading-[33px] text-[18px] leading-[33px] text-justify ">

                  The Ambassadors App enables our Ambassadors to log in from anywhere, view assigned tasks, and manage their duties with ease. With a streamlined interface, it facilitates realtime tracking of assignments and efficient handling our clients’ needs, ensuring that Ambassadors stay organized and responsive to client needs effortlessly.
                </p>

              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex justify-end md:justify-center sm:justify-center">
            <img className="object-contain 2xl:h-auto md:h-[500px] sm:h-[400px]" src="/techonolgy/Group 481811 (4).png" alt="Robot Group" />
          </div>
        </div>
      </main>
    </>
  )
}

export default service