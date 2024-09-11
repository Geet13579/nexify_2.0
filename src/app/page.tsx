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
import FastReliable from '@/components/home/FastReliable'








export default function Home() {
  return (
    <>

{/* <Navbar /> */}
<Header />
<DashboardIntro />
<FastReliable/>
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
