export default {
    preset: 'ts-jest',
    clearMocks: true,
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/fileMock.js',
    },
}