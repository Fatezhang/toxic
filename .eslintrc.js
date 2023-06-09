module.exports = {
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import'],
  ignorePatterns: ['.eslintrc.js', 'out/'],
  rules: {
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': false,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 5,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    '@typescript-eslint/no-empty-interface': [
      "error",
      {
        "allowSingleExtends": true
      }
    ],
    'import/named': 'off',
    'import/no-duplicates': 'error',
    'import/no-unused-modules': 'error',
    'import/no-unassigned-import': ['error', { allow: ['**/*.css'] }],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: false },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [],
        pathGroupsExcludedImportTypes: [],
      },
    ],
    'react/self-closing-comp': 'error',
    'no-console': 'warn',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    camelcase: ['error', { ignoreGlobals: true, ignoreDestructuring: true }],
    'array-bracket-newline': ['error', 'consistent'],
    // 'array-bracket-spacing': [
    //   'error',
    //   'always',
    //   { singleValue: false, objectsInArrays: false, arraysInArrays: false },
    // ],
    'object-curly-newline': ['error', { consistent: true }],
    'object-curly-spacing': ['error', 'always', { arraysInObjects: true, objectsInObjects: true }],
    'comma-dangle': ['error', 'only-multiline'],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    semi: "error"
  },
}
