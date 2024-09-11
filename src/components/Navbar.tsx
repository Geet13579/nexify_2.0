'use client';
import { navMenu } from '@/utils/data';
import Navbar_Mobile from './Navbar_Mobile';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowUpArrow(true);
      } else {
        setShowUpArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
   
      <nav className="bg-white flex items-center justify-between font-regular  w-full 2xl:px-40 md:px-10 sm:px-5 h-20 z-40 border-b sticky overflow-hidden top-0">
        <Link href={'/'}>
          <img alt="logo" className='2xl:w-40 w-24' src={'/logo.svg'}  />
        </Link>
        <div className="flex items-center gap-10">
          <ul className="hidden lg:flex items-center justify-center gap-8">
            {navMenu.map((item) => (
              <Link
                key={item.label}
                href={item.link}
                className={`cursor-pointer hover:text-secondary ${
                  pathname === item.link
                    ? 'text-secondary font-semibold'
                    : 'text-[#787878]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </ul>
   

<Link
      href={'/contact'}
      className="hidden lg:flex items-center justify-between py-2.5 px-8 text-white bg-primary rounded-lg hover:ring-2 ring-primary hover:bg-transparent hover:text-primary transition-all duration-300 font-semibold relative group"
    > Contact Us{' '}
      </Link>



        </div>
        <Navbar_Mobile />
      </nav>
      <AnimatePresence mode="wait">
        {showUpArrow && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              scrollTo({
                behavior: 'smooth',
                top: 0,
              })
            }
            className="fixed bottom-8 right-10 z-40 rounded-full p-3 bg-primary text-white"
          >
            {uparrow}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

const uparrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="object-contain size-5"
  >
    <path
      fillRule="evenodd"
      d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z"
      clipRule="evenodd"
    />
  </svg>
);

const announcementIcon = (
  <svg
    // width="17"
    // height="19"
    viewBox="0 0 17 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="object-contain h-8 md:h-5"
  >
    <path
      d="M8.54828 11.5692C10.6047 10.9744 14.825 12.7249 14.825 12.7249L11.6529 1.75752C11.6529 1.75752 9.0186 5.49067 6.96221 6.08545M8.54828 11.5692L6.96221 6.08545M8.54828 11.5692L5.12097 12.5605C3.60678 12.9984 2.20286 12.7441 1.58608 10.6116C0.969291 8.47916 2.0207 7.5147 3.53489 7.07674L6.96221 6.08545M4.4355 12.7587L8.07797 17.6476L10.8198 16.8546L7.17736 11.9657M13.8337 9.29761C14.1038 9.21951 14.3558 9.08897 14.5754 8.91347C14.795 8.73796 14.9779 8.52092 15.1136 8.27474C15.2493 8.02856 15.3352 7.75805 15.3664 7.47867C15.3976 7.19928 15.3734 6.91649 15.2953 6.64645C15.2172 6.3764 15.0867 6.12438 14.9112 5.90477C14.7357 5.68517 14.5187 5.50229 14.2725 5.36656C14.0263 5.23084 13.7558 5.14494 13.4764 5.11376C13.197 5.08257 12.9142 5.10673 12.6442 5.18483M9.34132 14.311C10.0268 14.1127 11.1995 13.0308 10.8029 11.6598"
      stroke="#F3DE8A"
      strokeWidth="1.5"
    />
  </svg>
);
