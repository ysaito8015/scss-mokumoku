// const colors = require('tailwindcss/colors')

module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.njk"],
  theme: {
    screens: {
      pc: { raw: `screen and (min-width: ${768}px), print)` },
      sp: { raw: `screen and (max-width: ${768 - 0.02}px), print)` },
    },
    colors: {
      "white": "#fff",
      "mine-shaft": "#333",
    },
  },
  plugins: [],
}
