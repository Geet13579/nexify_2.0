const points = [
  {
    label: 'Visit Labs',
    desc: 'Visit labs that are powered by Theranize.',
  },
  {
    label: 'Conduct tests',
    desc: 'Undergo testing procedures within the powered labs.',
  },
  {
    label: 'Get secure reports',
    desc: 'Receive reports of your tests as soon as they are ready on your app.',
  },
];

export default function GetStarted() {
  return (
    <div className="bg-[#F9F9F9] flex flex-col items-center py-28">
      <h2 className="text-4xl font-semibold text-primary px-5">
        It&apos;s easy to
        {/* <br className="md:hidden" /> */}
        <span className="text-secondary"> get started.</span>
      </h2>
      <p className="text-[#6E6E6E] max-w-3xl text-center mt-8 leading-normal px-5">
        Getting a lab test shouldn&apos;t be complicated. So we&apos;ve made it
        incredibly simple. We&apos;ve also made it a lot more affordable,
        comfortable, and much more human.
      </p>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 px-5">
        {points.map((item, index) => {
          return (
            <div key={item.label} className="flex flex-col items-center gap-5">
              <div className="h-52 flex items-end">
                <div
                  className={`bg-white rounded-full p-3 shadow-cShadow ${
                    index === 1 ? 'md:h-52 md:w-52 h-48 w-48' : 'h-48 w-48'
                  }`}
                >
                  <div className="bg-secondary rounded-full w-full h-full flex items-center justify-center">
                    <img
                      src={`/icons/gs${index + 1}.svg`}
                      alt={item.label}
                      className={`object-contain h-14 ${
                        index === 1 ? 'md:scale-110' : ''
                      }`}
                    />
                  </div>
                </div>
              </div>
              <h6 className="font-medium text-lg mt-5">{item.label}</h6>
              <p className="text-center max-w-72 text-[#6E6E6E]">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
