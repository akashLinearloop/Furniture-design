import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "1rem",
        xl: "3rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(182.67deg, rgba(255, 255, 255, 0.7) -96.84%, rgba(255, 255, 255, 0) 130.25%)",
        "button-gradient":
          "linear-gradient(182.67deg, rgba(20, 20, 20, 0.7) -96.84%, rgba(20, 20, 20, 0.7) 130.25%)",
        "card-gradient":
          "linear-gradient(180deg, #333E2C 0%, rgba(61, 61, 61, 0) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
