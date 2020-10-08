const tsconfig = require('./tsconfig.json')
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig)

module.exports = {
    setupFiles: ['<rootDir>/configs/jest/setup.js'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts'
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
    moduleNameMapper: moduleNameMapper
}
