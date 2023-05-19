const path = require('path');

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.(ts|tsx)', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      tsconfig: {
        allowJs: true,
        target: 'ES2020',
      },
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  moduleNameMapper: {
    '^features(.*)$': '<rootDir>/src/features$1',
  },
  roots: [path.resolve(__dirname, './src')],
  setupFilesAfterEnv: [path.resolve(__dirname, './jest.setup.ts')],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.spec.(ts|tsx)'],
  transform: {
    '^.+\\.[t|j]s(x)?$': 'ts-jest',
    '\\.svg$': 'svg-jest',
  },
};
