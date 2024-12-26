![Publish](https://github.com/ravorona/eslint-config/actions/workflows/publish.yml/badge.svg)

# ESLint configuration

Javascript code quality guide using [ESLint](https://eslint.org)

## Install

Yarn:

```bash
yarn add -D \
    @ravorona/eslint-config \
    eslint \
    typescript
```

NPM:

```bash
npm i --save-dev \
    @ravorona/eslint-config \
    eslint \
    typescript
```

## Usage

Set the shared configurations inside your [ESLint configuration](https://eslint.org/docs/user-guide/configuring)

```js
import ravorona from '@ravorona/eslint-config'

export default [
  ...ravorona.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn'
    }
  }
]
```

## Formatting rules

Prefer [Prettier](https://prettier.io) for formatting rules.

## Documentations

[Eslint Stylistic](https://eslint.style)
