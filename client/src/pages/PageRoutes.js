import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './Landing'

const PageRoutes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Landing} />
  </BrowserRouter>
)

export default PageRoutes
