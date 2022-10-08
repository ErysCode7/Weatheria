/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        transparent: "rgba(0,0,0,0.3)",
      },
      backgroundImage: {
        leaves: "url(/images/leaves.jpeg)",
        clouds: "url(/images/clouds.jpg)",
        thunder: "url(/images/thunder.jpg)",
      },
    },
  },
  plugins: [],
};
