import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'logo': '0.54394rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
