module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'prettier-standard'
  ],
  plugins: ['jest', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'space-before-function-paren': 'off',
    'react/prop-types': 'off'
  }
}
