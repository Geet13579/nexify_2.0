const points = [
  {
    title: 'Cost Savings',
    desc: 'Labs can save on digitization costs and transition to a paperless operation.',
  },
  {
    title: 'Efficient Reporting',
    desc: 'Labs can easily send reports directly to patients and doctors, eliminating communication barriers.',
  },
  {
    title: 'Centralized Menu Listing',
    desc: 'Labs can list their services in one place, making it easy for all stakeholders to access.',
  },
  {
    title: 'Seamless API Integration',
    desc: 'Labs can easily connect with our APIs, streamlining their operations..',
  },
  {
    title: 'Special Membership',
    desc: 'Labs can become special members and receive a trusted mark on our app, attracting more orders.',
  },
  {
    title: 'Enhanced Visibility',
    desc: 'Labs can increase their visibility in specific areas, leading to more orders at a special cost.',
  },
];

export default function Commitment() {
  return (
    <div className="flex flex-col items-center pb-28 md:pt-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-center leading-tight max-w-3xl text-primary">
        Lab Solutions made <span className="text-secondary">Easy</span>
      </h2>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 px-5">
        {points.map((item, index) => {
          return (
            <div key={item.title} className="flex flex-col gap-5">
              <div
                className={`bg-[#F9F9F9] rounded-full p-2 mx-auto h-24 w-24`}
              >
                <div className="bg-secondary rounded-full w-full h-full flex items-center justify-center">
                  <img
                    src={`/icons/l${index + 1}.svg`}
                    alt={item.title}
                    className={`object-contain ${index === 4 ? 'w-10' : 'w-7'}`}
                  />
                </div>
              </div>
              <h6 className="font-medium text-lg text-center text-primary">
                {item.title}
              </h6>
              <p className="text-center text-[#6E6E6E]">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
