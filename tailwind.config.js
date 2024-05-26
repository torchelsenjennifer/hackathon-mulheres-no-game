/** @type {import('tailwindcss').Config} */

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	content: [],
	theme: {
	  extend: {
		colors: {
		  primary: {
			black: `#000000`,
			white: `#ffffff`,
		  },
		  secondary: {
			darkGray: `#141414`,
			lightGray: `#5B5B5B`,
			red: `#A9001E`,
		  },
		  error: {
			red: `#EC3657`
		  }
		},
		maxWidth: {
		  'half': '50%',
		},
		padding: {
		  'smpx': '1px',
		},
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px', // Telas maiores
		}
	  },
	},
	plugins: [],
  }
