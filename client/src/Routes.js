import React from 'react'
import { Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import Home from './Pages/Home'
import Contact from './Pages/Contact/Contact'
import './styles/transition.css'

const routes = [
  { path: '/', Component: Home },
  { path: '/contact', Component: Contact },
]

const Routes = () => {
  return (
    <>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match !== null}
              timeout={500}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </>
  )
}

export default Routes
