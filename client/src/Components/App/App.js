import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PageRoutes from '../../pages'
import withTheme from '../HOC/withTheme'
import Navigation from '../Navigation'
import { NavigationProvider } from '../../Context/NavigationContext'

const App = () => (
  <BrowserRouter>
    <NavigationProvider>
      <PageRoutes />
      <Navigation />
    </NavigationProvider>
  </BrowserRouter>
)

export default withTheme(App)
