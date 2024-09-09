const points = [
  {
    title: 'Loss or Damage',
    desc: 'We protect your health records from loss or damage, ensuring data integrity in any situation.',
  },
  {
    title: 'Inaccessibility',
    desc: 'Access your health records instantly, even in emergencies, eliminating paper hassles.',
  },
  {
    title: 'Security',
    desc: 'We secure your health data with robust protocols against theft and copying.',
  },
  {
    title: 'Privacy',
    desc: 'We ensure privacy with robust security for confidential data protection.',
  },
  {
    title: 'One Click Sharing',
    desc: 'With one click you can share your health records with any healthcare provider.',
  },
  {
    title: 'Organizational challenges',
    desc: 'We simplify your life with our digital records-keeping solution.',
  },
];

export default function HealthData() {
  return (
    <div className="flex flex-col items-center pb-28 pt-20">
      <div className="max-w-3xl flex flex-col items-center text-primary px-5">
        <h2 className="text-3xl md:text-4xl font-semibold text-center leading-tight">
          Secure Your <span className="text-secondary">Health Data.</span>
        </h2>
        <p className="max-w-3xl text-center mt-5 leading-normal text-[#9E9E9E]">
          We ensure privacy, security, and confidentiality, empowering
          individuals to access and manage their diagnostic results with ease.
        </p>
      </div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 px-5">
        {points.map((item, index) => {
          return (
            <div key={item.title} className="flex flex-col gap-5">
              <div
                className={`bg-[#F9F9F9] rounded-full p-2 mx-auto h-24 w-24`}
              >
                <div className="bg-secondary rounded-full w-full h-full flex items-center justify-center">
                  <img
                    src={`/icons/p${index + 1}.svg`}
                    alt={item.title}
                    className="object-contain h-7"
                  />
                </div>
              </div>
              <h6 className="font-medium text-lg text-center">{item.title}</h6>
              <p className="text-center text-[#6E6E6E]">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
