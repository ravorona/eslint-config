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

import js from '@eslint/js'

const jsRules = {
    'block-spacing': ['error', 'always'],
    'camelcase': ['error', { properties: 'never' }],
    'constructor-super': 'error',
    'dot-location': ['error', 'property'],
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'handle-callback-err': ['error', '^(err|error)$'],
    'new-cap': [
        'error',
        {
            newIsCap: true,
            capIsNew: false
        }
    ],
    'new-parens': 'error',
    'newline-before-return': 'error',
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
    'no-magic-numbers': [
        'error',
        {
            ignoreArrayIndexes: true,
            ignoreDefaultValues: true
        }
    ],
    'no-new-object': 'error',
    'no-new-require': 'error',
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
    'object-curly-newline': ['error', { consistent: true }],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
    'one-var': ['error', { initialized: 'never' }],
    'one-var-declaration-per-line': ['error', 'always'],
    'spaced-comment': [
        'error',
        'always',
        {
            line: { markers: ['*package', '!', ','] },
            block: {
                balanced: true,
                markers: ['*package', '!', ','],
                exceptions: ['*']
            }
        }
    ],
    'unicode-bom': ['error', 'never'],
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
    'yield-star-spacing': ['error', 'both'],
    'yoda': ['error', 'never']
}

const jsConfig = [
    js.configs.recommended,
    {
        ignores: ['node_modules', 'vendor', 'public', 'dist']
    },
    {
        languageOptions: {
            sourceType: 'module',
            globals: {
                process: true
            }
        },
        linterOptions: {
            reportUnusedDisableDirectives: 'warn'
        },
        rules: jsRules
    }
]

export { jsRules }

export default {
    configs: {
        all: jsConfig
    }
}
