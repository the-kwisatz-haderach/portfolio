module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  extends: [
    'standard',
    'plugin:jest/recommended',
    'plugin:react/recommended'
  ],
  plugins: [
    'jest',
    'react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  "rules": {
    "react/jsx-filename-extension": "off"
  }
}