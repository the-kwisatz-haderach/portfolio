module.exports = {
  "env": {
    "node": true
  },
  extends: [
    'standard',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    'jest',
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  "rules": {
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-namespace": "off"
  }
}