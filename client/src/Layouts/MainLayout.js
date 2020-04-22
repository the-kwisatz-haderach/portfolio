import React from 'react'
import PropTypes from 'prop-types'

function MainLayout({ children }) {
  return <main>{children}</main>
}

MainLayout.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
}

export default MainLayout
