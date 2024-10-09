import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'hsl(24, 96%, 90%)',
          300: 'hsl(24, 96%, 70%)',
          500: 'hsl(24, 96%, 50%)',  // Base: #F36301
          700: 'hsl(24, 96%, 40%)',
          900: 'hsl(24, 96%, 25%)',
        },
        accent: {
          100: 'hsl(74, 25%, 85%)',
          300: 'hsl(74, 25%, 50%)',
          500: 'hsl(74, 25%, 35%)',  // Base: #525938
          700: 'hsl(74, 25%, 30%)',
          900: 'hsl(74, 25%, 15%)',
        },
        neutral: {
          100: 'hsl(0, 0%, 95%)',   // Light grey background
          300: 'hsl(0, 0%, 80%)',   // Light grey borders
          500: 'hsl(0, 0%, 50%)',   // Neutral text color
          700: 'hsl(0, 0%, 30%)',   // Subheadings
          900: 'hsl(0, 0%, 10%)',   // Dark grey for headings
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],   // Regular
        serif: ['Playfair Display', 'serif'], // Bold
      },
    keyframes: {
      //scroll from right to left
      'scroll-right': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
    animation: {
      'scroll-right': 'scroll-right 200s linear infinite',
    }
  },
},
plugins: [
  require('@tailwindcss/forms')
],
} satisfies Config;
