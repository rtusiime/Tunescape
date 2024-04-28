/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '/index.html',
    './src/index.css',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        bilabong: ['bilabong', 'sans-serif'], // Fall back to sans-serif if CustomFont fails to load
        lobster: ['lobster', 'pokemon'], // Fall back to cursive if CustomFont fails to load
        pokemon: ['pokemon', 'sans-serif'], // Fall back to sans-serif if CustomFont fails to load
      },
      colors: {
        isabelline: {
          DEFAULT: '#F7F1EA',
          100: '#46311a',
          200: '#8b6335',
          300: '#c2935e',
          400: '#dcc2a3',
          500: '#f7f1ea',
          600: '#f8f3ed',
          700: '#faf6f2',
          800: '#fcf9f6',
          900: '#fdfcfb',
        },
        prussian_blue: {
          DEFAULT: '#123149', 
          100: '#040a0f',
          200: '#07141d',
          300: '#0b1e2c',
          400: '#0f283b',
          500: '#123149',
          600: '#235f8c',
          700: '#368ccd',
          800: '#79b2de',
          900: '#bcd9ee'
        },
        lapis_lazuli: {
          DEFAULT: '#0D6187',
          100: '#03131b',
          200: '#052636',
          300: '#083a51',
          400: '#0b4d6c',
          500: '#0d6187',
          600: '#148fc8',
          700: '#39b3eb',
          800: '#7bccf2',
          900: '#bde6f8',
        },
        emerald: {
          DEFAULT: '#0FD595',
          100: '#032b1e',
          200: '#06563d',
          300: '#09815b',
          400: '#0cac79',
          500: '#0fd595',
          600: '#2df0b3',
          700: '#62f4c6',
          800: '#96f8d9',
          900: '#cbfbec',
        },
        robin_egg_blue: {
          DEFAULT: '#31CBDD',
          100: '#082b2e',
          200: '#0f555d',
          300: '#17808b',
          400: '#1eaaba',
          500: '#31cbdd',
          600: '#5ad6e4',
          700: '#83e1eb',
          800: '#adebf2',
          900: '#d6f5f8',
        },
        bright_pink_crayola: { // Changed to an identifier-compatible name
          DEFAULT: '#FD4A72',
          100: '#41010f',
          200: '#81011d',
          300: '#c2022c',
          400: '#fd093d',
          500: '#fd4a72',
          600: '#fe6e8d',
          700: '#fe92a9',
          800: '#feb6c6',
          900: '#ffdbe2',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/forms'),
  ],
}