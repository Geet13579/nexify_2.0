import React from 'react'
import Service from '@/components/technology/service'
import Header from '@/components/technology/header'
import WhyPartner from '@/components/home/WhyPatners'
import Expertise from '@/components/home/Expertise'
import Technology from '@/components/home/Technology'
import CustomWeb from '@/components/technology/customWeb'
import FastReliable from '@/components/home/FastReliable'

import ContactPage from '@/components/home/ContactUs'

import MobileView from '@/components/home/mobileView'

function page() {
  return (
    <div>
        <WhyPartner/>
        <Expertise/>
<FastReliable/>

        <ContactPage/>

    </div>
  )
}

export default page