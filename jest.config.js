const tsconfig = require('./tsconfig.json')
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig)

module.exports = {
    setupFiles: ['<rootDir>/configs/jest/setup.js'],
    collectCoverageFrom: [
        'src/helpers/**/*.{js,ts}',
        'src/api/**/*.{js,ts}',
        'src/components/**/*.{js,jsx,ts,tsx}',
        'src/modules/**/*.{js,jsx,ts,tsx}',
        'src/services/**/*.{js,ts}',
        'src/store/**/*.{js,ts}',
        'src/toolbox/utils/**/*.{js,ts}',
        'src/toolbox/injects/**/*.{js,ts}',
        '!src/**/*.d.ts',
        '!src/**/*.stories.tsx',
    ],
    roots: [
        '<rootDir>/src',
    ],
    testMatch: [
        '<rootDir>/src/**/*.{spec,test}.{ts,tsx}',
    ],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
        '^.+\\.css$': '<rootDir>/configs/jest/cssTransform.js',
        '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/configs/jest/fileTransform.js'
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
    collectCoverage: true,
    coverageReporters: ['clover', 'text'],
    coverageDirectory: './',
    moduleNameMapper: {
        ...moduleNameMapper,
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules'
    }
}
