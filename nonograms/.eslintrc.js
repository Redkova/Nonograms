module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
  },
  // parserOptions: {
  //   ecmaVersion: 2020,
  // },
  rules: {
    'no-console': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'object-curly-spacing': ['error', 'always'],
    'no-plusplus': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', { props: false }],
  },
};
