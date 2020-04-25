import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const ContactMeButton = styled(Link)`
  position: fixed;
  right: 0;
  bottom: 50px;
  padding: 20px 50px;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: capitalize;
  border: none;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => (props.isMenuOpen ? '#fff' : '#000')};
  background-color: ${(props) =>
    props.isMenuOpen ? '#000' : props.theme.colors.primary};
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: white;
    background-color: #000000;
  }
`

function MainLayout({ children }) {
  const { pathname } = useLocation()
  return (
    <main>
      <ContactMeButton to={pathname === '/' ? '/contact' : '/'}>
        {pathname === '/' ? 'Contact me' : 'Go back'}
      </ContactMeButton>
      {children}
    </main>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
}

export default MainLayout
