module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.test.ts?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json'
      }
    ]
  }
}
