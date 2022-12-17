/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./shared/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            lightGray: "#f3f3f3",
            lightBlue: "#a9d1ff",
            buttonBlue: "#348CD7",
            orange: "#f56f3a",
         },
      },
   },
   plugins: [],
};
