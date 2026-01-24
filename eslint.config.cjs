const eslintConfigNext = require('eslint-config-next')
const eslintConfigPrettier = require('eslint-config-prettier')
const simpleImportSort = require('eslint-plugin-simple-import-sort')

module.exports = [
  ...eslintConfigNext,
  eslintConfigPrettier,
  {
    ignores: [
      'src/models/**',
      'src/ui-components/**',
      'amplify-codegen-temp/models/**',
      'amplify-codegen-temp/models/models/**',
    ],
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['**/features/*/*/**'],
              message:
                'Please don’t import/export files directly from under features; always go through index.ts.',
            },
          ],
        },
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      complexity: ['error', 10],
    },
  },
]
