import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        '1200': '1200px',
      },
      fontSize: {
        'logo': '0.54394rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
