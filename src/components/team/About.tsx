'use client'
import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

import {fadeIn} from '@/app/animation/variant'

function about() {
  return (


    <>

<motion.main
    variants={fadeIn("right", 0.5)}
    initial="hidden"
    transition={{ type: "spring", stiffness: 100 }}
    whileInView={"show"} className="flex flex-col md:flex-row   3xl:px-[20rem] 2xl:px-[15rem] sm:px-5 xl:px-20  2xl:py-5 sm:py-10   h-50 ">

      <div  className="flex flex-wrap ">

          <div className="my-1  w-full md:full lg:my-4  lg:w-1/2 flex justify-start">

            <article className="overflow-hidden rounded-lg flex flex-col justify-start">

              <header className=" leading-tight p-5 sm:p-0">
                <h1 className="tracking-tight font-bold text-primary  xl:text-[46px]  text-[35px]">Priti Arya</h1>
                <br />

                <div className=' w-full'>
                <p className="text-[#686868] mt-2 font-regular xl:text-[20px] text-[18px] xl:leading-[30px] leading-[30px] text-justify">

                  Priti Arya is a qualified interior designer and a successful business person over last 2 decades, she is a NRI and well travelled over many countries across the globe. She has led a team of designers while executing many projects, ran a successful trading business and is an avid investor. Apart from travel she has a strong understanding of current affairs and issues impacting business environment. She also has experience in handling and interacting with multiple ethnicities and nationalities.</p>


                  <div className='flex flex-row mt-10 hidden lg:flex'>
                  <div className='w-4/6 md:w-full '>
                    <p className='xl:text-[24px] text-[18px] pb-2 font-medium'>Priti Arya</p>
                    <p  className='xl:text-[16px] text-[16px] font-regular'>Co-Founder, Nexify World</p>
                  </div>
                  <div className='w-full '>
                    <ul className='flex flex-row '>
                    <li className='mr-5'>
                      <a href='https://www.instagram.com/nexifyworld.in/' target="blank">

                        <img src="/social_media/insta.png" />
                        </a>
                      </li>

                      <li className='mr-5'>
                      <a href='https://www.facebook.com/profile.php?id=61564470342360/' target="blank">

                        <img src="/social_media/Group 481858.png" />
                        </a>
                      </li>

                      <li className='mr-5'>
                      <a href='https://www.linkedin.com/company/nexify-world-explore-the-ease/' target="blank">

                        <img src="/social_media/linkdin.png" />
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
                  </div>
               
              </header>

            </article>

          </div>


          <div className="my-1 px-1 w-full md:full lg:my-4 lg:px-4 lg:w-1/2 w-full  flex xl:justify-end  justify-center">

            <article className="overflow-hidden rounded-lg ">

              <header className=" leading-tight p-10 md:p-0 sm:p-0">
                <img className="object-contain h-[492px] w-[492px]" src="/our_team/Group 481809 (9).png" alt="Robot Group" />
                <div className='flex flex-row mt-10 lg:hidden block justify-around'>
                  <div className="w-full ">
                    <p className='xl:text-[24px] text-[18px] pb-2 font-medium'>Priti Arya</p>
                    <p  className='xl:text-[16px] text-[16px] font-regular'>Co-Founder, Nexify World</p>
                  </div>
                  <div className='w-full xl:w-[70%]'>
                    <ul className='flex flex-row '>
                    <li className='mr-5'>
                      <a href='https://www.instagram.com/nexifyworld.in/' target="blank">

                        <img src="/social_media/insta.png" />
                        </a>
                      </li>

                      <li className='mr-5'>
                      <a href='https://www.facebook.com/profile.php?id=61564470342360/' target="blank">

                        <img src="/social_media/Group 481858.png" />
                        </a>
                      </li>

                      <li className='mr-5'>
                      <a href='https://www.linkedin.com/company/nexify-world-explore-the-ease/' target="blank">

                        <img src="/social_media/linkdin.png" />
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
              </header>

            </article>


          </div>


        </div>

        
      
      </motion.main>



      <motion.main
    variants={fadeIn("left", 0.2)}
    initial="hidden"
    transition={{ type: "spring", stiffness: 100 }}
    
    whileInView={"show"} className="flex flex-col md:flex-row   3xl:px-[20rem] 2xl:px-[15rem] sm:px-5 xl:px-20  2xl:py-5 sm:py-10   h-50 ">

        <div className="flex flex-wrap sm:flex-wrap-reverse">

          <div className="my-1  w-full md:full lg:my-4  lg:w-1/2 flex lg:justify-start justify-center">

            <article className="overflow-hidden rounded-lg ">

              <header className=" leading-tight p-10 md:p-0 sm:p-0">
                <img className="object-contain w-[490px] h-[490px]" src="/our_team/Group 481809 (10).png" alt="Robot Group" />


                <div className='flex flex-row mt-10 lg:hidden block justify-around'>
                  <div className='w-4/6 md:w-full  '>
                    <p className='xl:text-[24px] text-[18px] pb-2 font-medium'>Jasmeet Singh</p>
                    <p className='xl:text-[16px] text-[16px] font-regular'>Co-Founder, Nexify World</p>
                  </div>
                  <div className='2xl:w-[50%] md:w-full'>
                    <ul className='flex flex-row '>
                    <li className='mr-5'>
                      <a href='https://www.instagram.com/nexifyworld.in/' target="blank">

                        <img src="/social_media/insta.png" />
                        </a>
                      </li>

                      <li className='mr-5'>
                      <a href='https://www.facebook.com/profile.php?id=61564470342360/' target="blank">

                        <img src="/social_media/Group 481858.png" />
                        </a>
                      </li>

                      <li className='mr-5'>
                      <a href='https://www.linkedin.com/company/nexify-world-explore-the-ease/' target="blank">

                        <img src="/social_media/linkdin.png" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
              </header>

            </article>

          </div>


          <div className="my-1 px-1 w-full md:full lg:my-4 lg:px-4 lg:w-1/2 w-full  flex 2xl:justify-end  md:justify-center">


            <article className="overflow-hidden rounded-lg flex flex-col justify-start">

              <header className=" leading-tight p-5 sm:p-0">
                <h1 className="tracking-tight font-bold text-primary  xl:text-[46px]  text-[35px] ">Jasmeet Singh</h1>
                <br />
                <p className="text-[#686868] mt-2  font-regular xl:text-[20px] text-[18px] xl:leading-[30px] leading-[30px] text-justify">

                Jasmeet Singh is a seasoned entrepreneur and technology leader with over 20 years of experience in the software industry. As the Co -Founder of his own software company, he has successfully led the development and delivery of innovative software solutions that cater to a global clientele. His international experience includes significant work in the UAE, where he gained valuable insights into the Middle Eastern market and built strong business relationships.<br/><br/> His expertise spans across various aspects of software development, project management, and business strategy. With a keen eye for emerging technologies and a commitment to excellence, He continues to drive his company toward growth and success in an ever-evolving digital landscape.</p>

                <div className='flex flex-row mt-10 hidden lg:flex '>
                  <div className='w-4/6 md:w-full  '>
                    <p className='xl:text-[24px] text-[18px] pb-2 font-medium'>Jasmeet Singh</p>
                    <p className='xl:text-[16px] text-[16px] font-regular'>Co-Founder, Nexify World</p>
                  </div>
                  <div className='2xl:w-[50%] md:w-full'>
                    <ul className='flex flex-row '>
                      <li className='mr-5'>
                      <a href='https://www.instagram.com/nexifyworld.in/' target="blank">

                        <img src="/social_media/insta.png" />
                        </a>
                      </li>

                      <li className='mr-5'>
                      <a href='https://www.facebook.com/profile.php?id=61564470342360/' target="blank">

                        <img src="/social_media/Group 481858.png" />
                        </a>
                      </li>

                      <li className='mr-5'>
                      <a href='https://www.linkedin.com/company/nexify-world-explore-the-ease/' target="blank">

                        <img src="/social_media/linkdin.png" />
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
              </header>

            </article>


          </div>


        </div>

        
      </motion.main>
    </>
  )
}

export default about