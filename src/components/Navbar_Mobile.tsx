'use client';

import { navMenu } from '@/utils/data';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar_Mobile() {
  const [sideNav, setSideNav] = useState(false);

  return (
    <>
      <span
        className="lg:hidden fill-cBlack rounded-md p-2"
        onClick={() => setSideNav(true)}
      >
        {hamburgerIcon}
      </span>
      <AnimatePresence>
        {sideNav && (
          <motion.div
            key="sideNav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSideNav(false)}
            className="lg:hidden z-50 fixed top-0 left-0 h-screen w-full flex justify-end bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              exit={{ x: '100vw' }}
              transition={{
                ease: 'linear',
                duration: 0.2,
              }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-md w-3/4 lg:hidden overflow-hidden bg-white z-50"
            >
              <div className="flex flex-col items-center justify-center py-10">
                <Link onClick={() => setSideNav(false)} href={'/'}>
                  <img
                    src={'/logo.svg'}
                    alt="logo"
                    className="object-contain h-10"
                  />
                </Link>
              </div>
              <ul className="flex flex-col">
                {navMenu.map((item) => {
                  return (
                    <li
                      key={String(item.label)}
                      onClick={() => setSideNav(false)}
                    >
                      <Link
                        href={item.link}
                        className="block hover:text-primary cursor-pointer py-3 px-5 border-t border-transparent/10"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const hamburgerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="object-cover w-5"
    viewBox="0 0 448 512"
  >
    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
  </svg>
);
