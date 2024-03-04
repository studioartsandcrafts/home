/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['"Archivo Narrow"', 'Arial Narrow', 'Arial', 'sans-serif'],
		},
		extend: {
			colors: {
				'fg': 'var(--color-fg)',
				'bg': 'var(--color-bg)'
			}
		},
	},
	plugins: [],
}
