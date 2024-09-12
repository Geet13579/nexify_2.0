import React from 'react'

const servicesData = [
    {
        tittle:"Vehicle Pick-Up & Drop-Off",
        desc:"Streamline logistics for servicing, repairs, and inspections."
    },

    {
        tittle:"Scheduled Maintenance Management",
        desc:"Efficiently track and manage maintenance schedules to ensure timely service and minimize downtime"
    },

    {
        tittle:"On-Demand Repairs",
        desc:"Access a network of trusted professionals for all types of repairs."

    },

    {
        tittle:"24/7 Roadside Assistance",
        desc:"Receive immediate support for breakdowns and emergencies, available around the clock."

    },

    {
        tittle:"Real-Time Tracking & Updates",
        desc:"Efficiently track and manage maintenance schedules to ensure timely service and minimize downtime"
    },

    {
        tittle:"Transparent Billing",
        desc:"Enjoy clear, upfront pricing with no hidden costs, fostering trust and satisfaction."
    },

]
function Services() {
  return (
    <div>

<main className="flex flex-col md:flex-row  bg-white 2xl:px-60 md:px-10 sm:px-0 py-16 h-auto"  id="services">
  <div className="w-full md:w-[70%] flex  ">
    <div className="w-full ">
    <div className="w-4/6 sm:w-full 2xl:p-0 sm:p-5">
            <h1 className="tracking-tight font-sens text-primary  xl:text-[46px]  text-[35px] xl:text-left  text-center">Our Services</h1>
            <br />
            <p className="text-gray-500  xl:text-[22px] xl:leading-[33px] text-[18px] leading-[30px] font-regular text-justify ">

            Nexify World offers a comprehensive suite of vehicle assistance<br  className='hidden xl:block'/> services tailored for B2B partners
            </p>
         
          </div>

          <div className='h-auto bg-colorLight 2xl:p-20 md:p-5 sm:p-5 my-8'> 
         
            <div className='flex flex-col  h-[750px] justify-around '>
                {servicesData.map((data:any, index:any)=>{
                    return(
                        <>
                         <div className='h-[88px] flex items-center  justify-around'>
                        {/* <div className='2xl:text-2xl md:text-sm sm:text-[12px] font-semibold w-[20%]'>
                            <h1>0 {index+1}</h1>
            
            
                        </div> */}
                        <div className='w-[80%] sm:w-[100%] '>
                            <h1 className='xl:text-[26px]  text-[20px] font-bold'>{data.tittle}</h1>
                            <p className='xl:text-[16px] text-[#655C5C] text-[14px]   font-regular'>{data.desc}</p>
            
            
                        </div>
                    
            
                        </div>
                        <hr />
                        </>

                       

                        
                    )
                })}
       

            </div>
         

           


          </div>

    </div>
  </div>
  <div className="w-full md:w-[50%]   flex justify-end">
    <img className="2xl:object-contain " src="/service.png" alt="Robot Group" />
  </div>
</main>
    </div>
  )
}

export default Services