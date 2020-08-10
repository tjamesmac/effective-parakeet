module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    indent: 'off',
    'arrow-parens': 'off',
    'object-curly-spacing': ['error', 'always'],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ],
    quotes: ['error', 'single'],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
    // 'comma-dangle': ['error', 'always-multiline']
  }
};
