/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bg-clear': '#EBF0F6',
      'text-clear': '#1C2331',
      'links-clear': '#6610F2',
      'buttons-clear': '#6610F2',

      'bg-dark': '#1C2331',
      'text-dark': '#FFFFFF',
      'links-dark': '#BF00FF ',
      'buttons-dark': '#BF00FF ',

      'degraded-1': '#3B3B98',
      'degraded-2': '#7B00FF ',
      'degraded-3': '#BF00FF ',
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {},
  },
  plugins: [],
}
