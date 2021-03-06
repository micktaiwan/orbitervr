module.exports = {
  env: {
    browser: true,
    es2020: true,
    es2021: true,
    meteor: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb-base',
    '@meteorjs/eslint-config-meteor',
    'plugin:meteor/recommended',
    'eslint:recommended',
  ],
  plugins: ['meteor', 'no-only-tests'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-promise-executor-return': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'off',
    'default-param-last': 'off',
    'no-multiple-empty-lines': 'off',
    'meteor/no-session': 'off',
    'import/no-unresolved': 0,
    'object-curly-newline': 0,
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'object-shorthand': ['error', 'always'],
    'newline-per-chained-call': 0,
    // "no-lonely-if": 0,
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    // "no-console": 0,
    'max-len': 0,
    'func-names': 0,
    // "key-spacing": 0,
    'no-param-reassign': 0,
    // "no-prototype-builtins": 0,
    // "prefer-arrow-callback": 0,
    'new-cap': [2, {
      newIsCap: true,
      capIsNewExceptions: ['Match.OneOf', 'Match.Optional', 'Match.Where', 'Match.Maybe'],
    }],
    // "no-nested-ternary": 0,
    'no-eval': 0,
    'arrow-parens': ['error', 'as-needed'],
    'no-mixed-operators': 0,
    'no-bitwise': 0,
    'no-plusplus': 0,
    'no-else-return': 0,
    'no-underscore-dangle': 0,
    'operator-linebreak': ['error', 'after'],
    'no-only-tests/no-only-tests': 'error',
  },
  globals: {
    AFRAME: 'readonly',
    THREE: 'readonly',

    // functions
    _: 'readonly',
    log: 'readonly',
    remote: 'writable',

    // objects
    app: 'writable',

    // collections
    Cubes: 'writable',
  },
};
