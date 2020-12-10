import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import Home from './pages/Home'
import './styles/transition.css'

const Background = styled.div`
  background-color: ${props => props.theme.colors.foundation};
`

const routes = [{ path: '/', Component: Home }]

const Routes = () => {
  return (
    <Background>
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
    </Background>
  )
}

export default Routes
