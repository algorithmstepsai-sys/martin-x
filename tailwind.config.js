/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // stone-700
        input: "var(--color-input)", // stone-700
        ring: "var(--color-ring)", // gold-600
        background: "var(--color-background)", // black
        foreground: "var(--color-foreground)", // white
        primary: {
          DEFAULT: "var(--color-primary)", // dark burgundy
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // dark gold
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // red-600
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // stone-800
          foreground: "var(--color-muted-foreground)", // stone-400
        },
        accent: {
          DEFAULT: "var(--color-accent)", // lighter gold
          foreground: "var(--color-accent-foreground)", // black
        },
        popover: {
          DEFAULT: "var(--color-popover)", // stone-900
          foreground: "var(--color-popover-foreground)", // white
        },
        card: {
          DEFAULT: "var(--color-card)", // near-black
          foreground: "var(--color-card-foreground)", // white
        },
        success: {
          DEFAULT: "var(--color-success)", // green-600
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // amber-500
          foreground: "var(--color-warning-foreground)", // black
        },
        error: {
          DEFAULT: "var(--color-error)", // red-600
          foreground: "var(--color-error-foreground)", // white
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(139, 105, 20, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(139, 105, 20, 0.7)" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "zoom-in": {
          from: { transform: "scale(0.95)", opacity: 0 },
          to: { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-in": "slide-in-right 0.5s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "zoom-in": "zoom-in 0.4s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}