/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
		extend: {
			fontFamily: {
				sans: ["DM Sans", ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'background-dark': '#181a1b',
				'background-light': '#37363a',
				'text': '#f9f3ff',
				'gradient-start': '#555c69',
				'gradient-end': '#584859',
				'accent-1': '#e6d3ff',
				'accent-2': '#ffc6a6',
			}
		},
	},
	plugins: [],
}
