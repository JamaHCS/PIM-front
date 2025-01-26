import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  cache: true,
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@env': '<rootDir>/src/environments/environment',
    '@src/(.*)': '<rootDir>/src/src/$1',
    '@services/(.*)': '<rootDir>/src/app/core/services/$1',
    '@helpers/(.*)': '<rootDir>/src/app/helpers/$1',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
    'src/(.*)': '<rootDir>/src/$1',
  },
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!<rootDir>/node_modules/',
    '!<rootDir>/test/',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/environments/environment.test.ts',
  ],
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: './test-report.html',
        includeFailureMsg: true,
        includeSuiteFailure: true,
      },
    ],
  ],
};

export default config;
