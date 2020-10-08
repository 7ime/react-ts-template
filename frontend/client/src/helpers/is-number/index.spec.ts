import {isNumber} from './index'

describe('testing fn isNumber', () => {
    it('testing a number as a string', () => {
        expect(isNumber('1')).toBeTruthy()
    })

    it('testing a number as a number', () => {
        expect(isNumber(1)).toBeTruthy()
    })

    it('testing a number as null', () => {
        expect(isNumber(null)).toBeFalsy()
    })

    it('testing a number as undefined', () => {
        expect(isNumber(undefined)).toBeFalsy()
    })

    it('testing any string with numbers', () => {
        expect(isNumber('123+')).toBeFalsy()
    })
})