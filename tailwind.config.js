/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'green': '#3A7859',
        'typography': '#354153',
        'main-bg': '#EFF2F7',
        'gray': '#9EA0A4',
        'light-green': '#42A976',
        'yellow': '#EAC505',
        'orange': '#EF7D54',
        'border-green': '#95B6A9',
        'light-gray': '#F6F7F8',
        'silver': '#C4C4C4'
      },
    },
  },
  plugins: [],
}

