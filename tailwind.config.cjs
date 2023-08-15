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
				// 'plum': '#302532',
				'background': '#141e24',
				'text': '#f3ecc0'
			}
		},
	},
	plugins: [],
}
