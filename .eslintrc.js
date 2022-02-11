module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb-base',
    '@meteorjs/eslint-config-meteor',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
  },
  globals: {
    AFRAME: 'readonly',
    THREE: 'readonly',
    app: 'writable',
  },
};
