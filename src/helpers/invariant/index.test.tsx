import {invariant} from './index'

describe('testing fn invariant', () => {
    it('success', () => {
        const result = invariant(true, 'error message')

        expect(result).toBeUndefined()
    })

    it('error', () => {
        const message = 'error message'

        expect(() => invariant(false, message)).toThrowError(message)
    })
})
