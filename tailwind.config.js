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
        "smooth": "transition: all 500ms ease-in-out",
      },
    },
  },
  plugins: [],
}

