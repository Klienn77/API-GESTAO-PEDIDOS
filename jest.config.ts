module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',  // Define o ambiente de teste como Node.js
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'  // Define um alias para simplificar as importações
  },
  transform: {
    '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  testMatch: ['**/test/**/*.test.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
};


