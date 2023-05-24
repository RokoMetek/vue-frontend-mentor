/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      SpaceMono: ["Space Mono", 'monospace']
    }
  },
};
export const plugins = [];

