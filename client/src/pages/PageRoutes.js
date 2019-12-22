import React from 'react'
import { Route } from 'react-router-dom'
import withRouteTransition from '../Components/HOC/withRouteTransition'
import Login from './Login'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import './transition.css'

const PageRoutes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
    </>
  )
}

export default withRouteTransition(PageRoutes, 500, 'fade')
