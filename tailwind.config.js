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
				opa: 'hsl(var(--opa), <alpha-value>)',
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
				500: 'hsl(var(--green-500), <alpha-value>)',
				700: 'hsl(var(--green-700), <alpha-value>)',
				800: 'hsl(var(--green-800), <alpha-value>)',
				900: 'hsl(var(--green-900), <alpha-value>)',
			},
			purple: {
				100: 'hsl(var(--purple-100), <alpha-value>)',
				200: 'hsl(var(--purple-200), <alpha-value>)',
				500: 'hsl(var(--purple-500), <alpha-value>)',
				700: 'hsl(var(--purple-700), <alpha-value>)',
				800: 'hsl(var(--purple-800), <alpha-value>)',
				900: 'hsl(var(--purple-900), <alpha-value>)',
			},
			red: {
				100: 'hsl(var(--red-100), <alpha-value>)',
				200: 'hsl(var(--red-200), <alpha-value>)',
				500: 'hsl(var(--red-500), <alpha-value>)',
				700: 'hsl(var(--red-700), <alpha-value>)',
				800: 'hsl(var(--red-800), <alpha-value>)',
				900: 'hsl(var(--red-900), <alpha-value>)',
			},
			yellow: {
				100: 'hsl(var(--yellow-100), <alpha-value>)',
				200: 'hsl(var(--yellow-200), <alpha-value>)',
				500: 'hsl(var(--yellow-500), <alpha-value>)',
				700: 'hsl(var(--yellow-700), <alpha-value>)',
				800: 'hsl(var(--yellow-800), <alpha-value>)',
				900: 'hsl(var(--yellow-900), <alpha-value>)',
			},
		},
		fontSize: {
			bodyWebRegularBase: [
				'1rem',
				{ lineHeight: '27px', fontWeight: '400' },
			],
			bodyWebRegularLarge: [
				'1.313rem',
				{ lineHeight: '36px', fontWeight: '400' },
			],
			bodyWebBoldBase: [
				'1rem',
				{ lineHeight: '27px', fontWeight: '800' },
			],
			bodyWebBoldLarge: [
				'1.313rem',
				{ lineHeight: '36px', fontWeight: '800' },
			],
			bodyWebItalicBase: [
				'1rem',
				{ lineHeight: '27px', fontSyle: 'italic', fontWeight: '400' },
			],
			bodyWebItalicLarge: [
				'1.313rem',
				{ lineHeight: '36px', fontSyle: 'italic', fontWeight: '400' },
			],

			bodyMobileRegularBase: [
				'0.875rem',
				{ lineHeight: '24px', fontWeight: '400' },
			],
			bodyMobileRegularLarge: [
				'1.125rem',
				{ lineHeight: '31px', fontWeight: '400' },
			],
			bodyMobileBoldBase: [
				'0.875rem',
				{ lineHeight: '24px', fontWeight: '800' },
			],
			bodyMobileBoldLarge: [
				'1.125rem',
				{ lineHeight: '31px', fontWeight: '800' },
			],
			bodyMobileItalicBase: [
				'0.875rem',
				{ lineHeight: '24px', fontSyle: 'italic', fontWeight: '400' },
			],
			bodyWebItalicLarge: [
				'1.125rem',
				{ lineHeight: '31px', fontSyle: 'italic', fontWeight: '400' },
			],
			headingWebBigger: [
				'3rem',
				{ lineHeight: '53px', fontWeight: '500' },
			],
			headingWebBig: [
				'1.75rem',
				{ lineHeight: '31px', fontWeight: '500' },
			],
			headingWebBase: ['1rem', { lineHeight: '19px', fontWeight: '500' }],
			headingMobileBigger: [
				'2rem',
				{ lineHeight: '35px', fontWeight: '500' },
			],
			headingMobileBig: [
				'1.188rem',
				{ lineHeight: '21px', fontWeight: '500' },
			],
			headingMobileBase: [
				'.875rem',
				{ lineHeight: '15px', fontWeight: '500' },
			],
		},
		fontFamily: {
			ui: 'ui, sans-serif',
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
