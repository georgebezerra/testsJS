module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.spec.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  // setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  // modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest'],
  },
};
