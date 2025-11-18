import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      spacing: {
        // Golden Ratio Spacing Scale (Fibonacci sequence)
        'phi-1': '0.5rem',    // 8px
        'phi-2': '0.8125rem', // 13px
        'phi-3': '1.3125rem', // 21px
        'phi-4': '2.125rem',  // 34px
        'phi-5': '3.4375rem', // 55px
        'phi-6': '5.5625rem', // 89px
        'phi-7': '9rem',      // 144px
        'phi-8': '14.5625rem', // 233px
        'phi-9': '23.5625rem', // 377px
      },
      fontSize: {
        // Golden Ratio Typography Scale (base 16px)
        'phi-xs': ['0.625rem', { lineHeight: '1rem' }],      // 10px
        'phi-sm': ['0.8125rem', { lineHeight: '1.3125rem' }], // 13px
        'phi-base': ['1rem', { lineHeight: '1.618rem' }],     // 16px
        'phi-lg': ['1.25rem', { lineHeight: '2rem' }],        // 20px
        'phi-xl': ['1.618rem', { lineHeight: '2.618rem' }],   // 26px
        'phi-2xl': ['2.125rem', { lineHeight: '3.4375rem' }], // 34px
        'phi-3xl': ['2.618rem', { lineHeight: '4.236rem' }],  // 42px
        'phi-4xl': ['3.4375rem', { lineHeight: '5.5625rem' }], // 55px
        'phi-5xl': ['4.236rem', { lineHeight: '6.854rem' }],  // 68px
        'phi-6xl': ['5.5625rem', { lineHeight: '9rem' }],     // 89px
        'phi-7xl': ['6.854rem', { lineHeight: '11.09rem' }],  // 110px
      },
      colors: {
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
        teal: "hsl(var(--teal))",
        "teal-light": "hsl(var(--teal-light))",
        "teal-glow": "hsl(var(--teal-glow))",
        silver: "hsl(var(--silver))",
        "electric-cyan": "hsl(var(--electric-cyan))",
        "deep-black": "hsl(var(--deep-black))",
      },
      maxWidth: {
        // Golden Ratio Layout Widths
        'phi-narrow': '38.2%',   // 0.382 (smaller portion)
        'phi-wide': '61.8%',     // 0.618 (larger portion)
        'phi-content': '61.8rem', // 989px
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        accent: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "glow-pulse": {
          "0%, 100%": { filter: "drop-shadow(0 0 8px hsl(175 50% 45% / 0.4))" },
          "50%": { filter: "drop-shadow(0 0 20px hsl(175 50% 45% / 0.8))" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        },
        "circuit-line": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "circuit-line": "circuit-line 3s linear infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
