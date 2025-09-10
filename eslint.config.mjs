import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import pluginCypress from 'eslint-plugin-cypress';

export default [
    {
        files: ['**/*.ts', '**/*.tsx'],
        ignores: ['*.config.ts', '**/*.config.ts'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        },
        plugins: {
            '@typescript-eslint': tsEslint
        },
        rules: {
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/ban-ts-comment': 'warn',
            '@typescript-eslint/no-non-null-assertion': 'warn',
            'no-unused-vars': 'off',
            'no-array-constructor': 'off'
        }
    },

    // Config files
    {
        files: ['*.config.ts', '**/*.config.ts'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        },
        plugins: {
            '@typescript-eslint': tsEslint
        },
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn'
        }
    },

    // Cypress files
    {
        files: ['cypress/**/*.ts', 'cypress/**/*.js', '**/*.cy.ts'],
        languageOptions: {
            parser: tsParser,
            globals: {
                cy: 'readonly',
                Cypress: 'readonly',
                expect: 'readonly',
                assert: 'readonly',
                chai: 'readonly'
            }
        },
        plugins: {
            cypress: pluginCypress
        },
        rules: {
            'cypress/no-assigning-return-values': 'error',
            'cypress/no-unnecessary-waiting': 'error',
            'cypress/assertion-before-screenshot': 'warn',
            'cypress/no-force': 'warn',
            'cypress/no-async-tests': 'error',
            'cypress/no-pause': 'error'
        }
    },

    prettierConfig
];