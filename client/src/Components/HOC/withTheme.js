import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    yellow: '#ffe42a',
    'yellow-light': '#ffee7c',
    'yellow-dark': '#ffdf09'
  },
  fonts: {
    primary: '',
    secondary: ''
  }
}

function withTheme (Component) {
  return function WrappedComponent (props) {
    return (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    )
  }
}

export default withTheme
