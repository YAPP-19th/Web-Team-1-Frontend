module.exports = {
  setupFilesAfterEnv: [
    'given2/setup',
    'jest-plugin-context/setup',
    './jest.setup',
  ],
  moduleNameMapper: {
    '@src/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
};
