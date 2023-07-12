module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/method-signature-style": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "no-console": "error",
  },
};
