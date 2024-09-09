import CTABtn from '../CTABtn';

const points = [
  'You control your health data.',
  'We will never sell or use your information for advertising or marketing.',
  'Your results are private and secure, only accessible to you and your healthcare providers unless you request otherwise.',
  'We believe you should always have control over your data and your health.',
];

export default function Market_Opportunity() {
  return (
    <div className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-x-10 px-5">
        <div className="w-full md:w-7/12 flex flex-col items-start justify-center relative order-2 md:order-1 mt-10 md:mt-0">
          <div className="flex flex-col">
            {/* <small className="text-white text-sm font-semibold">
              OUR SOLUTION
            </small> */}
            <h3 className="font-semibold text-4xl text-primary leading-snug mt-1">
            The  <span className="text-secondary">Problem</span>
            </h3>
            <div className="flex flex-col gap-5 mt-8 text-cP text-[#6E6E6E]">
              <p className="leading-normal md:leading-loose">
              Taking your vehicle to a service station, either for a scheduled
              servicing or for accidental repairs is a very time consuming affair.
              </p>
              <p className="leading-normal md:leading-loose">
              Due to sheer number of cars, dealers are not in a position to 
provide pick n drop’ service to all customers.
              </p>
              <p className="leading-normal md:leading-loose">
              Car owners end of spending money on taxi or waste time in the 
workshop instead of spending time with their loved ones or 
pursuing other important tasks.
              </p>
              <p className="leading-normal md:leading-loose">
              The Covid-19 scenario and now the Omicron threat is also a 
big concern for health conscious customers and they are 
struggling for a practical solution.
              </p>
              
            </div>
            {/* <ul className="flex flex-col gap-3 mt-20 text-white">
              {points.map((item) => (
                <li key={item} className="flex items-center gap-x-5">
                  <hr className="border-tertiary w-10 block" />{' '}
                  <span className="w-fit">{item}</span>
                </li>
              ))}
            </ul> */}
          </div>
          <span className="absolute right-5 md:right-40 -top-24 md:-top-28">
            {solutionPattern1}
          </span>
          <span className="absolute right-5 -bottom-52 md:-bottom-40">
            {solutionPattern2}
          </span>
        </div>
        <div className="w-full md:w-5/12 relative order-1 md:order-2 px-5 md:px-0">
          <div className="absolute -top-4 right-0 h-16 w-16 md:-top-8 md:-right-14 md:h-36 md:w-36 bg-primary/20 rounded-lg backdrop-blur z-30" />
          <img
            src="/problem.png"
            alt="header"
            className="object-contain rounded-2xl overflow-hidden h-full relative z-20"
          />
        </div>
      </div>

   
    </div>
  );
}

const solutionPattern1 = (
  <svg
    width={230}
    height={260}
    viewBox="0 0 230 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 -129V45.3617C3 59.7211 14.6406 71.3617 29 71.3617H201C215.359 71.3617 227 83.0022 227 97.3616V260"
      stroke="url(#paint0_linear_533_486)"
      strokeWidth={6}
    />
    <defs>
      <linearGradient
        id="paint0_linear_533_486"
        x1={3}
        y1="-89.0342"
        x2="162.579"
        y2="250.866"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.485" stopColor="#F7F7F7" />
        <stop offset={1} stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
);

const solutionPattern2 = (
  <svg
    width={136}
    height={227}
    viewBox="0 0 136 227"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 227V136.079C3 121.72 14.6406 110.079 29 110.079H107C121.359 110.079 133 98.4389 133 84.0795V8.76188e-06"
      stroke="url(#paint0_linear_533_485)"
      strokeWidth={6}
    />
    <defs>
      <linearGradient
        id="paint0_linear_533_485"
        x1={3}
        y1="203.678"
        x2="96.4477"
        y2="5.72446"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="0.485" stopColor="#F7F7F7" />
        <stop offset={1} stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
);

const solutionPattern3 = (
  <svg
    width={195}
    height={371}
    viewBox="0 0 195 371"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 -17V170.753C3 185.113 14.6406 196.753 29 196.753H166C180.359 196.753 192 208.394 192 222.753V398"
      stroke="url(#paint0_linear_548_955)"
      strokeWidth={6}
    />
    <defs>
      <linearGradient
        id="paint0_linear_548_955"
        x1={3}
        y1="25.637"
        x2="197.253"
        y2="352.871"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6702 " />
        <stop offset="0.485" stopColor="#686868 " />
        <stop offset={1} stopColor="#FF6702 " />
      </linearGradient>
    </defs>
  </svg>
);
