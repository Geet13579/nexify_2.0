import React from 'react'
import Service from '@/components/technology/service'
import Header from '@/components/technology/header'

import Technology from '@/components/home/Technology'
import CustomWeb from '@/components/technology/customWeb'

import ContactPage from '@/components/home/ContactUs'

import MobileView from '@/components/home/mobileView'

function page() {
  return (
    <div>
        <Header/>
        <Service/>
        <CustomWeb/>
        <Technology/>
        <ContactPage/>

    </div>
  )
}

export default page