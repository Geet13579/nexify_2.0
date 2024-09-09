export default function PrivacySection() {
  return (
    <div className="bg-secondary text-white flex flex-col items-center pt-20">
      <div className="max-w-4xl flex flex-col items-center px-5">
        <h2 className="text-3xl md:text-4xl font-semibold text-center leading-snug">
          Your body, your health data
        </h2>
        {/* <h3 className="text-xl md:text-2xl mt-3 text-center leading-snug">
          You control your health data.
        </h3> */}
        <p className="max-w-3xl text-center my-8 leading-normal text-white/80 md:leading-normal">
          We will never sell or use your information for advertising or
          marketing. Your results are private and secure, only accessible to you
          . We believe you should always have control over your data and your
          health.
        </p>
        {/* <AppStoreIcons /> */}
      </div>
      <div className="max-w-7xl mx-auto w-full flex items-center mt-5">
        <img src="/hp.png" alt="header" className="object-contain w-full" />
      </div>
    </div>
  );
}
