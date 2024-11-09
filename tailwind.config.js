/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        darkBlue: "var(--darkBlue)",
        paleYellow: "var(--paleYellow)",
        paleYellowOpacity: "var(--paleYellowOpacity)",
        paleGrey: "var(--paleGrey)",
        timberWolf: "var(--timberWolf)",
        silver: "var(--silver)",
        slateGray: "var(--slateGray)",
        aquamarine: "var(--aquamarine)",
        softGreen: "var(--softGreen)",
        green: "var(--green)",
        softBlue: "var(--softBlue)",
        dodgerBlue: "var(--dodgerBlue)",
        lightCoral: "var(--lightCoral)",
        brightPink: "var(--brightPink)",
      },
      screens: {
        ssm: "400px",
        sm: "600px",
        md: "800px",
        lg: "1000px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
