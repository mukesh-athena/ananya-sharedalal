/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        turmeric: '#C97A1D',
        terracotta: '#A44F2F',
        offwhite: '#F9F6F1',
        parchment: '#F5EDD6',
        inkbrown: '#1E1208',
        sage: '#7A8C6E',
        stone: '#8A8075',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        crimson: ['Crimson Text', 'serif'],
      },
    },
  },
  plugins: [],
}
