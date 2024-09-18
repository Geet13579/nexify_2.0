
'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { fadeIn } from '@/app/animation/variant'
const WhyPartners = [

    {
        title: "Network Partner Interface",
        desc: "Features Google Maps integration, HTTPS security, a reporting module, and a progressive, mobile-responsive web app. It also supports chauffeur services for stockyard movement and test-drive management.",
        icon: '/techonolgy/image 51.png'

    },

    {
        title: "Support Module",
        desc: "Integrates multiple telephony systems, offers a new UI/UX to boost productivity, provides prompt-based ticket resolution, and includes agent quality analysis reports.",
        icon: '/techonolgy/image 52.png'

    },

    {
        title: "Manufacturer Dashboard",
        desc: "Integrates with Dealer Management Systems, provides PAN India dealer information, digital feedback analysis, and booking trend insights..",
        icon: '/techonolgy/image 53.png'

    },

    {
        title: "Customer App",
        desc: "Includes a white-labeled Progressive Web App with pick-up & drop services, DRSA, and a new UI/UX.",
        icon: '/techonolgy/image 49.png'

    },


    {
        title: "Fleet Partner Interface",
        desc: "Supports multi-city bookings, access to multiple service centers, and API integration.",
        icon: '/techonolgy/image 48.png'

    },
    {
        title: "Database",
        desc: "Features scalability, de-normalized tables, and adaptability for internationalization.",
        icon: '/techonolgy/image 47.png'

    },

]


const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.2, transition: { duration: 0.5 } }
  };


function Services() {
    return (
        <div>

            <main className=" bg-white 2xl:px-60 sm:px-5 md:px-10   h-auto" id="technology">


                <div className="w-full flex  ">


                    <div className="w-full ">
                        <AnimatePresence>
                            <motion.div
                                variants={fadeIn("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}>
                                <div className="w-4/6 sm:w-full xl:px-5  mt-5 text-left">

                                    <h1 className="tracking-tight font-bold  text-primary  xl:text-[46px]  text-[30px] text-left ">Technology</h1>
                                    <br />
                                    <p className="text-[#827979] mt-2 lg:text-[22px] xl:leading-[33px] text-[18px] leading-[30px] text-justify lg:text-left font-regular">

                                        All technology and intellectual properties are developed in-house, providing us with <br className='hidden xl:block' />complete control and ensuring top-notch quality and reliability.
                                    </p>

                                </div>
                            </motion.div>
                        </AnimatePresence>



                    </div>
                </div>

                <div className=" my-12 mx-auto p-5">
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">

                        {WhyPartners.map((data, index) => {

                            return (
                                <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                    <AnimatePresence>
                                        <motion.div
                                            variants={index == 0 || index == 1 || index == 2 ? fadeIn("down", 0.2) : fadeIn("up", 0.2)}
                                            initial="hidden"
                                            whileInView={"show"}>

                                            <motion.article
                                            whileHover={{scale:1.1}}
                                            className="overflow-hidden rounded-lg shadow-sm bg-colorLight border border-gray-400  2xl:h-[300px] md:h-[300px] sm:h-auto ">

                                                <header className=" leading-tight p-10 md:p-8 sm:p-5">
                                                    <ul className='list-none  '>
                                                        <li className="2xl:text-2xl sm:text-lg font-medium pb-2">

                                                            <img src={data.icon} className='h-[60px] w-[60px]' alt="images" />

                                                        </li>

                                                        <li className="text-[20px] xl:text-[24px] font-medium pt-5">

                                                            {data.title}

                                                        </li>

                                                        <li className="font-medium ">
                                                            <p className="pt-5 text-[16px] lg:text-[16px]  text-[#655C5C] leading-[26px]  font-regular  ">
                                                                {data.desc}
                                                            </p>
                                                        </li>
                                                    </ul>

                                                </header>
                                        

                                            </motion.article>
                                        </motion.div>
                                    </AnimatePresence>

                                </div>

                            )
                        })}


                    </div>
                </div>

            </main>
        </div>
    )
}

export default Services