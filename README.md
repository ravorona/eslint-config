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

Prefer [Prettier](https://prettier.io) for formatting rules by adding your [Prettier configuration file](https://prettier.io/docs/en/configuration.html) – e.g:
```json
{
    "printWidth": 120,
    "useTabs": false,
    "tabWidth": 4,
    "singleQuote": true,
    "quoteProps": "consistent",
    "arrowParens": "avoid",
    "trailingComma": "none",
    "semi": false
}
```
