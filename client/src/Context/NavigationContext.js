import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { throttle } from 'lodash'

const NavigationContext = React.createContext()

const navLinks = [
  { label: 'home', path: '/' },
  { label: 'about me', path: '/about' },
  { label: 'get in touch', path: '/contact' }
]

const getPrevNextPage = (linkArray, currentPath) => {
  const activeLinkIndex = linkArray.findIndex((link) => link.path === currentPath)

  const prevPage = activeLinkIndex === 0
    ? linkArray[linkArray.length - 1].path
    : linkArray[activeLinkIndex - 1].path

  const nextPage = activeLinkIndex === linkArray.length - 1
    ? linkArray[0].path
    : linkArray[activeLinkIndex + 1].path

  return { prevPage, nextPage }
}

const NavigationProvider = ({ children }) => {
  const prev = useRef(null)
  const next = useRef(null)
  const history = useHistory()

  const initialContext = { navLinks }

  useEffect(() => {
    const { prevPage, nextPage } = getPrevNextPage(navLinks, location.pathname)
    prev.current = prevPage
    next.current = nextPage
  }, [location.pathname])

  let lastScrollTop = 0
  const handleNavigation = throttle((e) => {
    e.preventDefault()
    if (/^Arrow.*/g.test(e.code)) {
      if (/^Arrow(Down|Right)$/g.test(e.code)) {
        history.push(next.current)
      }
      if (/^Arrow(Up|Left)$/g.test(e.code)) {
        history.push(prev.current)
      }
    } else {
      if (window.scrollY < lastScrollTop) {
        lastScrollTop = window.scrollY
        history.push(prev.current)
      }
      if (window.scrollY > lastScrollTop) {
        lastScrollTop = window.scrollY
        history.push(next.current)
      }
    }
  }, 600, { trailing: false })

  useEffect(() => {
    window.addEventListener('keydown', handleNavigation)
    window.addEventListener('scroll', handleNavigation)
    return () => {
      window.removeEventListener('scroll', handleNavigation)
      window.removeEventListener('keydown', handleNavigation)
    }
  }, [])

  return (
    <NavigationContext.Provider value={initialContext}>
      {children}
    </NavigationContext.Provider>
  )
}

NavigationProvider.propTypes = {
  children: PropTypes.node
}

export { NavigationProvider }
export default NavigationContext
