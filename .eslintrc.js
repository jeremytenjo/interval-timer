const globals = require('./devtools/babel/plugins/auto-import/eslint-globals.js')

module.exports = {
  globals: {
    MyGlobal: true,
    ...globals
  },
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    'cypress/globals': true
  },
  ignorePatterns: ['node_modules', 'build', '.env', 'ios', 'android', 'dist'],
  plugins: ['react', 'babel', 'react-hooks', 'import', 'cypress'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 9,
    sourceType: 'module',
    babelOptions: {
      configFile: './devtools/babel/config.js'
    }
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect'
    },
    propWrapperFunctions: ['forbidExtraProps']
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always'
      }
    ],
    'prefer-const': 2,
    'no-var': 2,
    'no-const-assign': 1,
    'no-this-before-super': 1,
    'no-undef': 2,
    'no-unreachable': 2,
    'no-unneeded-ternary': 2,
    'no-unused-vars': 1,
    'no-debugger': 1,
    'no-console': 0,
    'constructor-super': 1,
    'valid-typeof': 1,
    'react/display-name': 0,
    'react/jsx-uses-react': 1,
    'react/prop-types': 0,
    'react/jsx-fragments': [0, 'syntax'],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 0,
    'no-useless-catch': 1,
    'no-async-promise-executor': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-no-undef': [
      2,
      {
        allowGlobals: true
      }
    ]
  }
}
