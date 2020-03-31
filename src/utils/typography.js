import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '22px',
  baseLineHeight: 1.666,
  scaleRatio: 2.2,
  headerFontFamily: ['Gotham Book', 'sans-serif'],
  headerWeight: '400',
  bodyFontFamily: ['Lora', 'serif'],
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    'h1,h2,h3,h4,h5,h6,p': {
      color: 'var(--lh-white)',
    },
    'h1,h2,h3': {
      'text-transform': 'uppercase',
    },
    a: {
      color: 'var(--lh-cream)',
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export const { scale, rhythm, options } = typography
export default typography
