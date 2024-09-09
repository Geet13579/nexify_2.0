import Link from 'next/link';

export default function CTABtn() {
  return (
    <Link
      href={'/contact'}
      className="flex items-center justify-between gap-5 px-6 rounded-full bg-primary text-white py-3 font-semibold mt-12 hover:ring-2 ring-primary hover:bg-transparent hover:text-primary transition-all duration-300"
    >
      Enquire Now{' '}
      <svg
        width="23"
        height="16"
        viewBox="0 0 23 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.2071 8.70711C22.5976 8.31658 22.5976 7.68342 22.2071 7.29289L15.8431 0.928931C15.4526 0.538407 14.8195 0.538407 14.4289 0.928931C14.0384 1.31946 14.0384 1.95262 14.4289 2.34314L20.0858 8L14.4289 13.6569C14.0384 14.0474 14.0384 14.6805 14.4289 15.0711C14.8195 15.4616 15.4526 15.4616 15.8431 15.0711L22.2071 8.70711ZM0.5 9L21.5 9L21.5 7L0.5 7L0.5 9Z"
          fill="currentColor"
        />
      </svg>
    </Link>
  );
}
