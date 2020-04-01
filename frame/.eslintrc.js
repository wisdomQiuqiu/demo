// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  globals: {
    process: true,
    window: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  // vue required to lint *.vue files
  // https://github.com/vuejs/eslint-plugin-vue
  // https://github.com/prettier/eslint-plugin-prettier
  plugins: ['vue', 'prettier'],

  // add your custom rules here
  rules: {
    // allow debugger during development
    'vue/no-v-html': 0,
    'no-useless-escape': 'off',
    'vue/order-in-components': 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV !== 'production' ? 'error' : 'off',
    'no-new': 0,
    camelcase: 0,
    semi: 0,
    'prettier/prettier': 'off',
    'vue/require-default-prop': 'off',
    'no-trailing-spaces': 'error',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  }
}
