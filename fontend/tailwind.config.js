/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      colors: {
        main_bg: "var(--main_bg)",
        page_color: "var(--page_color)",
        input_color: "var(--input_color)",
        primary_bg: "var(--primary_bg)",
      },
      fontFamily:{
        gBold: ['Gilroy Black'],
        // gilroylight: ["Gilroy Light"],
        // gilroyMedium: ["Gilroy Medium"],
        // gilroySemiBold: ["Gilroy SemiBold"],
        // gilroyBold: ["Gilroy Bold"],
        // gilroyBlack: ["Gilroy Black"],
      },
    },
  },
  plugins: [],
};
