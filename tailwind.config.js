/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "font-black": ["Poppins-Black", "sans-serif"],
      "font-blackItalic": ["Poppins-BlackItalic", "sans-serif"],
      "font-bold": ["Poppins-Bold", "sans-serif"],
      "font-boldItalic": ["Poppins-BoldItalic", "sans-serif"],
      "font-extraBold": ["Poppins-ExtraBold", "sans-serif"],
      "font-extraBoldItalic": ["Poppins-ExtraBoldItalic", "sans-serif"],
      "font-extraLight": ["Poppins-ExtraLight", "sans-serif"],
      "font-extraLightItalic": ["Poppins-ExtraLightItalic", "sans-serif"],
      "font-italic": ["Poppins-Italic", "sans-serif"],
      "font-light": ["Poppins-Light", "sans-serif"],
      "font-lightItalic": ["Poppins-LightItalic", "sans-serif"],
      "font-medium": ["Poppins-Medium", "sans-serif"],
      "font-mediumItalic": ["Poppins-MediumItalic", "sans-serif"],
      "font-regular": ["Poppins-Regular", "sans-serif"],
      "font-semibold": ["Poppins-SemiBold", "sans-serif"],
      "font-semiboldItalic": ["Poppins-SemiBoldItalic", "sans-serif"],
      "font-thin": ["Poppins-Thin", "sans-serif"],
      "font-thinItalic": ["Poppins-ThinItalic", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "320px",
        md: "640px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
        xxxl: "1920px",
      },
    },
  },
  plugins: [],
};
