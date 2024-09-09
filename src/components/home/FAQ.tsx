'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function FAQ({
  faqs,
}: {
  faqs: {
    que: string;
    ans: string;
  }[];
}) {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const handleClick = (index: number) => {
    const newOpenIndices = [...openIndices];

    if (newOpenIndices.includes(index)) {
      newOpenIndices.splice(newOpenIndices.indexOf(index), 1);
    } else {
      newOpenIndices.push(index);
    }

    setOpenIndices(newOpenIndices);
  };

  return (
    <div className="py-32 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-5 gap-y-10">
        <div className="flex flex-col w-full max-w-lg">
          <h3 className="text-3xl leading-normal text-cBlack font-light">
            Frequently Asked Question
          </h3>
          <p className="text-[#ADADAD] mt-2">Get Your answers in one step.</p>
        </div>
        <div className="w-full flex flex-col gap-5">
          {faqs.map((item, index) => {
            return (
              <div
                onClick={() => handleClick(index)}
                key={item.que}
                className="bg-[#F6F6F6] px-5 md:px-8 py-5 rounded-lg cursor-pointer"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-primary">{item.que}</p>
                  <motion.span
                    animate={
                      openIndices.includes(index)
                        ? {
                            rotate: 180,
                            transition: { ease: 'linear', duration: 0.3 },
                          }
                        : {
                            rotate: 0,
                            transition: { ease: 'linear', duration: 0.3 },
                          }
                    }
                  >
                    {downArrowIcon}
                  </motion.span>
                </div>
                <AnimatePresence mode="wait">
                  {openIndices.includes(index) && (
                    <motion.div
                      initial="closed"
                      exit="closed"
                      variants={{
                        open: {
                          opacity: 1,
                          height: 'auto',
                          transition: { ease: 'linear', duration: 0.3 },
                        },
                        closed: {
                          opacity: 0,
                          height: 0,
                          transition: { ease: 'linear', duration: 0.3 },
                        },
                      }}
                      animate={openIndices.includes(index) ? 'open' : 'closed'}
                      className="text-[#ADADAD] overflow-hidden"
                    >
                      <hr className="bg-[#00000008] h-[1px] w-full mt-5 inline-block mb-3" />
                      <p>{item.ans}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const downArrowIcon = (
  <svg
    width="10"
    height="7"
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1.4L5 7L10 1.4L8.75 0L5 4.2L1.25 0L0 1.4Z"
      fill="#1F1F1F"
    />
  </svg>
);
