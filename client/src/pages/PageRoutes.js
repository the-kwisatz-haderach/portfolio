import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

const PageRoutes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Login} />
  </BrowserRouter>
)

export default PageRoutes
