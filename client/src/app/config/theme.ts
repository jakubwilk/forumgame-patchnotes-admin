import { MantineTheme } from '@mantine/core'

export const THEME: Partial<MantineTheme> = {
  primaryColor: 'orange',
  fontFamily: "'Lato', sans-serif",
  headings: {
    fontFamily: "'Rubik', sans-serif",
    fontWeight: '600',
    textWrap: 'wrap',
    sizes: {
      h1: {
        fontSize: '3rem',
        fontWeight: '600',
        lineHeight: '3rem',
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: '600',
        lineHeight: '2.5rem',
      },
      h3: {
        fontSize: '2.25rem',
        fontWeight: '600',
        lineHeight: '2.25rem',
      },
      h4: {
        fontSize: '2rem',
        fontWeight: '600',
        lineHeight: '2rem',
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: '600',
        lineHeight: '1.5rem',
      },
      h6: {
        fontSize: '1rem',
        fontWeight: '600',
        lineHeight: '1rem',
      },
    },
  },
}
