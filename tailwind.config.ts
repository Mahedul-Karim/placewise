import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   colors:{
    'primary':'#363aed',
    'primary-light':'#ececfd',
    'neutral':'#243757',
    'grey':'#f9f9fe',
    'white':'#fff',
    'green':'#58DA90',
    'yellow':'#FFBF47',
    'border':'#e5e7eb',
    'transparent':'transparent'
   },
   fontFamily:{
    poppins: ["Poppins", "sans-serif"]
   },
   extend:{
    screens:{
      '400px':'400px'
    }
   }
  },
  plugins: [],
}
export default config
