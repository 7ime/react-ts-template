import {isNumber} from './index'

describe('testing fn isNumber', () => {
    test('testing a number as a string', () => {
        expect(isNumber('1')).toBeTruthy()
    })

    test('testing a number as a number', () => {
        expect(isNumber(1)).toBeTruthy()
    })

    test('testing a number as null', () => {
        expect(isNumber(null)).toBeFalsy()
    })

    test('testing a number as undefined', () => {
        expect(isNumber(undefined)).toBeFalsy()
    })

    test('testing any string with numbers', () => {
        expect(isNumber('123+')).toBeFalsy()
    })
})
