import React, { useEffect, useState, useRef, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import NavigationContext from '../../Context'
import { elementHide, elementReveal } from './helpers'

const NavigationButton = styled(Link)`
  position: fixed;
  right: 20px;
  bottom: 0px;
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

const NavigationContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  clip-path: inset(100% 0% 8% 100%);
  transition: clip-path 0.3s ease-in-out;
`

const NavigationLinkContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-flow: column wrap;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`

const NavigationLink = styled(NavLink)`
  position: relative;
  top: 0;
  left: 0;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 40px;
  color: black;
  text-decoration: none;
  transition: transform 0.3s ease-in-out;
  &::before {
    content: '\uf061';
    font-size: 32px;
    font-weight: 700;
    font-family: 'Font Awesome 5 Free';
    position: absolute;
    left: -80px;
    opacity: 0;
    top: 20%;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s ease-in-out, left 0.3s ease-in-out;
  }
  &.active::before {
    content: '\uf0a9';
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: inherit;
    bottom: -4px;
    left: 0;
    border-bottom: 3px solid black;
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }
  &:hover,
  &.active {
    transform: translateX(40px);
    &::after {
      transform: scaleX(1);
    }
    &::before {
      opacity: 1;
      left: -40px;
    }
  }
`

const Navigation = () => {
  const navigationContext = useContext(NavigationContext)
  const navContainerRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) {
      elementHide(navContainerRef.current)
    }
    if (isMenuOpen) {
      elementReveal(navContainerRef.current)
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) {
      if (isHovered) {
        elementReveal(navContainerRef.current)
      }
      if (!isHovered) {
        elementHide(navContainerRef.current)
      }
    }
  }, [isHovered])

  return (
    <nav>
      <NavigationContainer ref={navContainerRef}>
        <NavigationLinkContainer>
          {navigationContext.navLinks.map((link) => (
            <NavigationLink
              key={link.path}
              exact
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavigationLink>
          ))}
        </NavigationLinkContainer>
      </NavigationContainer>
      <NavigationButton
        to="/contact"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        // onClick={() => setIsMenuOpen((openState) => !openState)}
        // isMenuOpen={isMenuOpen}
      >
        Contact me
      </NavigationButton>
    </nav>
  )
}

export default Navigation
