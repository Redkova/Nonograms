module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-console': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'space-before-function-paren': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'no-plusplus': 'off',
    'no-use-before-define': ['error', { functions: false }],
  },
};
