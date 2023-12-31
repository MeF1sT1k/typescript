/* eslint-disable max-len */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'react/react-in-jsx-scope': 0,
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 0,
        indent: [2, 4],
        'no-unused-vars': 1,
        'react/require-default-props': 0,
        'import/prefer-default-export': 0,
        'react/function-component-definition': 0,
        'no-shadow': 0,
        'react/jsx-props-no-spreading': 1,
        'import/extensions': 0,
        'import/no-extraneous-dependencies': 0,
        'no-underscore-dangle': 0,
        'linebreak-style': [0, 'LF'],
        'max-len': [2, { ignoreComments: true, code: 100 }],
    },
    globals: {
        __IS_DEV__: true,
    },
};
