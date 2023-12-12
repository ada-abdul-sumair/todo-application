module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageReporters: ['text', 'cobertura'],
};
