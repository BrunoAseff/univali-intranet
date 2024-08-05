const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('/background.svg')",
      },
      opacity: {
        74: "0.74",
      },
    },

    darkMode: "class",
  },
  plugins: [
    nextui({
      addCommonColors: true,
      defaultTheme: "light",
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#fff",
            card: "#F4F4F5",
            primary: {
              DEFAULT: "#006FEE",
              foreground: "#FFF",
            },
            focus: "#BEF264",
          },
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
      },
    }),
  ],
};
