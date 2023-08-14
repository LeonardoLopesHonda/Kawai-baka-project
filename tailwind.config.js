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
        "selected-carousel": "#FCFF6B",
        "line": "#1F1F1F",
        "white-80": "rgba(255, 255, 255, .8)"
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
      screens: {
        "sm-h" : { 'raw' : '(min-height : 900px)'},
        "xs": {'raw' : '(min-width: 426px)'}
      }
    },
  },
  plugins: [],
}

