module.exports = {
  setupFilesAfterEnv: [
    'given2/setup',
    'jest-plugin-context/setup',
  ],
  testEnvironment: 'jsdom',
};
