// import React from 'react'

// function header() {
//   return (
//     <div className='lg:h-[100vh] h-[50vh]   bg-gradient-to-b from-[#FF6702]   to-[#FFFFFF]'>
//       <div className='py-20 xl:px-60 md:px-28 sm:px-10'>
//         <button className='bg-white rounded-lg py-[10px] px-[12px]  xl:text-[26px] lg:text-[20px] md:text-[18px] sm:text-[15px] 360px:text-[18px] text-[#211E1E] font-bold'>Technology Eco System</button>
//         <h2 className='text-white xl:text-[56px] lg:text-[40px] md:text-[40px] sm:text-[20px]  font-bold mt-4 xl:leading-[68px] lg:leading-[55px] md:leading-[53px] sm:leading-[35px]' >Network Partner Interface <br className=''/>Use Anytime, Anywhere</h2>

       
// <div>
//         <img src="techonolgy/Group 481849.png" className='xl:w-full  w-[1200px] object-contain absolute 2xl:top-[200px] xl:top-[240px] lg:top-[240px] sm:top-[275px]  md:top-[269px] 2xl:left-[72px] xl:left-[120px] lg:left-[100px] md:left-[100px] sm:left-[20px]'  alt="technology"/>



// </div>



//       </div>


      

      
//     </div>
//   )
// }

// export default header


'use client'
import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

import {fadeIn} from '@/app/animation/variant'

function header() {
  return (
    <div className='h-[100%]  bg-gradient-to-b from-[#FF6702] motion-safe:animate-fadeIn  to-[#FFFFFF]'>

<div className='absolute 3xl:top-[14rem] 2xl:top-40 xl:top-[9rem] md:top-[9rem] sm:top-[8rem]   3xl:left-100 2xl:left-60 xl:left-[6rem] lg:left-[5rem] md:left-[5rem] sm:left-[1rem]'>
<AnimatePresence>
<motion.div
variants={fadeIn("right", 0.2)}
initial="hidden"
whileInView={"show"}

>
<button className='bg-white rounded-lg py-[10px] px-[12px]  xl:text-[26px] lg:text-[20px] md:text-[18px] sm:text-[15px] 360px:text-[18px] text-[#211E1E] font-bold'>Technology Eco System</button>


<h2 className='text-white xl:text-[56px] lg:text-[40px] md:text-[33px] sm:text-[18px]  font-bold mt-4 xl:leading-[68px] lg:leading-[55px] md:leading-[40px] sm:leading-[35px]' >Network Partner Interface <br className=''/>Use Anytime, Anywhere</h2>
</motion.div>
</AnimatePresence>

</div>
<AnimatePresence>
<motion.div
variants={fadeIn("left", 0.2)}
initial="hidden"
whileInView={"show"}

>
<img src="techonolgy/Group 481849.png" className='pt-[150px]'/> 

</motion.div>
</AnimatePresence>
      {/* <div className='py-20 xl:px-60 md:px-28 sm:px-10'>
        <button className='bg-white rounded-lg py-[10px] px-[12px]  xl:text-[26px] lg:text-[20px] md:text-[18px] sm:text-[15px] 360px:text-[18px] text-[#211E1E] font-bold'>Technology Eco System</button>
        <h2 className='text-white xl:text-[56px] lg:text-[40px] md:text-[40px] sm:text-[20px]  font-bold mt-4 xl:leading-[68px] lg:leading-[55px] md:leading-[53px] sm:leading-[35px]' >Network Partner Interface <br className=''/>Use Anytime, Anywhere</h2>

       
<div>
        <img src="techonolgy/Group 481849.png" className='xl:w-full  w-[1200px] object-contain absolute 2xl:top-[200px] xl:top-[240px] lg:top-[240px] sm:top-[275px]  md:top-[269px] 2xl:left-[72px] xl:left-[120px] lg:left-[100px] md:left-[100px] sm:left-[20px]'  alt="technology"/>



</div>



      </div> */}


      

      
    </div>
  )
}

export default header