module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true,
    jest: true,
    'react-native/react-native': true
  },
  extends: [
    'airbnb',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  plugins: ['react', 'react-native', 'react-hooks'],
  settings: {
    'import/resolver': {
      typescript: {},
      'babel-plugin-root-import': {
        rootPathSuffix: 'app',
        rootPathPrefix: '~'
      },
      node: {
        extensions: ['.js', '.jsx', 'ts', '.tsx']
      }
    }
  },
  rules: {
    'import/extensions': [1, { png: 'always' }],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.jsx', '.tsx']
      }
    ],
    'react/prefer-stateless-function': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': [1, { exceptions: ['Icon'] }],
    'react-native/no-raw-text': [1, { skip: ['Button'] }],
    '@typescript-eslint/explicit-function-return-type': [
      0,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
      }
    ],

    '@typescript-eslint/no-use-before-define': [
      2,
      {
        functions: true,
        classes: true,
        variables: false
      }
    ],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'log', 'info', 'disableYellowBox']
      }
    ]
  }
}
