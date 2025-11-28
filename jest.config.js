/** @type {import('jest').Config} */
const config = {
  // Use experimental VM modules for ES module support
  testEnvironment: 'node',
  
  // Transform ES modules
  transform: {},
  
  // Test file patterns
  testMatch: [
    '**/test/**/*.test.js',
    '**/test/**/*.spec.js'
  ],
  
  // Coverage configuration
  collectCoverageFrom: [
    'src/add.js',
    'src/get.js',
    'src/filter.js',
    'src/map.js',
    'src/toNumber.js',
    'src/isEmpty.js',
    'src/isObject.js',
    'src/toString.js',
    'src/capitalize.js',
    'src/defaultTo.js'
  ],
  
  // Coverage reporters
  coverageReporters: ['text', 'lcov', 'html'],
  
  // Verbose output
  verbose: true,

  // Module file extensions
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
  
  // Setup files
  setupFilesAfterEnv: ['jest-extended/all']
};

export default config;
