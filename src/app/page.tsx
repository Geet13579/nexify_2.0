import DashboardIntro from '@/components/home/DashboardIntro';
import Header from '@/components/home/Header';
// import MarketOpportunity from '@/components/home/market_Opportunity';
// import Footer from '@/components/Footer';
import OurMission from '@/components/home/our_mission';
import LearnPage from '@/components/home/Learn'
import ServicePage from '@/components/home/Services'
import ServePage from '@/components/home/serve';
import WhyPartner from '@/components/home/WhyPatners'
import Expertise from '@/components/home/Expertise'
import Technology from '@/components/home/Technology'
import MobileView from '@/components/home/mobileView'
import ContactPage from '@/components/home/ContactUs'








export default function Home() {
  return (
    <>

{/* <Navbar /> */}
<Header />
<DashboardIntro />

<main className="flex flex-col md:flex-row  bg-primary 2xl:px-40 sm:px-5 md:px-10 py-10  h-50 ">
  <div className="w-full xl:w-1/2 my-4 flex items-center ">
    <div className="w-full ">
      <h1 className="tracking-tight font-bold text-white  2xl:text-8xl  sm:text-2xl leading-relaxed ">Fast, Reliable, Hassle-Free!</h1>
      <br/>
      <p className="text-white mt-2 2xl:text-3xl leading-relaxed  sm:text-sm text-justify font-regular">Connect with top service centers, schedule pick-ups, and track repairs effortlessly.</p>
      <div className='flex pt-8 '>
      <img className="object-contain 2xl:h-auto  h-[40px]" src="/play.png" alt="play strore" />

      <img className="object-contain 2xl:h-auto  h-[40px]" src="/app.png" alt="app store" />

      </div>
    </div>
  </div>
  <div className="w-full xl:w-1/2 flex justify-end md:justify-center sm:justify-center">
    <img className="object-contain 2xl:h-auto md:h-[500px] sm:h-[400px]" src="/Group 481798.png" alt="Robot Group" />
  </div>
</main>
<OurMission/>
<LearnPage/>
<ServicePage/>
<ServePage/>
<WhyPartner/>
<Expertise/>
<Technology/>
<MobileView/>
<ContactPage/>







    
      {/* <Header />
      <DashboardIntro />
      <Solution />
      <MarketOpportunity /> */}

    </>
  );
}
