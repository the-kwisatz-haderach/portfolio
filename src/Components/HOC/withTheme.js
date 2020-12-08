import React from 'react'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from '../../styles/themes'

function withTheme(Component, colorTheme) {
  return function WrappedComponent(props) {
    return (
      <ThemeProvider
        theme={{
          ...mainTheme,
          colors: colorTheme || mainTheme.colors,
        }}
      >
        <Component {...props} />
      </ThemeProvider>
    )
  }
}

export default withTheme
