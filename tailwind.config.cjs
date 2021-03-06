const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			fontFamily: {
				headline: "Playfair Display, sans-serif",
				general: "Inter, sans-serif",
			}
		},
	},
	plugins: [],
};

module.exports = config;
