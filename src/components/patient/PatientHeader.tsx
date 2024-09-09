import AppStoreIcons from '../AppStoreIcons';

export default function PatientHeader() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5 md:pb-28 md:pt-20 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full flex flex-col items-start justify-center order-2 md:order-1">
        <div className="flex flex-col max-w-md mt-10 md:mt-0">
          <h1 className="font-semibold text-4xl md:text-5xl text-primary leading-snug md:leading-snug">
            Own your <span className="text-secondary">health</span>
          </h1>
          <p className="text-[#6E6E6E] mt-8 font-light">
            You have control over your data. Your results remain private,
            secure, and confidential, and are accessible as soon as they are
            finalized.
          </p>
          <div className="mt-14">
            <small className="text-sm text-primary font-bold">
              Available Soon On
            </small>
            <AppStoreIcons />
          </div>
        </div>
      </div>
      <div className="w-full relative order-1 md:order-2 px-5 md:px-0">
        <div className="absolute -bottom-4 left-0 h-16 w-16 md:-bottom-8 md:-left-14 md:h-36 md:w-36 bg-secondary/70 rounded-lg backdrop-blur" />
        <img src="/header2.jpg" alt="header" className="object-contain" />
      </div>
    </div>
  );
}
