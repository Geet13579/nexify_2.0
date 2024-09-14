import CTABtn from '../CTABtn';

export default function Header() {
  return (

   

    <div className='xl:h-[70vh] sm:h-[50vh]  w-full bg-cover bg-center 3xl:px-[19rem] 2xl:px-60 2xl:py-20 xl:p-20  md:p-10  sm:p-5'  style={{ backgroundImage: `url('/Hero Section (1).png')`}}>

<div className="flex flex-col items-start max-w-xl  2xl:leading-[54px] sm:pt-[100px] 2xl:pl-[18px] sm:pl-[10px] ">
          <h1 className="font-bold lg:text-[56px] md:text-[40px] sm:text-[34px] text-primary leading-snug md:leading-snug">
          Explore Ease
           
            <br />
          </h1>
          <p className="text-[#211C1C] my-[30px] font-medium  2xl:text-[36px] 2xl:leading-[54px]  md:text-[30px] sm:text-[24px]">
          With Tech Enabled Vehicle Care <br className='hidden 2xl:block'/> Ecosystem
          </p>
          <CTABtn />
        </div>
        </div>


  );
} 
 