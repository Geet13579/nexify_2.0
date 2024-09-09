export default function Solutions() {
  return (
    <div className="flex flex-col items-center pb-28 pt-5">
      <h2 className="text-3xl md:text-4xl font-semibold text-center leading-normal max-w-3xl text-primary px-5 md:leading-normal">
        <span className="text-secondary">Enhancing Efficiency</span> Through
        Automation
      </h2>
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16 mt-16">
        <div className="w-full relative px-8">
          <div className="absolute -bottom-4 right-2 h-16 w-16 md:-bottom-8 md:-right-8 md:h-24 md:w-24 bg-secondary/70 rounded-lg backdrop-blur" />
          <img
            src="/solution2.jpg"
            alt="header"
            className="object-contain w-full"
          />
        </div>
        <div className="w-full flex flex-col gap-5 text-primary px-5">
          <h6 className="text-2xl font-semibold">Solutions</h6>
          <p className="leading-normal">
            Our platform automates administrative duties such as appointment
            scheduling and billing, reducing errors and time spent. It fosters
            smooth communication between lab personnel and patients, ensuring
            efficient workflow and timely delivery of results. Furthermore,
            features like inventory management and quality control monitoring
            help maintain high standards and streamline operations.
          </p>
          <p className="leading-normal">
            Our solution enhances administrative coordination, resulting in
            smoother workflows and improved efficiency within diagnostic labs.
          </p>
        </div>
      </div>
    </div>
  );
}
