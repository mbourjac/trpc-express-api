/** @type {import("eslint").Linter.Config} */

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prefer-template': 'error',
    'no-unneeded-ternary': 'error',

    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true },
    ],
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  ignorePatterns: [
    '!.*',
    'node_modules',
    'dist',
    'compiled',
    'build',
    'trpc-api-export/dist',
  ],
  settings: {
    typescript: {},
    'import/resolver': {
      typescript: { project: 'tsconfig.json' },
    },
  },
};
