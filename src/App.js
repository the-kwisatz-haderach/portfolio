import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Routes from './Routes'
import { mainTheme, darkTheme } from './theme'
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

const themes = {
  mainTheme,
  darkTheme
}

const App = () => {
  const [visits, setVisits] = useLocalStorage('visits')
  const [theme, setTheme] = useState('mainTheme')

  useEffect(() => {
    if (!visits) {
      setVisits(1)
    } else {
      setVisits(+visits + 1)
    }
  }, [])

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <Routes />
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 200
          }}
        >
          <button
            onClick={() => {
              if (theme === 'mainTheme') {
                setTheme('darkTheme')
              } else {
                setTheme('mainTheme')
              }
            }}
          >
            Switch theme
          </button>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
