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
    "eslint": "^8.31.0",
    "prettier": "^2.8.2",
    "typescript": "^4.9.4"
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
