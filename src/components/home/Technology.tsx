import React from 'react'

const WhyPartners = [

    {
        title: "Network Partner Interface",
        desc: "Features Google Maps integration, HTTPS security, a reporting module, and a progressive, mobile-responsive web app. It also supports chauffeur services for stockyard movement and test-drive management.",
        icon: '/techonolgy/image 47.png'
    },

    {
        title: "Support Module",
        desc: "Integrates multiple telephony systems, offers a new UI/UX to boost productivity, provides prompt-based ticket resolution, and includes agent quality analysis reports.",
        icon: '/techonolgy/image 48.png'

    },

    {
        title: "Manufacturer Dashboard",
        desc: "Integrates with Dealer Management Systems, provides PAN India dealer information, digital feedback analysis, and booking trend insights..",
        icon: '/techonolgy/image 49.png'
    },

    {
        title: "Customer App",
        desc: "Includes a white-labeled Progressive Web App with pick-up & drop services, DRSA, and a new UI/UX.",
        icon: '/techonolgy/image 51.png'
    },


    {
        title: "Fleet Partner Interface",
        desc: "Supports multi-city bookings, access to multiple service centers, and API integration.",
        icon: '/techonolgy/image 52.png'
    },
    {
        title: "Database",
        desc: "Features scalability, de-normalized tables, and adaptability for internationalization.",
        icon: '/techonolgy/image 53.png'
    },

]



function Services() {
    return (
        <div>

            <main className=" bg-white 2xl:px-40 sm:px-0 md:px-10  h-auto" id="technology">
                <div className="w-full flex  ">
                    <div className="w-full ">
                        <div className="w-4/6 sm:w-full 2xl:p-0 sm:p-5 text-center">

                            <h1 className="tracking-tight font-bold  text-primary  2xl:text-4xl  sm:text-2xl leading-relaxed text-center ">Technology & Intellectual Property</h1>
                            <br />
                            <p className="text-gray-500 mt-2 2xl:text-2xl leading-relaxed  sm:text-sm text-justify font-regular">

                                All technology and intellectual properties are developed in-house, providing us with complete control and ensuring top-notch quality and reliability.
                            </p>

                        </div>




                    </div>
                </div>
                <div className=" my-12 mx-auto p-5">
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">

                        {WhyPartners.map((data, index) => {

                            return (
                                <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                    <article className="overflow-hidden rounded-lg shadow-sm bg-colorLight border border-gray-400  2xl:h-[300px] md:h-[300px] sm:h-auto">

                                        <header className=" leading-tight p-10 md:p-8 sm:p-5">
                                            <ul className='list-none  '>
                                                <li className="2xl:text-2xl sm:text-lg font-medium pb-2">

                                                    <img src={data.icon} className='h-[60px] w-[60px]' alt="images" />

                                                </li>

                                                <li className="2xl:text-xl sm:text-lg pb-2 font-medium">

                                                    {data.title}

                                                </li>

                                                <li className="font-medium ">
                                                    <p className="2xl:text-sm sm:text-sm md:text-sm text-gray-500 pb-2 pt-5 font-regular  ">
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