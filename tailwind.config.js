// /** @type {import('tailwindcss').Config} */

module.exports = {
	// mode: 'jit',
	content: [
		'./page/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			tablet: '768px',
			desktop: '1248px',
		},
		colors: {
			base: {
				white: 'hsl(var(--white), <alpha-value>)',
			},
			gray: {
				100: 'hsl(var(--gray-100), <alpha-value>)',
				200: 'hsl(var(--gray-200), <alpha-value>)',
				600: 'hsl(var(--gray-600), <alpha-value>)',
				700: 'hsl(var(--gray-700), <alpha-value>)',
				800: 'hsl(var(--gray-800), <alpha-value>)',
				900: 'hsl(var(--gray-900), <alpha-value>)',
			},
			blue: {
				200: 'hsl(var(--blue-200), <alpha-value>)',
				300: 'hsl(var(--blue-300), <alpha-value>)',
				500: 'hsl(var(--blue-500), <alpha-value>)',
				700: 'hsl(var(--blue-700), <alpha-value>)',
				800: 'hsl(var(--blue-800), <alpha-value>)',
				900: 'hsl(var(--blue-900), <alpha-value>)',
			},
			orange: {
				200: 'hsl(var(--orange-200), <alpha-value>)',
				300: 'hsl(var(--orange-300), <alpha-value>)',
				500: 'hsl(var(--orange-500), <alpha-value>)',
			},
			green: {
				200: 'hsl(var(--green-200), <alpha-value>)',
				300: 'hsl(var(--green-300), <alpha-value>)',
				500: 'hsl(var(--green-500), <alpha-value>)',
				700: 'hsl(var(--green-700), <alpha-value>)',
				800: 'hsl(var(--green-800), <alpha-value>)',
				900: 'hsl(var(--green-900), <alpha-value>)',
			},
			purple: {
				200: 'hsl(var(--purple-200), <alpha-value>)',
				300: 'hsl(var(--purple-300), <alpha-value>)',
				500: 'hsl(var(--purple-500), <alpha-value>)',
				700: 'hsl(var(--purple-700), <alpha-value>)',
				800: 'hsl(var(--purple-800), <alpha-value>)',
				900: 'hsl(var(--purple-900), <alpha-value>)',
			},
			red: {
				200: 'hsl(var(--red-200), <alpha-value>)',
				300: 'hsl(var(--red-300), <alpha-value>)',
				500: 'hsl(var(--red-500), <alpha-value>)',
				700: 'hsl(var(--red-700), <alpha-value>)',
				800: 'hsl(var(--red-800), <alpha-value>)',
				900: 'hsl(var(--red-900), <alpha-value>)',
			},
			yellow: {
				200: 'hsl(var(--yellow-200), <alpha-value>)',
				300: 'hsl(var(--yellow-300), <alpha-value>)',
				500: 'hsl(var(--yellow-500), <alpha-value>)',
				700: 'hsl(var(--yellow-700), <alpha-value>)',
				800: 'hsl(var(--yellow-800), <alpha-value>)',
				900: 'hsl(var(--yellow-900), <alpha-value>)',
			},
		},
		fontSize: {
			bodyWebRegularBase: [
				'1.063rem',
				{ lineHeight: '180%', fontWeight: '400' },
			],
			bodyWebRegularLarge: [
				'1.313rem',
				{ lineHeight: '180%', fontWeight: '400' },
			],
			bodyWebBoldBase: [
				'1.063rem',
				{ lineHeight: '180%', fontWeight: '600' },
			],
			bodyWebBoldLarge: [
				'1.313rem',
				{ lineHeight: '180%', fontWeight: '600' },
			],
			bodyWebItalicBase: [
				'1.063rem',
				{ lineHeight: '180%', fontStyle: 'italic', fontWeight: '400' },
			],
			bodyWebItalicLarge: [
				'1.313rem',
				{ lineHeight: '180%', fontStyle: 'italic', fontWeight: '400' },
			],

			bodyMobileRegularBase: [
				'.938rem',
				{ lineHeight: '180%', fontWeight: '400' },
			],
			bodyMobileRegularLarge: [
				'1.125rem',
				{ lineHeight: '180%', fontWeight: '400' },
			],
			bodyMobileBoldBase: [
				'.938rem',
				{ lineHeight: '180%', fontWeight: '600' },
			],
			bodyMobileBoldLarge: [
				'1.125rem',
				{ lineHeight: '180%', fontWeight: '600' },
			],
			bodyMobileItalicBase: [
				'.938rem',
				{ lineHeight: '180%', fontStyle: 'italic', fontWeight: '400' },
			],
			bodyWebItalicLarge: [
				'1.125rem',
				{ lineHeight: '180%', fontStyle: 'italic', fontWeight: '400' },
			],

			headingWebBigger: [
				'3rem',
				{ lineHeight: '120%', fontWeight: '800' },
			],
			headingWebBig: [
				'1.75rem',
				{ lineHeight: '120%', fontWeight: '800' },
			],
			headingWebBigSemibold: [
				'1.75rem',
				{ lineHeight: '120%', fontWeight: '600' },
			],
			headingWebBase: [
				'1.188rem',
				{ lineHeight: '120%', fontWeight: '800' },
			],
			headingWebSmall: [
				'1rem',
				{ lineHeight: '120%', fontWeight: '600' },
			],
			headingMobileBigger: [
				'2.25rem',
				{ lineHeight: '120%', fontWeight: '800' },
			],
			headingMobileBig: [
				'1.313rem',
				{ lineHeight: '120%', fontWeight: '800' },
			],
			headingMobileBigSemibold: [
				'1.313rem',
				{ lineHeight: '120%', fontWeight: '600' },
			],
			headingMobileBase: [
				'1.063rem',
				{ lineHeight: '120%', fontWeight: '800' },
			],
			headingMobileSmall: [
				'.875rem',
				{ lineHeight: '120%', fontWeight: '600' },
			],
		},
		fontFamily: {
			body: 'body, sans-serif',
			heading: 'heading, sans-serif',
		},
		extend: {
			padding: {
				structurePadding: '2.5rem',
			},
			margin: {
				structureMargin: '2.5rem',
			},
		},
	},
	plugins: [],
}
