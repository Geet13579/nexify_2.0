import React from 'react'

function Header() {
  return (
    <div>
{/* 
<div className='xl:h-[70vh] sm:h-[60vh]  w-full bg-cover bg-center xl:p-40  md:p-20 ' style={{ backgroundImage: `url('/Rectangle 48.png')` }}>


<div className="flex flex-col items-start w-full 2xl:mt-[200px] md:mt-[220px] sm-mt-0  ">
                <h1 className="font-bold lg:text-[150px] sm:text-[100px] text-white leading-snug md:leading-snug">
                    Meet the <br /> Nexify <br /> <span className='text-black'>Team!</span>


                </h1>

            </div>
</div> */}
    <div className='xl:h-[70vh] sm:h-[50vh]  w-full bg-cover bg-center xl:p-40  md:p-20 mb-10 '  style={{ backgroundImage: `url('/Rectangle 48.png')`}}>

<div className="flex flex-col items-start max-w-xl 2xl:pt-[180px]  xl:pt-[180px]  lg:pt-[100px] md:pt-[80px] sm:pt-[100px] 2xl:pl-[6px] sm:pl-[20px] ">
<h1 className="font-bold lg:text-[100px] sm:text-[50px] md:text-[100px]  text-white leading-snug md:leading-snug">
                    Meet the <br/>Nexify <br /> <span className='text-black'>Team!</span>


                </h1>

        </div>
        </div>





    </div>
  )
}

export default Header