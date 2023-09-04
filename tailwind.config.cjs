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
				'background': '#21252a',
				'text': '#f9f3ff',
			}
		},
	},
	plugins: [],
}
