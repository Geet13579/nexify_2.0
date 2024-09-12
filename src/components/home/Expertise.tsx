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

            <main className=" bg-white 2xl:px-60 sm:px-0 md:px-10 h-auto">
                <div className="w-full flex  ">
                    <div className="w-full ">
                        <div className="w-4/6 sm:w-full 2xl:p-0 sm:p-5 text-center">
                            <h1 className="tracking-tight font-sens  xl:text-[46px]  text-[35px] text-primary   ">Our Expertise</h1>
                            <br />
                            <p className="text-[#827979] mt-2 xl:text-[22px] xl:leading-[33px] text-[18px] leading-[30px] font-regular text-justify xl:text-center">
                            Our team is made up of seasoned professionals with deep expertise in Product
 Development, Technology, Operations, People <br className='hidden xl:block'/> &amp; Culture, and Marketing. This
 diverse skill set allows us to tackle the unique challenges faced by our B2B partners<br className='hidden xl:block'/>
across different automotive sectors.
                        </p>

                        </div>




                    </div>
                </div>
              

            </main>
            <div className='2xl:h-[602px] sm:h-auto my-10 rounded-lg'> 
                    <img src="/Rectangle 32 (1).png" alt="Expertise"  className='object-contain '/>
                  
                </div>
        </div>
    )
}

export default Services