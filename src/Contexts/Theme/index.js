import React, { createContext, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import * as themes from './themes'

const ThemeContext = createContext({ setTheme: () => {}, theme: 'main' })

export const useTheme = () => useContext(ThemeContext)

const Theme = ({ theme = 'main', children }) => {
  const [activeTheme, setActiveTheme] = useState(theme ?? 'main')

  return (
    <ThemeContext.Provider
      value={{
        setTheme: setActiveTheme,
        theme: activeTheme
      }}
    >
      <ThemeProvider theme={themes[activeTheme]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Theme
