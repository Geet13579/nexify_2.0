import React from 'react'

function aboutTeam() {

    const teamData = [


        {
            title: "Masab Furkan",
            desc: "Technology - Product",
            icon: '/our_team/Group 481809 (11).png'
        },

        {
            title: "Sumeet Prasad",
            desc: "Technology - Architect Design",
            icon: '/our_team/Group 481809 (12).png'
        },
        {
            title: "Kushagra Shukla",
            desc: "Technology - Project Development",
            icon: '/our_team/Group 481809 (13).png'
        },
       
        {
            title: "Geetanjali Jangde",
            desc: "Technology - Designer",
            icon: '/our_team/Group 481809 (14).png'
        },

        {
            title: "V. Satish",
            desc: "Technology Stack",
            icon: '/our_team/Group 481809 (15).png'
        },
        {
            title: "Nikita Agarwal",
            desc: "Marketing",
            icon: '/our_team/Group 481809 (16).png'
        },


    ]
    return (
        <>

            <main className="flex flex-col md:flex-col   2xl:px-[20rem] sm:px-0 xl:px-20 mt-10 2xl:py-5 sm:py-0   h-50 ">
                <div className="w-full flex  ">
                    <div className="w-full ">
                        <div className="w-4/6 sm:w-full 2xl:p-0 sm:p-5 text-left">

                            <h1 className="tracking-tight font-bold  text-black text-[35px] xl:text-[63px]">The Minds Behind Nexify</h1>
                            <br />
                            <p className="text-[#686868] mt-2 xl:text-[26px] text-[22px] xl:leading-[39px] leading-[33px]  text-justify font-regular">

                            Meet the visionary minds who shape Nexify’s path to success. Each leader brings unique expertise<br className='hidden xl:block'/> and a shared passion for creating impactful automotive solutions.
                            </p>

                        </div>




                    </div>
                </div>
                <div className=" my-12 mx-auto px-4 ">
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">

                        {teamData.map((data, index) => {
                            return (
                                <div key={index} className="my-1 px-4 w-full  lg:my-4 lg:px-4 lg:w-1/3 md:w-1/2 flex justify-center">

                                    <article className="overflow-hidden rounded-lg h-[440px] w-[350px] ">
                                        <a href="#">
                                            <img alt="Placeholder" className="block h-auto w-full" src={data.icon} />
                                        </a>
                                        <header className="flex flex-col items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-xl font-bold">

                                                {data.title}

                                            </h1>
                                            <p className="text-[#655C5C] font-regular mt-2 text-[18px]">
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