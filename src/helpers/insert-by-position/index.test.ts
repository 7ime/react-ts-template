import {EPosition} from '../../constants/shared'
import {insertByPosition} from './index'

describe('testing fn insertByPosition', () => {
    const testID = 99

    test.each([
        [[1, 2, 3], 3, [1, 2, testID, 3]],
        [[1, 2, 3], 2, [1, testID, 2, 3]],
        [[1, 2, 3], 1, [testID, 1, 2, 3]],
    ])('testing inserting into an array by anchor and position (BEFORE)', (source, anchor, equalSrc) => {
        const result = insertByPosition(source, testID, anchor, EPosition.BEFORE)
        expect(result).toEqual(equalSrc)
    })

    test.each([
        [[1, 2, 3], 3, [1, 2, 3, testID]],
        [[1, 2, 3], 2, [1, 2, testID, 3]],
        [[1, 2, 3], 1, [1, testID, 2, 3]],
    ])('testing inserting into an array by anchor and position (AFTER)', (source, anchor, equalSrc) => {
        const result = insertByPosition(source, testID, anchor, EPosition.AFTER)
        expect(result).toEqual(equalSrc)
    })

    test('testing inserting into an array at the end if there is no anchor and position', () => {
        const result = insertByPosition([1, 2, 3], testID)
        expect(result).toEqual([1, 2, 3, testID])
    })

    test('testing inserting into an array by anchor but without position', () => {
        const result = insertByPosition([1, 2, 3], testID, 3)
        expect(result).toEqual([1, 2, 3, testID])
    })

    test('testing inserting into an array without an anchor but with a position', () => {
        const result = insertByPosition([1, 2, 3], testID, undefined, EPosition.AFTER)
        expect(result).toEqual([1, 2, 3, testID])
    })
})
