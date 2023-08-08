/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}","index.html"],
  theme: {
    extend: {
      colors: {
        "primary": "#150C18",
        "secondary": "#1E1122",
        "contrast": "#8A479E",
        "shadow-bg": "rgba(0, 0, 0, 0.8)",
        "selected-carrousel": "#FCFF6B",
      },
      animation: {
        "smooth-rotate": "rotate 750ms ease-in alternate fowards",
      },
      keyframes: {
        rotate: {
          "0%": { transform: 'rotate(0deg)' },
          "100%": { transform: 'rotate(180deg)' }
        }
      },
      
    },
  },
  plugins: [],
}

