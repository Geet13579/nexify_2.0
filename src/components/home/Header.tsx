import CTABtn from '../CTABtn';

export default function Header() {
  return (

   

    <div className='xl:h-[70vh] sm:h-[50vh]  w-full bg-cover bg-center xl:p-40  md:p-20 mb-10'  style={{ backgroundImage: `url('/Hero Section.png')`}}>

<div className="flex flex-col items-start max-w-xl 2xl:pt-[30px] sm:pt-[100px] 2xl:pl-[30px] sm:pl-[50px] ">
          <h1 className="font-bold lg:text-6xl sm:text-3xl text-primary leading-snug md:leading-snug">
          Explore The Ease
           
            <br />
          </h1>
          <p className="text-[#211C1C] mt-8 font-bold 2xl:text-3xl sm:text-xl leading-loose">
          Of Tech Enabled Vehicle Care  Ecosystem
          </p>
          <CTABtn />
        </div>
        </div>


  );
} 
 