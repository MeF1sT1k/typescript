import type { Config } from 'jest';
import path from 'path';

const config: Config = {
    clearMocks: true,

    testEnvironment: 'jsdom',

    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],

    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],

    rootDir: '../../',

    modulePaths: [
        '<rootDir>src',
    ],

    moduleDirectories: [
        'node_modules',
    ],

    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponents.tsx'),
        '\\.gif': path.resolve(__dirname, 'jestEmptyComponents.tsx'),
    },

    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],

    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
};

export default config;
