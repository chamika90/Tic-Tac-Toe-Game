module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            env: {
                es6: true,
                node: true,
                jest: true,
                'react-native/react-native': true,
            },
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-unused-expressions': 'error',
                'no-shadow': 'off',
                'no-undef': 'off',
            },
        },
    ],
};
