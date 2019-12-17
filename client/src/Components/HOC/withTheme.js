import React from 'react'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from '../../styles/themes'

function withTheme (Component) {
  return function WrappedComponent (props) {
    return (
      <ThemeProvider theme={mainTheme}>
        <Component {...props} />
      </ThemeProvider>
    )
  }
}

export default withTheme
