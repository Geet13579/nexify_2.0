'use client'
import React from 'react'
import Service from '@/components/technology/service'
import Header from '@/components/technology/header'

import Technology from '@/components/home/Technology'
import CustomWeb from '@/components/technology/customWeb'

import ContactPage from '@/components/home/ContactUs'

import MobileView from '@/components/home/mobileView'
import { AnimatePresence, motion } from "framer-motion";

function page() {
  return (
    // <motion.div
    // initial={{width:0}}
    // animate={{width:"100%"}}
    // exit={{x:window.innerWidth}}
    // >
<>
        <Header/>
        <Service/>
        <CustomWeb/>
        <Technology/>
        <ContactPage/>
        </>


    // </motion.div>
  )
}

export default page