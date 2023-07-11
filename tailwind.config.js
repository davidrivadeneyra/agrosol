// /** @type {import('tailwindcss').Config} */

module.exports = {
	// mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			tablet: '960px',
			desktop: '1248px',
		},
		colors: {
			gray: {
				100: 'hsl(var(--gray-100), <alpha-value>)',
				200: 'hsl(var(--gray-200), <alpha-value>)',
				600: 'hsl(var(--gray-600), <alpha-value>)',
				700: 'hsl(var(--gray-700), <alpha-value>)',
				800: 'hsl(var(--gray-800), <alpha-value>)',
				900: 'hsl(var(--gray-900), <alpha-value>)',
			},
			blue: {
				100: 'hsl(var(--blue-100), <alpha-value>)',
				200: 'hsl(var(--blue-200), <alpha-value>)',
				500: 'hsl(var(--blue-500), <alpha-value>)',
			},
			orange: {
				100: 'hsl(var(--orange-100), <alpha-value>)',
				200: 'hsl(var(--orange-200), <alpha-value>)',
				500: 'hsl(var(--orange-500), <alpha-value>)',
			},
			green: {
				100: 'hsl(var(--green-100), <alpha-value>)',
				200: 'hsl(var(--green-200), <alpha-value>)',
				600: 'hsl(var(--green-500), <alpha-value>)',
				700: 'hsl(var(--green-700), <alpha-value>)',
				800: 'hsl(var(--green-800), <alpha-value>)',
				900: 'hsl(var(--green-900), <alpha-value>)',
			},
			purple: {
				100: 'hsl(var(--purple-100), <alpha-value>)',
				200: 'hsl(var(--purple-200), <alpha-value>)',
				600: 'hsl(var(--purple-500), <alpha-value>)',
				700: 'hsl(var(--purple-700), <alpha-value>)',
				800: 'hsl(var(--purple-800), <alpha-value>)',
				900: 'hsl(var(--purple-900), <alpha-value>)',
			},
			red: {
				100: 'hsl(var(--red-100), <alpha-value>)',
				200: 'hsl(var(--red-200), <alpha-value>)',
				600: 'hsl(var(--red-500), <alpha-value>)',
				700: 'hsl(var(--red-700), <alpha-value>)',
				800: 'hsl(var(--red-800), <alpha-value>)',
				900: 'hsl(var(--red-900), <alpha-value>)',
			},
			yellow: {
				100: 'hsl(var(--yellow-100), <alpha-value>)',
				200: 'hsl(var(--yellow-200), <alpha-value>)',
				600: 'hsl(var(--yellow-500), <alpha-value>)',
				700: 'hsl(var(--yellow-700), <alpha-value>)',
				800: 'hsl(var(--yellow-800), <alpha-value>)',
				900: 'hsl(var(--yellow-900), <alpha-value>)',
			},
		},
		extend: {},
	},
	plugins: [],
}
