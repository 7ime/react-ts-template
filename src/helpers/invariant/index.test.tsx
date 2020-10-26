import {invariant} from './index'

describe('testing fn invariant', () => {
    test('success', () => {
        const result = invariant(true, 'error message')

        expect(result).toBeUndefined()
    })

    test('error', () => {
        const message = 'error message'

        expect(() => invariant(false, message)).toThrowError(message)
    })
})
