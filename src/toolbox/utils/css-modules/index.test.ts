import CSSModules from './index'

describe('testing CSSModules', () => {
    const cssMock = {
        primary: 'primary___123',
        secondary: 'secondary___123'
    }

    test.each([
        [['primary'], cssMock, [cssMock.primary]],
        [['secondary'], cssMock, [cssMock.secondary]]
    ])('extractClassNamesForArray - exist', (classNames, css, expectedResult) => {
        const result = CSSModules.extractClassNamesForArray(classNames, css)
        expect(result).toEqual(expectedResult)
    })

    test('extractClassNamesForArray - not exist', () => {
        const result = CSSModules.extractClassNamesForArray(['test'], cssMock)

        expect(result).toEqual([''])
    })
})
