import React from 'react'
import PropTypes from 'prop-types'
// import Navigation from '../Components/Navigation'

function MainLayout ({ children, backgroundColor }) {
  return (
    <main style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: backgroundColor || undefined
    }}>
      {children}
    </main>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string
}

export default MainLayout
