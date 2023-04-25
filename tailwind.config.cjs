module.exports = {
  // darkMode: 'class',
  content: ["./src/**/*.{vue,js,ts}"],
  plugins: [require("@tailwindcss/typography")],

  theme: {
   
    fontFamily: {
      sans: ['"Source Sans Pro"', "Lato", "Epilogue", "sans-serif"],
      mono: ["Ubuntu Mono", "monospace"],
      // 'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  
  },
};
