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
        brand: {
          primary: 'var(--brand-primary)',     // #7C3AED - vivid purple
          secondary: 'var(--brand-secondary)', // #A78BFA - soft lavender
          accent: 'var(--brand-accent)',       // #C084FC - light purple
        },
        gray: {
          900: '#0B0F13',  // Black
          800: '#111827',  // Dark Gray
          700: '#1F2937',  // Gray
          100: '#F3F4F6',  // Light Gray
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'lg': '16px',
        'xl': '24px',
      },
      boxShadow: {
        'card': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.16)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))',
      },
    },
  },
  plugins: [],
};

export default config;
