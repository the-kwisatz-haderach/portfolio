import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { NavigationProvider } from './Context/NavigationContext'
import { mainTheme } from './theme'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fonts.primary};
  }
  h2 {
    font-size: 3em;
    margin-bottom: 0.4em;
  }

  .show {
    visibility: visible;
  }

  .hide {
    visibility: hidden;
  }
`

function generateTheme(hue) {
  return {
    primary: 'green',
    primaryDark: 'green',
    primaryLight: 'green',
    seconday: 'green',
    secondaryDark: 'green',
    secondaryLight: 'green',
    accent: 'green',
    accentDark: 'green',
    accentLight: 'green'
  }
}

const App = () => {
  const [colorTheme, setColorTheme] = useState(mainTheme.colors)
  const [selectedHue, setSelectedHue] = useState('')

  useEffect(() => {
    if (selectedHue) {
      const newColorTheme = generateTheme(selectedHue)
      setColorTheme(newColorTheme)
    }
  }, [selectedHue])

  return (
    <BrowserRouter>
      <NavigationProvider>
        <ThemeProvider
          theme={{
            ...mainTheme,
            colors: colorTheme
          }}
        >
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </NavigationProvider>
    </BrowserRouter>
  )
}

export default App
