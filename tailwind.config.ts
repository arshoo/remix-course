import type { Config } from 'tailwindcss'

export default {
  content: ["./public/index.html",'./app/**/*.{js,jsx,ts,tsx,html}',
            './pages/**/*.{js,jsx,ts,tsx}',
            './build/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

