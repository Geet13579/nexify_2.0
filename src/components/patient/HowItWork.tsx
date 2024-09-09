const points = [
  {
    title: 'Visit Labs',
    desc: 'Visit labs that are powered by Theranize.',
  },
  {
    title: 'Conduct tests',
    desc: 'Undergo testing procedures within the powered labs.',
  },
  {
    title: 'Get secure reports',
    desc: 'Receive reports of your tests as soon as they are ready on your app.',
  },
];

export default function HowItWork() {
  return (
    <div className="bg-[#F9F9F9] flex flex-col items-center pb-28 pt-20">
      <h2 className="text-4xl font-semibold text-primary">How it works</h2>
      <p className="text-[#6E6E6E] max-w-3xl text-center mt-5 leading-normal">
        Access diagnostic results through our intuitive platform, anytime,
        anywhere.
      </p>
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 mt-20 px-5">
        <div className="flex flex-col gap-10 text-primary w-full order-2 md:order-1">
          {points.map((item, index) => {
            return (
              <div key={index} className="flex gap-5">
                <div className="w-fit">
                  <span className="bg-primary rounded-full flex items-center justify-center text-white h-10 w-10 text-xl">
                    {index + 1}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h6 className="font-medium text-2xl">{item.title}</h6>
                  <p className="mt-4">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full relative order-1 md:order-2 px-5 md:px-0">
          <div className="absolute -top-4 right-20 h-16 w-16 md:-top-8 md:right-32 md:h-24 md:w-24 bg-secondary/70 rounded-lg backdrop-blur" />
          <img src="/hiw.png" alt="header" className="object-contain w-full" />
        </div>
      </div>
    </div>
  );
}
