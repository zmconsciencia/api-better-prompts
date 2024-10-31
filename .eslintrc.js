module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module', // Allows for the use of imports
    },
    rules: {
      // Place to specify ESLint rules
      // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
  };
  