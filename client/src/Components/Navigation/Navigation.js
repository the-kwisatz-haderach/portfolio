import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NavigationButton = styled.button`
  position: fixed;
  right: 0;
  bottom: 50px;
  padding: 20px 50px;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: capitalize;
  border: none;
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.isMenuOpen ? '#fff' : '#000'};
  background-color: ${props => props.isMenuOpen ? '#000' : props.theme.colors.yellow};
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
  background-color: ${props => props.theme.colors.yellow};
  clip-path: inset(85% 0% 8% 88%);
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
  font-family: ${props => props.theme.fonts.primary};
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
    bottom: 0.6em;
    width: 20px;
    height: 20px;
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
  &:hover, &.active {
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

function Navigation () {
  const navContainerRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const openMenu = () => {
    if (!isMenuOpen) {
      window.requestAnimationFrame(() => {
        navContainerRef.current.style.clipPath = 'inset(0% 0% 0% 0%)'
      })
      setIsMenuOpen(true)
    }
    if (isMenuOpen) {
      window.requestAnimationFrame(() => {
        navContainerRef.current.style.clipPath = 'inset(85% 0% 8% 88%)'
      })
      setIsMenuOpen(false)
    }
  }

  const handleHover = () => {
    if (!isMenuOpen) {
      if (isHovered) {
        window.requestAnimationFrame(() => {
          navContainerRef.current.style.clipPath = 'inset(85% 0% 8% 88%)'
        })
        setIsHovered(false)
      }
      if (!isHovered) {
        window.requestAnimationFrame(() => {
          navContainerRef.current.style.clipPath = 'inset(0% 0% 0% 0%)'
        })
        setIsHovered(true)
      }
    }
  }

  return (
    <>
      <NavigationContainer ref={navContainerRef}>
        <NavigationLinkContainer>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/about">About</NavigationLink>
          <NavigationLink to="/something">Something</NavigationLink>
          <NavigationLink to="/something-else">Something else</NavigationLink>
        </NavigationLinkContainer>
      </NavigationContainer>
      <NavigationButton
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={openMenu}
        isMenuOpen={isMenuOpen}
      >
        Menu
      </NavigationButton>
    </>
  )
}

Navigation.propTypes = {

}

export default Navigation
