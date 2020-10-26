import {delay} from './index'

describe('testing fn delay', () => {
    it('testing just complete', async() => {
        const result = await delay(100)

        expect(result).toBeUndefined()
    })
})