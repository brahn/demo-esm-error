module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true // [needed?] Enable Node.js global variables
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'no-console': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
    }
}
