import React from 'react'

const WhyPartners = [

    {
        title: "Tailored Solutions",
        desc: "Customized services designed to meet the unique challenges and needs of your industry."
    },

    {
        title: "Efficiency & Reliability",
        desc: "Harness cutting-edge technology to ensure top-tier efficiency and dependability."

    },

    {
        title: "Enhanced Customer Experience",
        desc: "Provide outstanding service that elevates satisfaction and fosters loyalty."

    },

    {
        title: "Scalable & Flexible",
        desc: "Solutions that adapt and grow with your business, accommodating evolving demands."
    },

    {
        title: "Data-Driven Insights",
        desc: "Provide outstanding service that elevates satisfaction and fosters loyalty."
    },

]



function Services() {
    return (
        <div>

            <main className=" bg-white 2xl:px-60 sm:px-0 pt-14  md:px-10 h-auto" id="partners">
                <div className="w-full flex  ">
                    <div className="w-full ">
                        <div className="w-4/6 sm:w-full 2xl:p-0 sm:p-5 text-center">
                            <h1 className="tracking-tight font-bold  text-primary  lg:text-[46px] text-[33px]">Why Partner with Nexify World?</h1>
                            <br />
                            <p className="text-gray-500 text-[18px] lg:text-[22px] lg:leading-[35px] leading-[30px] font-regular text-justify xl:text-center ">

                            We empower our partners with a cutting-edge Vehicle-Tech platform, streamlining operations and<br className='hidden xl:block'/> enhancing customer convenience by saving time and driving satisfaction. Through innovative technology,<br className='hidden xl:block'/> we enable seamless operations and foster sustainable business growth for our partners.    
                            </p>

                        </div>




                    </div>
                </div>
                <div className=" my-5 mx-auto p-5">
                    <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-center">
                      
                      {WhyPartners.map((data, index)=>{

                        return(
                            <div key={index} className="my-2 px-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        
                            <article className="overflow-hidden rounded-lg shadow-sm bg-colorLight border border-gray-400 ">

                                <header className=" leading-tight p-10 md:p-8 md:h-[210px] h-auto">
                                    <ul className='list-disc px-5'>
                                    <li className="text-[20px] xl:text-[24px] font-medium">
                                        
                                            {data.title}
                                 
                                    </li>
                                    </ul>
                                    <ul className='list-none px-5 py-5'>
                                    <li className="text-2xl font-medium">
                                    <p className="text-[16px] lg:text-[16px]  text-[#655C5C] leading-[26px]  font-regular">
                                        {data.desc}
                                    </p>
                                    </li>
                                    </ul>
                                </header>

                            </article>
                            
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