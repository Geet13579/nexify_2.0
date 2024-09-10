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

            <main className=" bg-white 2xl:px-40 sm:px-0 pt-14  md:px-10 h-auto" id="partners">
                <div className="w-full flex  ">
                    <div className="w-full ">
                        <div className="w-4/6 sm:w-full 2xl:p-0 sm:p-5 text-center">
                            <h1 className="tracking-tight font-bold  text-primary  2xl:text-4xl  sm:text-2xl leading-relaxed ">Why Partner with Nexify World?</h1>
                            <br />
                            <p className="text-gray-500 mt-2 2xl:text-2xl leading-relaxed  sm:text-sm font-regular text-justify">

                                We empower our partners with our Vehicle-Tech Platform, enhancing customer convenience and satisfaction by saving time. And Foster business growth and seamless operations.ss
                            </p>

                        </div>




                    </div>
                </div>
                <div className=" my-12 mx-auto p-5">
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                      
                      {WhyPartners.map((data, index)=>{

                        return(
                            <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        
                            <article className="overflow-hidden rounded-lg shadow-sm bg-colorLight border border-gray-400">

                                <header className=" leading-tight p-10 md:p-8">
                                    <ul className='list-disc px-5'>
                                    <li className="2xl:text-xl sm:text-sm font-medium">
                                        
                                            {data.title}
                                 
                                    </li>
                                    </ul>
                                    <ul className='list-none px-5'>
                                    <li className="text-2xl font-medium">
                                    <p className=" text-sm text-gray-500 pt-5 font-regular">
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