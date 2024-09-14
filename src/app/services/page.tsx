import React from 'react'
import ServicePage from '@/components/home/Services'
import ServePage from '@/components/home/serve';

import ContactPage from '@/components/home/ContactUs'
import LearnPage from '@/components/home/Learn'

import MobileView from '@/components/home/mobileView'

function page() {
  return (
    <div>
        <ServicePage/>
        <ServePage/>
        <LearnPage/>

        <ContactPage/>

    </div>
  )
}

export default page