# ESLint configuration
Javascript style guide using [ESLint](https://eslint.org) with [Prettier](https://prettier.io)

## Install
Yarn:
```bash
yarn add -D \
    @ravorona/eslint-config \
    eslint \
    eslint-config-prettier \
    eslint-plugin-prettier \
    prettier
```
NPM:
```bash
npm i --save-dev \
    @ravorona/eslint-config \
    eslint \
    eslint-config-prettier \
    eslint-plugin-prettier \
    prettier
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

