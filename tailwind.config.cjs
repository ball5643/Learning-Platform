/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			display: ['group-focus'],	
			keyframes: {
				wave: {
				  '0%': { opacity: 0, transform: 'translateX(-20%)'},
				  '100%': { opacity: 1, transform: 'translateX(0%)'},
				},
			  },
			  animation: {
				'waving-hand': 'wave 0.3s ease-in',
			  },
			  colors: {
				  darkgray: '#ffffffc2',
				  grayone: '#f3f4f6',
				  graytwo: '#e5e7eb',
				  graythree: '#d1d5db',
				  grayfive: '#6b7280',
				  purplebg: '#300033',
				  darkpurple: '#260029',
				  lightpurple: '#451a47',
				  grape: '#59335c',
				  pink: '#f0f',
				  lightpink: '#ff33ff',
				  darkpink: '#cc00cc',
				  aqua: '#33f8ff',
				  green: '#bf3'
			  }
		},
	},
	plugins: [],
}
