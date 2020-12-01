import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Routes from './Routes'
import { mainTheme } from './theme'
import useLocalStorage from './Hooks/useLocalStorage'

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
  const [visits, setVisits] = useLocalStorage('visits')

  useEffect(() => {
    if (!visits) {
      setVisits(1)
    } else {
      setVisits(+visits + 1)
    }
  }, [])

  useEffect(() => {
    if (selectedHue) {
      const newColorTheme = generateTheme(selectedHue)
      setColorTheme(newColorTheme)
    }
  }, [selectedHue])

  return (
    <BrowserRouter>
      <ThemeProvider
        theme={{
          ...mainTheme,
          colors: colorTheme
        }}
      >
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
