module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest:true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'double'],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": false, "optionalDependencies": false, "peerDependencies": false}],
    "react/jsx-props-no-spreading": "off"
  },
};
