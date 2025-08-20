/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sansation-regular': ['Sansationregular', 'sans-serif'],
        'sansation-bold': ['Sansationbold', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#004B87',
      },
    },
  },
  plugins: [],
}
