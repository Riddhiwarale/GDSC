const colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000",
  white: "#fff",
  gray: {
    faint: "#757575",
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
  blue: {
    100: "#e3f2fd",
    200: "#bbdefb",
    300: "#90caf9",
    400: "#64b5f6",
    500: "#42a5f5",
    600: "#2196f3",
    core: "#4285f4",
  },
  red: {
    100: "#FFEBEE",
    200: "#FFCDD2",
    300: "#EF9A9A",
    400: "#E57373",
    500: "#EF5350",
    600: "#F44336",
    core: "#EA4335",
  },
  yellow: {
    100: "#FFF8E1",
    200: "#FFECB3",
    300: "#FFE082",
    400: "#FFD54F",
    500: "#FFCA28",
    600: "#FFC107",
    core: "#FBBC04",
  },
  green: {
    100: "#E8F5E9",
    200: "#C8E6C9",
    300: "#A5D6A7",
    400: "#81C784",
    500: "#66BB6A",
    600: "#4CAF50",
    core: "#34A853",
  },
  headerColor: {
    heading: "#EA4335",
  },
  slickBackground: "#F3F8FF",
  underlineColor: {
    color: "#4285f4",
  },
  paracolor: "#555",
  topcolor: "#333",
  btncolor: "#3060FF",
  redc: "#EA4335",
  bluec: "#4285F4",
  greenc: "#34A853",
  yellowc: "#FBBC05",
};
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "	768px",
      lg: "	1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors,
    extend: {
      backgroundImage:{
        "landingUrl":"url('/src/assets/images/LandingImages/particles2.png')"
      },
    
      // screens: {
      //   xs: "400px",
      // },
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(auto-fill, minmax(200px, 1fr))",
      },
      maxWidth: {
        custom: "900px",
      },
      height: {
        240: "240px",
        135: "135px",
        landing: "171vh",
        landingPage: "100vh",
        mlandingpage: "90vh",
        mheight: "260px",
        lheight: "400px",
        eheight: "500px",
      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        210: "210px",
        lwidth: "600px",

        // landing: "100vw",
      },
      fontSize: {
        gfont: "19px",
        join: "10px",
        exl: "40px",
        exsl: "30px",
        mfont: "19px",
        lfont: "20px",
        landingfont: "15px",
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
};
