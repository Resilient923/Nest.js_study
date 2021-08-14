module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir:'C:/Users/HOME/Desktop/Coding/Nest.js/Nest.js_study',
    sourceType: 'module',
    ecmaVersion:'2020',
    ecmaFeatures:{
      jsx:true
    }
  },
  plugins: ['@typescript-eslint/eslint-plugin',"prettier"],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "prettier"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "prettier/prettier": ["error", { "endOfLine": "auto" }]   
  },
};
