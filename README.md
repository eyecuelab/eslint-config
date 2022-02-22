# @eyecuelab/eslint-config

[npm](https://www.npmjs.com/package/@eyecuelab/eslint-config)

`npm i -D @eyecuelab/eslint-config`

||

`yarn add -D @eyecuelab/eslint-config`

## example package.json
```json
...
  "devDependencies": {
    "@eyecuelab/eslint-config": "^1.0.0",
    "@typescript-eslint/eslint-plugin": "^5.0.0",
    "@typescript-eslint/parser": "^5.0.0",
    "eslint": "^8.0.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-import": "^2.25.2",
    "eslint-plugin-jest": "^25.2.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.22.0",
    "prettier": "^1.19.1",
  }
...
  "eslintConfig": {
    "extends": [
      "@eyecuelab" // or "@eyecuelab/react"
    ],
    "parserOptions": {
      "project": "./tsconfig.json"
    }
}
...
``` 
