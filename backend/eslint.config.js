const js = require("@eslint/js");
const prettier = require("eslint-config-prettier");
const globals = require("globals");

module.exports = [
    js.configs.recommended,
    prettier,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.es2021,
                ...globals.jest
            },
            ecmaVersion: 12,
            sourceType: "commonjs",
        },
        rules: {
            "no-console": "off",
            "no-unused-vars": "warn"
        }
    }
];
