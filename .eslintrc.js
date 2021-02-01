module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module"
  },
  rules: {
    "import/first": ["error", "absolute-first"],
    "prettier/prettier": "error"
  },
  plugins: ["prettier"]
};