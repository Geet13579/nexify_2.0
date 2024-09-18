'use client'
import CTABtn from '../CTABtn';

import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

import {fadeIn} from '@/app/animation/variant'

export default function Header() {
  return (

   

    <div className='xl:h-[70vh] sm:h-[50vh]  w-full bg-cover bg-center 3xl:px-[19rem] 2xl:px-60 2xl:py-20 xl:p-20  md:p-10  sm:p-5'  style={{ backgroundImage: `url('/Hero Section (1).png')`}}>

<div  className="flex flex-col items-start max-w-xl  2xl:leading-[54px] sm:pt-[100px] 2xl:pl-[18px] sm:pl-[10px] ">
<motion.h1
    variants={fadeIn("right", 0.2)}
    initial="hidden"
    transition={{ type: "spring", stiffness: 100 }}
    whileInView={"show"}className="font-bold lg:text-[56px] md:text-[40px] sm:text-[34px] text-primary leading-snug md:leading-snug">
          Explore Ease
           
            <br />
          </motion.h1>
       <motion.p
    variants={fadeIn("right", 0.5)}
    initial="hidden"
    transition={{ type: "spring", stiffness: 100 }}
    whileInView={"show"} className="text-[#211C1C] my-[30px] font-medium  2xl:text-[36px] 2xl:leading-[54px]  md:text-[30px] sm:text-[24px]">
          With Tech Enabled Vehicle Care <br className='hidden 2xl:block'/> Ecosystem
          </motion.p>
          < CTABtn />
        </div>
        </div>


  );
} 
 