import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import 'normalize.css'
import 'animate.css'
import './styles/fonts.scss'
import './favicon.ico'

ReactDOM.render(
  <App
    style={{
      height: '100vh'
    }}
  />,
  document.getElementById('app')
)
