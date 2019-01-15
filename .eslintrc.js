'use strict'

module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:node/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        // When https://github.com/mysticatea/eslint-plugin-node/issues/100 is resolved, change this to only checking relative paths
        'node/no-missing-require': 'off',
        'node/no-unpublished-require': 'off',
        'node/no-deprecated-api': 'warn',
        'no-var': 'error',
        'no-unused-vars': ['error', {vars: 'all', args: 'after-used'}],
    },
    overrides: [
        {
            files: ['test/**/*.js', '**/*.spec.js'],
            env: {
                mocha: true,
            },
        },
    ],
}
