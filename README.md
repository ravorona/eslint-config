# ESLINTRC
ESLint configuration

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
Update extends property inside your stylelint configuration file

```json
{
    "extends": "@ravorona",
    "rules": {
        "no-undef": 1,
        "yoda": 2
    }
}
```
