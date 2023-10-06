/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        secondary: '#a3e635',
      },
    },
  },

  plugins: [],
};

module.exports = config;
