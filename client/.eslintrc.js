module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  extends: [
    'standard',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  plugins: [
    'jest',
    '@typescript-eslint',
    'react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  "rules": {
    "@typescript-eslint/no-var-requires": "off",
    "react/jsx-filename-extension": "off"
  }
}