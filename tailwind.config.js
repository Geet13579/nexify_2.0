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
      fontFamily: {
        sans: ['var(--font-geist-sans)'], 
        mono: ['var(--font-geist-mono)'],
        regular: ['var(--font-geist-regular)'],
        medium: ['var(--font-geist-medium)'],
        bold: ['var(--font-geist-bold)'],


      },
      colors: {
        primary: '#FF6702',
        secondary: '#686868',
        tertiary: '#F3DE8A',
        colorLight: '#FFF8F8',
        gradiant1: '#FF6702',
        gradiant2: '#FFFFFF',


      },
      backgroundImage: {
        mobile: 'url("/Group 481791 1 (1).png")',
        team:'url("/Rectangle 48 (1).png")',
        technology:'url("/techonolgy/Group 481849.png")'

        
      },
      
      screens: {

      
        
        'sm': '240px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
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