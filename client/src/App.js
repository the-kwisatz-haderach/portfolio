import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { ThemeProvider } from 'styled-components'
import Navigation from './components/Navigation'
import { NavigationProvider } from './Context/NavigationContext'
import { mainTheme } from './styles/themes'

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
    accentLight: 'green',
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
            colors: colorTheme,
          }}
        >
          <Routes />
          <Navigation />
        </ThemeProvider>
      </NavigationProvider>
    </BrowserRouter>
  )
}

export default App
