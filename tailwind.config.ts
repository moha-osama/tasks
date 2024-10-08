import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      xs: "0px",
      sm: "600px",
      lsm: "723px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    fontFamily: {
      plusJakarta: ["var(--font-plus_Jakarta_Sans)"],
    },
  },
  plugins: [],
};
export default config;
