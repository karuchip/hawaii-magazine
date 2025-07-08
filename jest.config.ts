import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // ある場合（あとで説明）
  moduleNameMapper: {
    // CSSや画像のimportがある場合に備えて
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
}

export default config

// const nextJest = require('next/jest')

// const createJestConfig = nextJest({
//   dir: './',
// })

// const customJestConfig = {
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//   testEnvironment: 'jsdom',
//   moduleNameMapper: {
//     '^@/components/(.*)$': '<rootDir>/app/components/$1',
//     '^@/context/(.*)$': '<rootDir>/app/context/$1',
//   },
// }

// module.exports = createJestConfig(customJestConfig)
