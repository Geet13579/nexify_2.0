import React from 'react'

function aboutTeam() {

    const teamData = [


        {
            title: "Masab Furkan",
            desc: "Senior Product Designer",
            icon: '/our_team/Group 481809 (3).png'
        },

        {
            title: "Sumeet Prasad",
            desc: "Senior Architect Designer",
            icon: '/our_team/Group 481809 (4).png'
        },
        {
            title: "Kushagra Shukla",
            desc: "Team Lead",
            icon: '/our_team/Group 481809 (5).png'
        },
        {
            title: "V. Satish",
            desc: "Full Stack Developer",
            icon: '/our_team/Group 481809 (6).png'
        },
        {
            title: "Geetanjali Jangde",
            desc: "Lead Developer",
            icon: '/our_team/Group 481809 (7).png'
        },
        {
            title: "Nikita Agarwal",
            desc: "Content Stratgist",
            icon: '/our_team/Group 481809 (8).png'
        },


    ]
    return (
        <>

            <main className="flex flex-col md:flex-col   2xl:px-40 sm:px-0 xl:px-20  2xl:py-5 sm:py-0   h-50 ">
                <div className="w-full flex  ">
                    <div className="w-full ">
                        <div className="w-4/6 sm:w-full 2xl:p-0 sm:p-5 text-left">

                            <h1 className="tracking-tight font-bold  text-black  2xl:text-4xl  sm:text-2xl leading-relaxed ">The Minds Behind Nexify</h1>
                            <br />
                            <p className="text-[#686868] mt-2 2xl:text-xl leading-relaxed  sm:text-md text-justify font-regular">

                                Meet the visionary minds who shape Nexify’s path to success. Each leader brings unique expertise and a shared passion for creating impactful automotive solutions.
                            </p>

                        </div>




                    </div>
                </div>
                <div className=" my-12 mx-auto px-4 ">
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">

                        {teamData.map((data, index) => {
                            return (
                                <div key={index} className="my-1 px-4 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                    <article className="overflow-hidden rounded-lg">
                                        <a href="#">
                                            <img alt="Placeholder" className="block h-auto w-full" src={data.icon} />
                                        </a>
                                        <header className="flex flex-col items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-xl font-bold">

                                                {data.title}

                                            </h1>
                                            <p className="text-[#655C5C] text-sm">
                                                {data.desc}

                                            </p>
                                        </header>

                                    </article>

                                </div>

                            )
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}

export default aboutTeam