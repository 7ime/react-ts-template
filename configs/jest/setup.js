process.env.NODE_ENV = 'test'

jest.mock('serviceworker-webpack-plugin/lib/runtime', () => {
    return jest.fn()
})
