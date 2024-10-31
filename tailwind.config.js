/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    screens: {
      xs: "0px", // Extra small devices (portrait phones, less than 576px)
      sm: "576px", // Small devices (landscape phones, 576px and up)
      md: "768px", // Medium devices (tablets, 768px and up)
      lg: "992px", // Large devices (desktops, 992px and up)
      xl: "1200px", // Extra large devices (large desktops, 1200px and up)
      xxl: "1400px", // Extra extra large devices (larger desktops, 1400px and up)
    },
    container: {
      center: true,
      screens: {
        xs: "100%", // Default for extra small devices
        sm: "540px", // Small devices
        md: "720px", // Medium devices
        lg: "960px", // Large devices
        xl: "1140px", // Extra large devices
        xxl: "1320px", // Extra extra large devices
      },
    },
    keyframes: {
      floating: {
        "0%": { transform: "translateY(-6px)" },
        "100%": { transform: "translateX(6px)" },
      },
      smooth: {
        "0%": { transform: "scale(1.1)", opacity: 0.5 },
        "100%": { transform: "scale(1)", opacity: 1 },
      },
      scrollver: {
        "0%": {
          transform: "translateX(0%) ",
        },
        "100%": { transform: "translateX(-100%)" },
      },
      scale_up: {
        "0%": { transform: "scale(0.5)", opacity: 0.5 },
        "100%": { transform: "scale(1)", opacity: 1 },
      },

      fade: {
        "0%": { opacity: 1 },
        "100%": { opacity: 0 },
      },
      progress: {
        "0%": { width: "0%" },
        "100%": { width: "100%" },
      },
      downUp: {
        "0%": {
          transform: "translateY(30px)",
          opacity: 0,
        },
        "100%": {
          transform: "translateY(0px)",
          opacity: 1,
        },
      },
    },
    animation: {
      smooth: "smooth 2s linear",
      floating: "floating 3s linear infinite",
      scrollver: "scrollver 8s linear 2s infinite",
      scale_up: "scale_up 1s linear",
      fade: "fade 2s linear",
      progress: "progress 2s forwards 1.5s",
      downUp: "downUp 0.5s  linear 1s",
    },
  },
};
export const plugins = [];
