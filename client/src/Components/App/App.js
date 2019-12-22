import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PageRoutes from '../../pages'
import withTheme from '../HOC/withTheme'
import { NavigationProvider } from '../../Context/NavigationContext'

const App = () => (
  <BrowserRouter>
    <NavigationProvider>
      <PageRoutes />
    </NavigationProvider>
  </BrowserRouter>
)

export default withTheme(App)
