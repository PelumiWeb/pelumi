import { Braah_One } from "next/font/google";
import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      extraextrabold: '900',
      black: '900',
    },
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(50% 50% at 50.29% 50%, #573184 0%, rgba(5, 5, 26, 0) 100%)',
      },
      colors: {
        background: "#151312",
        foreground: "var(--foreground)",
        tertiary: "#7B7B7B",
        secondary: "#1f2937"


      },
       backdropBlur: {
        'custom': '10.9px', // Custom blur value
      },
        boxShadow: {
        'shadow-input': '0px 0px 3.29px 0px #0000000D',
      },
    },
       fontFamily: {
        mono: ['var(--font-montserrat)', 'mono'],
        poppins: ['var(--font-poppins)', 'poppins'],
        inter: ['var(--font-inter)', 'inter'],
        braa: ['var(--font-braa)', 'braa'],
        macmono: ['Menlo', 'Monaco', '"Courier New"', 'monospace'],


      }
  },
   plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/typography'),
    // require('tailwindcss-filters'), // For backdrop-filter utilities
  ],
} satisfies Config;
