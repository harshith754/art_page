/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "primary-50": "#edeff6",
        "primary-500": "#4a60a1",
        gray: "rgba(0, 0, 0, 0.5)",
        darkslategray: {
          "100": "#434343",
          "200": "rgba(67, 83, 83, 0.17)",
        },
        "primary-800": "#1e2640",
        "gray-700": "#363a3d",
        "gray-400": "#889099",
        "primary-900": "#0f1320",
      },
      fontFamily: {
        "heading-heading-1": "Inter",
        roboto: "Roboto",
        poppins: "Poppins",
        "reenie-beanie": "'Reenie Beanie'",
      },
      borderRadius: {
        "6xl": "25px",
        "3xs": "10px",
        "81xl": "100px",
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      base: "16px",
      "21xl": "40px",
      xl: "20px",
      "131xl": "150px",
      "111xl": "130px",
      "101xl": "120px",
      "81xl": "100px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
