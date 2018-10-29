module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {jsx: true, modules: true, experimentalObjectRestSpread: true}
  },
  plugins: ['react', 'react-hooks'],
  env: {browser: true, node: true},
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'comma-dangle': 0,
    'react/jsx-uses-vars': 1,
    'react/display-name': 1,
    'no-unused-vars': 'warn',
    'no-console': 0,
    'no-unexpected-multiline': 'warn',
    'no-case-declarations': 0,
    'no-undef': 0,
    // 'react/forbid-prop-types': 0
    'max-len': [2, 80, 4, {'ignoreUrls': true}]
  },
  settings: {react: {pragma: 'React', version: '15.6.1'}}
};
