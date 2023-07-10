/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        'main-img': "linear-gradient(-135deg, #e6ffe5cf 0%, #0f2f49 98%)",

        'projec-grad':"linear-gradient(to left, #eff2ffdb 0%, #f3f3f3c9 52%, #f9f9f9ba 100%) ,url('https://img.freepik.com/free-vector/cyber-security-concept_53876-93190.jpg?w=1060&t=st=1687896916~exp=1687897516~hmac=98b2bd51658e6947ca84c16c5db74e5948acb9b05ab2417bce9b514cbbc459bd')",

        'description-grad':"linear-gradient(to top, #0f2f49a1 0%, #ffffff85 22%, #f9f9f9ba 100%)",

      },
      

      backgroundSize: {
        'fit': '100% 100vh',
      },

      colors: {
        'menu-clr': '#666',
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        'auto-fit-icons': 'repeat(auto-fit, minmax(4rem, 1fr))',
        'auto-fit-cards': 'repeat(auto-fit, minmax(340px, 1fr))',
      }
    },
  },
  plugins: [],
}
