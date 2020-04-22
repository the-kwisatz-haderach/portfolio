import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const NavigationContext = React.createContext()

const navLinks = [
  { label: 'home', path: '/' },
  { label: 'get in touch', path: '/contact' },
]

const getPrevNextPage = (linkArray, currentPath) => {
  const activeLinkIndex = linkArray.findIndex(
    (link) => link.path === currentPath
  )

  const prevPage =
    activeLinkIndex === 0
      ? linkArray[linkArray.length - 1].path
      : linkArray[activeLinkIndex - 1].path

  const nextPage =
    activeLinkIndex === linkArray.length - 1
      ? linkArray[0].path
      : linkArray[activeLinkIndex + 1].path

  return { prevPage, nextPage }
}

const NavigationProvider = ({ children }) => {
  const prev = useRef(null)
  const next = useRef(null)

  const initialContext = { navLinks }

  useEffect(() => {
    const { prevPage, nextPage } = getPrevNextPage(navLinks, location.pathname)
    prev.current = prevPage
    next.current = nextPage
  }, [location.pathname])

  return (
    <NavigationContext.Provider value={initialContext}>
      {children}
    </NavigationContext.Provider>
  )
}

NavigationProvider.propTypes = {
  children: PropTypes.node,
}

export { NavigationProvider }
export default NavigationContext
