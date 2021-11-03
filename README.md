![Publish](https://github.com/ravorona/eslint-config/actions/workflows/publish.yml/badge.svg)

# ESLint configuration
Javascript code quality guide using [ESLint](https://eslint.org)

## Install
Yarn:
```bash
yarn add -D \
    @ravorona/eslint-config \
    eslint
```
NPM:
```bash
npm i --save-dev \
    @ravorona/eslint-config \
    eslint
```

## Usage
Set `extends` property inside your [ESLint configuration](https://eslint.org/docs/user-guide/configuring)

```json
{
    "extends": "@ravorona",
    "rules": {
        "no-undef": "error",
        "yoda": "error"
    }
}
```

## Formatting rules
Prefer [Prettier](https://prettier.io) for formatting rules.
