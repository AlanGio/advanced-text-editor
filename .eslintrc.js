module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  "rules": {
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-debugger": 1,
    "linebreak-style": 0,
    "import/no-cycle": 0,
    "jsx-a11y/interactive-supports-focus": 0,
    "jsx-a11y/click-events-have-key-events": 0
  }
};
