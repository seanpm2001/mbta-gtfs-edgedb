module.exports = {
    env: {
        es2020: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 11,
        sourceType: "module",
    },
    plugins: ["prettier", "@typescript-eslint"],
    rules: {
        "@typescript-eslint/ban-ts-ignore": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/indent": 0,
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-inferrable-types": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_+$" }],
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "no-constant-condition": 0,
        "prettier/prettier": "error",
    },
};
