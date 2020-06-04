module.exports = {
  clearMocks: true,
  displayName: {
    name: "CLIENT",
    color: "blue",
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "src/**/*.{ts,tsx}",
    "!src/**/*.test.{js,jsx}",
    "!src/**/*.test.{ts,tsx}",
  ],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  coverageReporters: ["json", "lcov", "text-summary"],
  moduleFileExtensions: ["js", "json", "jsx", "tsx", "ts"],
  moduleDirectories: ["node_modules", "src"],
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  verbose: true,
};
