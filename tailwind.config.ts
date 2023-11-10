import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1460px',
      },
    },
    extend: {
      fontFamily: {
        default:  ['var(--font-lato)'],
        main:     ['var(--font-gentium)'],
        mono:     ['var(--font-roboto-mono)'],
      },
    }
  },
  plugins: [],
}
export default config
