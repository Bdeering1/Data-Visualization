const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/pages/*.{js,jsx,ts,tsx}', './src/components/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				'3xl': '0 35px 50px -12px rgba(0, 0, 0, 0.3)',
			},
		},
	},
	plugins: [],
};
