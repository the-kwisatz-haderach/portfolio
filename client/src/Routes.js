import React from 'react'
import { Route } from 'react-router-dom'
import withRouteTransition from './components/HOC/withRouteTransition'
import Home from './Pages/Home'
import Contact from './Pages/Contact/Contact'
import './styles/transition.css'

const PageRoutes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
    </>
  )
}

export default withRouteTransition(PageRoutes, 500, 'fade')
