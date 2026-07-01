import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'], theme: { extend: { colors: { ink:'#07111f', brand:'#5b8cff' } } }, plugins: [] }
export default config
