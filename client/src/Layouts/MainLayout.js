import React from 'react'
import PropTypes from 'prop-types'
import Navigation from '../Components/Navigation'

function MainLayout ({ children }) {
  return (
    <div>
      <Navigation />
      <main>
        {children}
      </main>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout
