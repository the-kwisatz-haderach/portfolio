import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Login from './Login'
import Home from './Home'
import About from './About'
import './transition.css'

const PageRoutes = () => {
  return (
    <Route render={({ location }) => (
      <TransitionGroup className="route-container">
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={500}
        >
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  )
}

export default PageRoutes
