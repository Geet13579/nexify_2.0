const points = [
  {
    icon: 'w1',
    title: 'Deep Expertise',
    desc: 'We bring exceptional knowledge with years of experience in Generative AI development',
  },
  {
    icon: 'w2',
    title: 'Comprehensive Support',
    desc: 'We bring exceptional knowledge with years of experience in Generative AI development',
  },
  {
    icon: 'w3',
    title: 'Globally Accepted',
    desc: 'We bring exceptional knowledge with years of experience in Generative AI development',
  },
  {
    icon: 'w4',
    title: 'Unified Health System',
    desc: 'We bring exceptional knowledge with years of experience in Generative AI development',
  },
  {
    icon: 'w5',
    title: 'Customized Solutions',
    desc: 'We bring exceptional knowledge with years of experience in Generative AI development',
  },
  {
    icon: 'w6',
    title: 'Cloud Based',
    desc: 'We bring exceptional knowledge with years of experience in Generative AI development',
  },
];
export default function Why() {
  return (
    <div className="flex flex-col items-center pt-20 pb-48 px-5">
      <small className="text-[#6E6E6E] text-sm font-semibold">
        WHY THERANIZE?
      </small>
      <h2 className="text-3xl md:text-4xl text-center font-semibold text-primary mt-4 leading-normal">
        Theranize Advantage: <br className="md:hidden" /> Why Choose Us
      </h2>
      <div className="w-full max-w-7xl mx-auto mt-28 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20">
        {points.map((item) => {
          return (
            <div key={item.title}>
              <div className="flex items-center gap-4">
                <img
                  src={`/icons/${item.icon}.svg`}
                  alt={item.title}
                  className="object-contain h-6"
                />
                <h6 className="text-primary font-semibold text-xl">
                  {item.title}
                </h6>
              </div>
              <p className="mt-3 text-[#6E6E6E] leading-normal">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
