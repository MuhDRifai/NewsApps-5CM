module.exports = {
  corePlugins: {
    preflight: false
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "628px" }
      },
      colors: {
        gloomyPurple: "#0000FF",
        gloomyPurpleHover: "#00FFFF",
        gloomyPurpleActive: "#976dbe",
        softPurple: "#f7dbf0",
        veryDarkBlue: "#0d253c",
        veryDarkBlueHover: "#071624",
        veryDarkBlueActive: "#01090f",
        veryPeachy: "#fcd2d7",
        gloomyTeal: "#caf7e3",
        gloomyGrayForText: "#7f7c82"
      }
    }
  },
  plugins: []
};
