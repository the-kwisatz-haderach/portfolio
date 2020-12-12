import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import useLocalStorage from './Hooks/useLocalStorage'
import Theme from './Contexts/Theme'

const App = () => {
  const [visits, setVisits] = useLocalStorage('visits', { initialValue: 0 })
  const [storedTheme] = useLocalStorage('theme', { initialValue: 'main' })

  useEffect(() => {
    setVisits(+visits + 1)
  }, [])

  return (
    <BrowserRouter>
      <Theme theme={storedTheme}>
        <Routes />
      </Theme>
    </BrowserRouter>
  )
}

export default App
