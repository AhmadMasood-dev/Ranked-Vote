/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://assets-global.website-files.com/5d9a902248623ef932d0da66/6282c893b9b3495c8d6dc73c_tilted-results-round3-bg.svg')",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        "blue-violet": "#7540ee",
        "cornflower-blue": "#5b7fff",
        "medium-sea-green": "#38cb89",
        "white-smoke": "#ebecf0",
        "silver-2": "#c1c7d0",
        " silver": "#b0b7c3",
        "ghost-white": "#f5f7fd",
        "blue-violet-2": "#5d3eff",
        orange: "#ffab00",
        tomato: "#ff5630",
        lavender: "#e3d9fc",
        honeydew: "#e9f9f0",
        white: "#fafbfc",

        " seashell": "#fff3f1",
        " tomato-2": "#fe3e3e",
        "lavender-2": "#d5dff7",
        " floral-white": "#fffaf1",
        " dark-green": "#36b37e",
        "  blue-white": "#f8fbfe",
        " light-orange": "#fffaf1",

        "dark-purple": "#6023e9",
        "medium-slate-blue": "#5762ff",
      },
    },
  },
  plugins: [],
};
