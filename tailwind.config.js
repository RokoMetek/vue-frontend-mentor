/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      SpaceMono: ["Space Mono", 'monospace']
    },
    colors: {
      'tipBox': 'hsl(183, 100%, 15%)',
      'strongCyan': 'hsl(172, 67%, 45%)',
      'tomato': 'hsl(4, 100%, 67%)',
      'slateGrey': 'hsl(234, 29%, 20%)'
    } 
  },
};
export const plugins = [];

