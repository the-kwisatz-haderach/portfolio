import React from 'react'
import PropTypes from 'prop-types'
import Navigation from '../Components/Navigation'

function MainLayout ({ children }) {
  return (
    <>
      <Navigation />
      <main>
        {children}
      </main>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout
