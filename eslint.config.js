/*
 * Copyright (c) 2024 яαvoroηα
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/**
 * Linter rules
 * @type {Object}
 */
const RULES = {
  GLOBAL: {
    'camelcase': ['error', { properties: 'never' }],
    'constructor-super': 'error',
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-class-assign': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-implied-eval': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-self-compare': 'warn',
    'no-sequences': 'error',
    'no-template-curly-in-string': 'warn',
    'no-throw-literal': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unreachable': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'warn',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'one-var': ['error', { initialized: 'never' }],
    'unicode-bom': ['error', 'never'],
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'yoda': ['error', 'never']
  },
  STYLISTIC: {
    '@stylistic/array-bracket-newline': [
      'error',
      {
        minItems: 2,
        multiline: true
      }
    ],
    '@stylistic/array-bracket-spacing': [
      'error',
      'always',
      {
        objectsInArrays: false,
        arraysInArrays: false
      }
    ],
    '@stylistic/array-element-newline': ['error', { minItems: 2 }],
    '@stylistic/block-spacing': ['error', 'always'],
    '@stylistic/comma-dangle': ['error', 'never'],
    '@stylistic/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false
        }
      }
    ],
    '@stylistic/new-parens': 'error',
    '@stylistic/operator-linebreak': ['error', 'after'],
    '@stylistic/object-curly-newline': [
      'error',
      {
        multiline: true,
        minProperties: 2
      }
    ],
    '@stylistic/object-property-newline': 'error',
    '@stylistic/one-var-declaration-per-line': ['error', 'always'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/quote-props': ['error', 'as-needed'],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['*package', '!', ',']
        },
        block: {
          balanced: true,
          markers: ['*package', '!', ','],
          exceptions: ['*']
        }
      }
    ],
    '@stylistic/type-annotation-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    '@stylistic/wrap-iife': [
      'error',
      'any',
      {
        functionPrototypeMethods: true
      }
    ],
    '@stylistic/yield-star-spacing': ['error', 'both']
  },
  TYPESCRIPT: {
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ]
  }
}

/**
 * Javascript configurations
 * @type {Array}
 */
const javascript = [
  eslint.configs.recommended,
  stylistic.configs['recommended-flat'],
  {
    name: 'ravorona/javascript/files',
    files: ['**/*.{js,jsx,ts,tsx}']
  },
  {
    name: 'ravorona/javascript/ignores',
    ignores: ['node_modules', 'vendor', 'public', 'dist']
  },
  {
    name: 'ravorona/javascript/languages',
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    name: 'ravorona/javascript/linter-options',
    linterOptions: {
      reportUnusedDisableDirectives: 'warn'
    }
  },
  {
    name: 'ravorona/javascript/rules',
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      ...RULES.GLOBAL,
      ...RULES.STYLISTIC
    }
  }
]

/**
 * Typescript configurations
 * @type {Array}
 */
const typescript = [
  ...javascript,
  ...tseslint.configs.recommended,
  {
    name: 'ravorona/typescript/files',
    files: ['**/*.{ts,tsx}']
  },
  {
    name: 'ravorona/typescript/rules',
    rules: RULES.TYPESCRIPT
  }
]

export { RULES }
export default {
  configs: {
    javascript,
    typescript
  }
}
