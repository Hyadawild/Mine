/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      0: "0",
      45: "45deg",
      90: "90deg",
      135: "135deg",
      180: "180deg",
      270: "270deg",
    },
    extend: {
      fontFamily: {
        Header: ["'Poppins'", "sans-serif"],
        Text2: ["'Nunito'", "sans-serif"],
        About: ["'Poppins'", "sans-serif"],
        Arimo: ["'Nunito'", "sans-serif"],
        anime: ["'Teko'", "sans-serif"],
      },
      colors: {
        AAprimary: "#1a1b2a", // Dark anime-style background
        AAsecondary: "#f44c7f", // Vibrant pink accent
        AAError: "#ff6489",
        AAtertiary: "#2c2f47", // Darker accent
        ResumeButtonHover: "#f44c7f",
        MobileNavBarColor: "#1a1b2a",
        StartupBackground: "#13141f",
        animeAccent: "#7e3ace", // Purple accent
        animePrimary: "#f44c7f", // Pink primary
        animeSecondary: "#64ffdb", // Cyan secondary
        animeText: "#e2e8f0", // Light text
        animeBg: {
          dark: "#1a1b2a",
          light: "#2c2f47",
        },
      },
      animation: {
        glitch: "glitch 1s infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        shine: "shine 2s infinite",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "33%": { transform: "translate(-5px, 3px)" },
          "66%": { transform: "translate(5px, -3px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 10px #f44c7f, 0 0 20px #f44c7f" },
          "50%": { textShadow: "0 0 20px #7e3ace, 0 0 30px #7e3ace" },
        },
        shine: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-anime": "linear-gradient(45deg, #f44c7f, #7e3ace, #64ffdb)",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
  variants: {
    scrollbar: ["rounded"],
  },
}
