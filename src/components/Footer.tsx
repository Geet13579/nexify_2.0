import Link from 'next/link';

const footerMenu = [
  // {
  //   title: 'Providers',
  //   menu: [{ label: 'How to work with us' }, { label: 'Software integration' }],
  // },
  {
    title: 'Quick Links',
    menu: [
      { label: 'Home', link: '/' },
      // { label: 'Patient', link: '/patient' },
      // { label: 'Medical Provider', link: '/medical-provider' },
      { label: 'Contact us', link: '/contact' },
    ],
  },
  {
    title: 'Products',
    menu: [
      { label: 'Fleet Management', link: '/' },
      { label: 'Vehicle Management', link: '/' },
    ],
  },
  {
    title: 'Legal',
    menu: [
      { label: 'Disclaimer', link: '/' },
      { label: 'Privacy Policy', link: '/' },
    ],
  },
];

const socialMedias = [
  {
    icon: 'linkedin',
    url: '',
  },
  { icon: 'fb', url: '' },
  { icon: 'insta', url: ' ' },
];

export default function Footer() {
  return (
    <footer className="bg-primary px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-20 py-16 border-b border-[#FFFFFF33]">
          <div className="md:max-w-xs w-full flex flex-col items-center md:items-start gap-8">
            <Link href={'/'}>
              <img alt="logo" src={'/logo.svg'} height={30} width={150} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 w-full">
            {footerMenu.map((section) => {
              return (
                <div key={section.title}>
                  <p className="mb-5 font-medium text-white text-center md:text-left text-[#ffffff]">
                    {section.title}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {section.menu.map((item) => (
                      <li
                        key={section.title + item.label}
                        className="text-cLight cursor-pointer text-center md:text-left text-[#89A3B2]"
                      >
                        <Link href={item.link} className="hover:text-secondary text-[#ffffff]">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 md:pt-0">
          <div className="flex items-center justify-center gap-5">
            {socialMedias.map((item) => {
              return (
                <Link key={item.icon} href={item.url} target="_blank">
                  <img
                    src={`/icons/${item.icon}.svg`}
                    alt={item.icon}
                    className="object-contain h-7"
                  />
                </Link>
              );
            })}
          </div>
          <p className="text-cLight py-10 text-[#ffffff]">
            © {new Date().getFullYear()} Nexify World. All Rights Reserved.
          </p>
        </div>
        {/* <div className="text-cLight py-5 flex flex-col md:flex-row items-center justify-between border-t border-cLight/20">
          <span>Contact Us:</span>
          <p className="text-center md:text-left">
            Billing Question: 9009566516 • Billing Question: 9009566516 •
            Billing Question: 9009566516 • Billing Question: 9009566516{' '}
          </p>
        </div> */}
      </div>
    </footer>
  );
}
