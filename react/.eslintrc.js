/* eslint-disable @typescript-eslint/no-var-requires */

var baseConfig = require(`../.eslintrc`)

module.exports = {
  extends: [...baseConfig.extends, `plugin:react/recommended`],
  plugins: [...baseConfig.plugins, `react`],
  parser: baseConfig.parser,
  parserOptions: {
    ...baseConfig.parserOptions,
    ecmaFeatures: { jsx: true },
  },
  env: baseConfig.env,
  settings: {
    ...baseConfig.settings,
    react: {
      version: `detect`,
    },
  },
  rules: {
    ...baseConfig.rules,
    "import/extensions": [
      "error",
      {
        "ts": "never",
        "tsx": "never",
        "js": "never",
        "jsx": "never",
        "css": "always",
        "scss": "always",
        "client": "always",
        "server": "always"
      }
    ],
    "import/order": [
      `error`,
      {
        ...baseConfig.rules[`import/order`][1],
        pathGroups: [
          ...baseConfig.rules[`import/order`][1].pathGroups,
          {
            pattern: `react`,
            group: `external`,
            position: `before`,
          },
          {
            pattern: `remix`,
            group: `external`,
            position: `before`,
          },
        ],
        pathGroupsExcludedImportTypes: [`react`, `remix`],
      },
    ],
    "react/prop-types": `off`,
    "react/require-default-props": `off`,
    "react/react-in-jsx-scope": `off`,
  },
}
