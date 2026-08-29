/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBF8F3",
          100: "#F6F1E8",
          200: "#EFE7D6",
        },
        beige: {
          100: "#F0E9DB",
          200: "#E4D9C3",
          300: "#D6C7A8",
        },
        sage: {
          50: "#F1F4EE",
          100: "#E2E9DC",
          200: "#C5D2BC",
          300: "#A4B89A",
          400: "#86A07B",
          500: "#6B8862",
          600: "#55704E",
          700: "#42573D",
        },
        dusty: {
          100: "#E4E8EC",
          200: "#C9D2DB",
          300: "#A8B6C4",
          400: "#8499AC",
        },
        terra: {
          100: "#F4E1D2",
          200: "#E9C6AE",
          300: "#D79B78",
          400: "#C7825C",
          500: "#B86F4D",
          600: "#A85D40",
          700: "#874A35",
        },
        charcoal: {
          700: "#3D3A36",
          800: "#2B2926",
          900: "#1F1D1B",
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(61, 58, 54, 0.12)",
        card: "0 12px 40px -16px rgba(61, 58, 54, 0.18)",
        lift: "0 24px 60px -20px rgba(61, 58, 54, 0.25)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(1.5deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
