export default function MedicalHeader() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5 md:pb-28 md:pt-20 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full flex flex-col items-start justify-center order-2 md:order-1">
        <div className="flex flex-col max-w-md mt-10 md:mt-0">
          <h1 className="font-semibold text-4xl md:text-5xl text-primary leading-snug md:leading-snug">
            Better Communication, <br />{' '}
            <span className="text-secondary">Better Care</span>
          </h1>
          <p className="text-[#6E6E6E] my-8 font-light">
            We offer an online LIMS connecting you with patients, integrating
            seamlessly with government agencies for regulatory compliance. Stay
            ahead with our cutting-edge research on healthcare trends.
          </p>
        </div>
      </div>
      <div className="w-full relative order-1 md:order-2 px-5 md:px-0">
        <div className="absolute -bottom-4 left-0 h-16 w-16 md:-bottom-8 md:-left-14 md:h-36 md:w-36 bg-secondary/70 rounded-lg backdrop-blur" />
        <img src="/header3.jpg" alt="header" className="object-contain" />
      </div>
    </div>
  );
}
