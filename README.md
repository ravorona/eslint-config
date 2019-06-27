# ESLint configuration
Javascript style guide using [ESLint](https://eslint.org)

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
Set extends property inside your [ESLint configuration](https://eslint.org/docs/user-guide/configuring)

```json
{
    "extends": "@ravorona",
    "rules": {
        "no-undef": 1,
        "yoda": 2
    }
}
```
