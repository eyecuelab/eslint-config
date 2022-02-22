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
    "@typescript-eslint/eslint-plugin": "^5.12.1",
    "@typescript-eslint/parser": "^5.12.1",
    "eslint": "^8.9.0",
    "eslint-config-prettier": "^8.4.0",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-jest": "^26.1.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.28.0",
    "prettier": "^2.5.1",
    "typescript": "^4.5.5"
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
