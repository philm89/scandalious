/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      gridTemplateColumns:
      {
        '80/20': '80% 20%',
        'fixed': '40px 260px',
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [],
};
