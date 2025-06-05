/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E3A8A', // Azul escuro (inspirado no Ministério BTY)
        'secondary': '#C7A036', // Dourado (inspirado no Ministério BTY)
        'accent': '#E63946', // Vermelho para destaques
        'light': '#F1FAEE', // Cor clara para fundos
        'dark': '#1D3557', // Cor escura para textos
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['Merriweather', 'ui-serif', 'Georgia'],
        'display': ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
