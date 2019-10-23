import React, { ReactElement } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './Landing'

const PageRoutes = (): ReactElement => (
  <BrowserRouter>
    <Route exact path="/">
      <Landing />
    </Route>
  </BrowserRouter>
)

export default PageRoutes
