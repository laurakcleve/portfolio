/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#21252a',
        text: '#f9f3ff',
      },
      dropShadow: {
        custom: [
          '0px 0.3px 0.5px hsl(214deg 18% 7% / 0.01)',
          '0.1px 6.6px 9.9px hsl(214deg 18% 7% / 0.42)',
          '0.2px 20.6px 30.9px hsl(0deg 0% 0% / 49%)',
        ],
        'custom-small': [
          '0px 0.2px 0.3px hsl(213deg 16% 12% / 0.26)',
          '0px 3.4px 4.5px hsl(213deg 16% 12% / 0.49)',
          '0.1px 12.2px 16.3px hsl(213deg 16% 12% / 0.71)',
        ],
      },
    },
  },
  plugins: [],
}
