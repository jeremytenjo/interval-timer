module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    'cypress/globals': true,
  },
  ignorePatterns: ['node_modules', 'build', '.env', 'ios', 'android', 'dist'],
  plugins: ['react', 'react-hooks', 'import', 'cypress'],
  extends: [
    'plugin:react/recommended', 
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
    propWrapperFunctions: ['forbidExtraProps'],
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
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
        allowGlobals: true,
      },
    ],
  },
}