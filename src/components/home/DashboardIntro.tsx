export default function DashboardIntro() {
  return (
    //     <div className="flex flex-col items-left pt-20 pb-5">
    //       <div className="px-5 flex flex-col items-left">
    //         <h2 className="text-4xl font-semibold text-primary">
    //         Our  <span className="text-secondary">Mission</span>
    //         </h2>
    //         <p className="text-[#6E6E6E] text-cP max-w-3xl text-center mt-4 leading-normal md:leading-loose">
    //        Our Mission is to make lives of car owners easy by not only saving their precious time
    //  during servicing and repairs, but also making them accessible to the entire car
    //  ownership ecosystem. 
    //         </p>

    //       </div>

    //     </div>

    <div className="bg-white flex items-center justify-between w-full 2xl:px-40 sm:px-20 xl:px-20 py-5  h-50 z-40 border-b m">
      <div className="w-full ">
        <h6 className="text-2xl  font-semibold text-black leading-loose">About Our Company</h6>

        <h2 className="text-4xl font-semibold text-primary">Company Overview</h2>
        <br/>

        <p className="text-[#6E6E6E] text-cP   mt-4 leading-normal md:leading-loose">
          Nexify World addresses a critical yet frequently overlooked challenge in the B2B vehicle management sector. We recognize that managing 
          vehicle logistics can be both time-consuming and complex for businesses. Our mission is to simplify these processes, 
          allowing our partners to concentrate on their core operations and enable them elevate customer satisfaction.
          <br/>
          <br/>
           We offer more than just vehicle pick-up and drop-off services; we provide a comprehensive vehicle management ecosystem.
            Our advanced platform enhances these core services by integrating location-based solutions, real-time data, artificial intelligence, 
            and seamless communication. This evolution enables us to save businesses and their clients millions of hours globally, delivering the fastest, 
            safest, and most innovative vehicle assistance solutions. Our dedication to trust, transparency, and convenience sets us apart in the industry.
        </p>

      </div>
    </div>
  );
}
