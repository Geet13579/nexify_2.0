import React from 'react'

function about() {
  return (


    <>

      <main className="flex flex-col md:flex-row   2xl:px-40 sm:px-5 xl:px-20  2xl:py-5 sm:py-10   h-50 ">

        <div className="flex flex-wrap ">

          <div className="my-1  w-full md:full lg:my-4  lg:w-1/2 flex justify-start">

            <article className="overflow-hidden rounded-lg flex flex-col justify-start">

              <header className=" leading-tight p-5 sm:p-0">
                <h1 className="tracking-tight font-bold text-primary  2xl:text-6xl  sm:text-2xl leading-relaxed ">About Priti</h1>
                <br />
                <p className="text-[#686868] mt-2 2xl:text-lg font-regular sm:text-sm  leading-relaxed  text-justify">

                  Priti Arya is a qualified interior designer and a successful business person over last 2 decades, she is a NRI and well travelled over many countries across the globe. She has led a team of designers while executing many projects, ran a successful trading business and is an avid investor. Apart from travel she has a strong understanding of current affairs and issues impacting business environment. She also has experience in handling and interacting with multiple ethnicities and nationalities.</p>

                <div className='flex flex-row mt-10 '>
                  <div className='w-4/6 md:w-full '>
                    <p className='2xl:text-[15px] sm:text-[13px]'>Priti Arya</p>
                    <p  className='2xl:text-[15px] sm:text-[13px]'>Co-Founder, Nexify World</p>
                  </div>
                  <div className='2xl:w-[50%] md:w-full'>
                    <ul className='flex flex-row '>
                      <li className='mr-5'>
                        <img src="/social_media/insta.png" />
                      </li>

                      <li className='mr-5'>
                        <img src="/social_media/linkdin.png" />
                      </li>
                      <li className='mr-5'>
                        <img src="/social_media/twitter.png" />
                      </li>

                    </ul>
                  </div>
                </div>
              </header>

            </article>

          </div>


          <div className="my-1 px-1 w-full md:full lg:my-4 lg:px-4 lg:w-1/2 w-full  flex 2xl:justify-end  md:justify-center">

            <article className="overflow-hidden rounded-lg ">

              <header className=" leading-tight p-10 md:p-0 sm:p-0">
                <img className="object-contain " src="/our_team/Group 481809.png" alt="Robot Group" />

              </header>

            </article>

          </div>


        </div>
      </main>



      <main className="flex flex-col md:flex-row   2xl:px-40 sm:px-5 xl:px-20  2xl:py-5 sm:py-10   h-50 ">

        <div className="flex flex-wrap sm:flex-wrap-reverse">

          <div className="my-1  w-full md:full lg:my-4  lg:w-1/2 flex 2xl:justify-start sm:justify-center">

            <article className="overflow-hidden rounded-lg ">

              <header className=" leading-tight p-10 md:p-0 sm:p-0">
                <img className="object-contain " src="/our_team/Group 481809 (1).png" alt="Robot Group" />

              </header>

            </article>

          </div>


          <div className="my-1 px-1 w-full md:full lg:my-4 lg:px-4 lg:w-1/2 w-full  flex 2xl:justify-end  md:justify-center">


            <article className="overflow-hidden rounded-lg flex flex-col justify-start">

              <header className=" leading-tight p-5 sm:p-0">
                <h1 className="tracking-tight font-bold text-primary  2xl:text-6xl  sm:text-2xl leading-relaxed ">About Jasmeet Singh</h1>
                <br />
                <p className="text-[#686868] mt-2 2xl:text-md font-regular  leading-relaxed  sm:text-md text-justify">

                Jasmeet Singh is a seasoned entrepreneur and technology leader with over 20 years of experience in the software industry. As the Co -Founder of his own software company, he has successfully led the development and delivery of innovative software solutions that cater to a global clientele. His international experience includes significant work in the UAE, where he gained valuable insights into the Middle Eastern market and built strong business relationships.<br/><br/> His expertise spans across various aspects of software development, project management, and business strategy. With a keen eye for emerging technologies and a commitment to excellence, He continues to drive his company toward growth and success in an ever-evolving digital landscape.</p>

                <div className='flex flex-row mt-10 '>
                  <div className='w-4/6 md:w-full  '>
                    <p className='2xl:text-[15px] sm:text-[13px]'>Jasmeet Singh</p>
                    <p className='2xl:text-[15px] sm:text-[13px]'>Co-Founder, Nexify World</p>
                  </div>
                  <div className='2xl:w-[50%] md:w-full'>
                    <ul className='flex flex-row '>
                      <li className='mr-5'>
                        <img src="/social_media/insta.png" />
                      </li>

                      <li className='mr-5'>
                        <img src="/social_media/linkdin.png" />
                      </li>
                      <li className='mr-5'>
                        <img src="/social_media/twitter.png" />
                      </li>

                    </ul>
                  </div>
                </div>
              </header>

            </article>


          </div>


        </div>
      </main>
    </>
  )
}

export default about