module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: '#FF6702',
        secondary: '#686868',
        tertiary: '#F3DE8A',
        colorLight: '#FFF8F8',

      },
      backgroundImage: {
        mobile: 'url("/mobile (2).png")',
      },
      screens: {
        'sm': '240px',
        // => @media (min-width: 640px) { ... }
  
        'md': '668px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
  
        '3xl': '1947px',
  
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}