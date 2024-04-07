![Publish](https://github.com/ravorona/eslint-config/actions/workflows/publish.yml/badge.svg)

# ESLint configuration

Javascript code quality guide using [ESLint](https://eslint.org)

## Install

Yarn:

```bash
yarn add -D \
    @ravorona/eslint-config \
    @eslint/js \
    eslint
```

NPM:

```bash
npm i --save-dev \
    @ravorona/eslint-config \
    @eslint/js \
    eslint
```

## Usage

Set the shared configurations inside your [ESLint configuration](https://eslint.org/docs/user-guide/configuring)

```js
import { configs } from '@ravorona/eslint'

export default [
    configs.all,
    {
        rules: {
            "no-unused-vars": "warn"
        }
    }
]
```

## Formatting rules

Prefer [Prettier](https://prettier.io) for formatting rules.
