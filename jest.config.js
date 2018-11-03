module.exports = {
  "roots": [
    "<rootDir>/",
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "((\\.|/)(test|spec))\\.ts$",
  "moduleFileExtensions": [
    "ts",
    "js",
    "json",
    "node"
  ],
  "collectCoverage": true,

  "coveragePathIgnorePatterns": [
    "<rootDir>/node_modules"
  ],
  "coverageReporters": [
    "json",
    "lcov",
    "text"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  }
};