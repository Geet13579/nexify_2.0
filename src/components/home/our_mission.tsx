
export default function Solution() {
  return (

    <>


      <main className="flex flex-col md:flex-row   2xl:px-44 sm:px-0 py-5  h-50 ">

        <div className="w-full xl:w-1/2 my-4 flex items-center">

          <img className="object-contain " src="/our_vission.png" alt="Robot Group" />



        </div>
        <div className="w-full xl:w-1/2 flex justify-end sm:justify-center items-center">
          <div className="w-4/6 sm:w-full p-5">
            <h1 className="tracking-tight font-bold text-primary  2xl:text-6xl  sm:text-4xl leading-relaxed ">Our Mision</h1>
            <br />
            <p className="text-gray-500 mt-2 2xl:text-2xl leading-relaxed  sm:text-xl">

            We strive to transform vehicle management experience and convenience through our Vehicle-Tech Platform, enhancing efficiency, saving time, and fostering the business growth of our partners.
            </p>
         
          </div>
        </div>
      </main>


      <main className="flex flex-col-reverse   md:flex-row   2xl:px-44 sm:px-0 py-5  h-50 ">

        <div className="w-full  my-4 flex items-center sm:justify-center">
          <div className="w-4/6 sm:w-full p-5">
            <h1 className="tracking-tight font-bold text-primary  2xl:text-6xl  sm:text-4xl leading-relaxed ">Our Vision</h1>
            <br />
            <p className="text-gray-500 mt-2 2xl:text-2xl leading-relaxed  sm:text-xl">

            Be the most trusted global provider of digital vehicle management and convenience services, empowering businesses to operate seamlessly and efficiently.
            </p>

          </div>
        </div>
        <div className="w-full  flex justify-end">
          <img className="object-contain " src="/our_vission.png" alt="Robot Group" />


        </div>
      </main>
    
    </>



  );
}
