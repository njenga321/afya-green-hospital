/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
          },
          teal: {
            500: "#14b8a6",
            600: "#0d9488",
            700: "#0f766e",
          },
          gold: {
            400: "#fbbf24",
            500: "#f59e0b",
            600: "#d97706",
          },
        },
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #14532d 0%, #0f766e 50%, #1e3a5f 100%)",
        "card-gradient":
          "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        "green-lg": "0 20px 60px -10px rgba(22, 163, 74, 0.3)",
        "card": "0 4px 24px rgba(0,0,0,0.06)",
        "card-hover": "0 20px 48px rgba(0,0,0,0.12)",
        "premium": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
