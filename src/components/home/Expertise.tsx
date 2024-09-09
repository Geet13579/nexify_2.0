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

            <main className=" bg-white 2xl:px-40 sm:px-0 pb-10 h-auto">
                <div className="w-full flex  ">
                    <div className="w-full ">
                        <div className="w-4/6 sm:w-full 2xl:p-0 sm:p-5 text-center">
                            <h1 className="tracking-tight font-bold  text-primary  2xl:text-4xl  sm:text-4xl leading-relaxed ">Our Expertise</h1>
                            <br />
                            <p className="text-gray-500 mt-2 2xl:text-2xl leading-relaxed  sm:text-xl">

                            Our team is made up of seasoned professionals with deep expertise in Product Development, Technology, Operations, People &amp; Culture, and Marketing. This diverse skill set allows us to tackle the unique challenges faced by our B2B partners across different automotive sectors.
                            </p>

                        </div>




                    </div>
                </div>
                <div className='h-[602px] my-10 rounded-lg'> 
                    <img src="/expertise.png" alt="Expertise"  className='object-cover h-full w-full'/>
                  
                </div>

            </main>
        </div>
    )
}

export default Services