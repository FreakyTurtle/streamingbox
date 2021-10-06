module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@ft/(.*)$': '<rootDir>/src/modules/$1',
  },
  runner: "groups"
};