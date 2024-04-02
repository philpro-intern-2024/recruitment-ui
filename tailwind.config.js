/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        black: ["Montserrat-Black", "sans-serif"],
        blackItalic: ["Montserrat-BlackItalic", "sans-serif"],
        bold: ["Montserrat-Bold", "sans-serif"],
        boldItalic: ["Montserrat-BoldItalic", "sans-serif"],
        extraBold: ["Montserrat-ExtraBold", "sans-serif"],
        extraBoldItalic: ["Montserrat-ExtraBoldItalic", "sans-serif"],
        extraLight: ["Montserrat-ExtraLight", "sans-serif"],
        extraLightItalic: ["Montserrat-ExtraLightItalic", "sans-serif"],
        italic: ["Montserrat-Italic", "sans-serif"],
        light: ["Montserrat-Light", "sans-serif"],
        lightItalic: ["Montserrat-LightItalic", "sans-serif"],
        medium: ["Montserrat-Medium", "sans-serif"],
        mediumItalic: ["Montserrat-MediumItalic", "sans-serif"],
        regular: ["Montserrat-Regular", "sans-serif"],
        semibold: ["Montserrat-SemiBold", "sans-serif"],
        semiboldItalic: ["Montserrat-SemiBoldItalic", "sans-serif"],
        thin: ["Montserrat-Thin", "sans-serif"],
        thinItalic: ["Montserrat-ThinItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
