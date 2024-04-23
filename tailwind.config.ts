import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'main-600': '#37523D',
        'main-400': '#879A8D',
        'main-800': '#224E33',
        'main-200': '#B7C2BB',
        'main-900': '#02190C',
        'secondary-50': '#0C3E20',
        'secondary-200': '#AEFDBF',
        'secondary-400': '#8CE19F',
      },
      keyframes: {
        'mount-component': {
          '0%': { opacity:'0' },
          '100%': { opacity:'1' },
        }
      },
      animation: {
        'mount-component': 'mount-component 0.3s ease-in-out'
      }
    },
  },
  plugins: [],
};
export default config;
