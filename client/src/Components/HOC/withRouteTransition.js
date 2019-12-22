import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'

export default function withRouteTransition (RoutesComponent, timeout = 300, classNames = '') {
  return function WrappedComponent (props) {
    return (
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames={classNames}
            timeout={timeout}
          >
            <Switch location={location}>
              <RoutesComponent {...props} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    )
  }
}
