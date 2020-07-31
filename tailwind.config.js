/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#131313',
        glass: 'rgba(0.429, 0.429, 0.429, 0.200)',
        'white-smoke': 'rgba(255.429, 255.429, 255.429, 0.200)',
        'dark-glass': 'rgba(0.429, 0.429, 0.429, 0.700)',
      },
    },
  },
  variants: {
    rotate: ['responsive', 'group-hover', 'hover', 'focus'],
  },
  plugins: [],
}
