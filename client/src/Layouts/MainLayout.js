import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import useScrollBreakpoint from '../Hooks/useScrollBreakpoint'

const Main = styled.main`
  position: relative;
  top: 0;
  left: 0;
`

const ButtonContainer = styled.div`
  position: fixed;
  right: ${(props) => (props.reachedBreakpoint ? 390 : 40)}px;
  bottom: ${(props) => (props.reachedBreakpoint ? 170 : 18)}px;
  z-index: 10;
  transition: all 0.5s ease-in-out;
`

const ContactMeButton = styled(Link)`
  text-decoration: none;
  box-shadow: 0px 0px 5px 2px #0000002e;
  border-style: solid;
  border-color: #00000040;
  border-width: 1px 1px 0px;
  padding: 20px 50px;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: capitalize;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => (props.colored ? '#000' : '#fff')};
  background-color: ${(props) =>
    props.colored ? props.theme.colors.secondary : '#000'};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: white;
    background-color: #000000;
  }
`

function MainLayout({ children }) {
  const { pathname } = useLocation()

  const reachedBreakpoint = useScrollBreakpoint(
    () => {
      const element = document.querySelector('.get-in-touch')
      return element.offsetTop - Math.floor(element.clientHeight / 2)
    },
    { reset: true }
  )

  return (
    <Main>
      <ButtonContainer reachedBreakpoint={reachedBreakpoint || undefined}>
        <ContactMeButton
          colored={reachedBreakpoint ? 'true' : undefined}
          to={pathname === '/' ? '/contact' : '/'}
        >
          {pathname === '/' ? 'Get in touch' : 'Go back'}
        </ContactMeButton>
      </ButtonContainer>
      {children}
    </Main>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
}

export default MainLayout
