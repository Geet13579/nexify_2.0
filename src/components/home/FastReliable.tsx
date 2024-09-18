'use client'

import React from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn } from '@/app/animation/variant'

function FastReliable() {
  return (

    <main className="flex flex-col md:flex-row  bg-primary  3xl:px-[20rem] 2xl:px-60 sm:px-5 md:px-10 xl:px-20 py-10  h-50 ">
      <div className="w-full xl:w-1/2 my-4 flex items-center ">
        <div className="w-full ">
          <motion.h1
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className="tracking-tight font-bold text-white xl:text-[76px] xl:leading-[100px] leading-[70px] text-[50px]">Fast, Reliable, <br />Hassle-Free!</motion.h1>
          <motion.p
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"} className="text-white lg:mt-10 mt-5 xl:text-[36px] text-[24px] xl:leading-[54px]  leading-[38px] 
        text-justify font-medium">Connect with top service centers,<br className='hidden xl:block' /> schedule pick-ups, and track <br className='hidden xl:block' />repairs effortlessly.</motion.p>
          
          
          <motion.div
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      whileInView={"show"} className='flex pt-8 '>
            <img className="object-contain lg:h-[53px]  h-[40px]" src="/pngwing.com (6) 2 (1).png" alt="play strore" />

            <img className="object-contain lg:h-[53px]  h-[40px]" src="/pngwing.com (6) 1 (1).png" alt="app store" />

          </motion.div>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"} className='font-medium lg:text-[16px]  text-[14px]'>Download the Nexify App Today!</motion.p>
        </div>
      </div>
      <div className="w-full xl:w-1/2 flex justify-end md:justify-center sm:justify-center">
        <motion.img
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        
        className="object-contain 2xl:h-auto md:h-[500px] sm:h-[400px]" src="/Group 481810.png" alt="Robot Group" />
      </div>
    </main>
  )
}

export default FastReliable