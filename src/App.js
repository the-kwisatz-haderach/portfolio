import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Routes from './Routes'
import { mainTheme, darkTheme } from './theme'
import useLocalStorage from './Hooks/useLocalStorage'
import Toggle from './Components/Toggle/Toggle'

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

const themes = {
  mainTheme,
  darkTheme
}

const App = () => {
  const [visits, setVisits] = useLocalStorage('visits')
  const [theme, setTheme] = useLocalStorage('theme')

  useEffect(() => {
    if (!theme) {
      setTheme('mainTheme')
    }

    if (!visits) {
      setVisits(1)
    } else {
      setVisits(+visits + 1)
    }
  }, [])

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes[theme || 'mainTheme']}>
        <GlobalStyle />
        <Routes />
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 200,
            zIndex: 5
          }}
        >
          <Toggle
            icon="fas fa-moon"
            onClick={() => {
              if (theme === 'mainTheme') {
                setTheme('darkTheme')
              } else {
                setTheme('mainTheme')
              }
            }}
          />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
