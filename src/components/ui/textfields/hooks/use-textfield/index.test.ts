import {renderHook, act} from '@testing-library/react-hooks'
import {useTextField} from '@components/ui/textfields/hooks/use-textfield/index'

import css from '../../styles/textfield.module.scss'

describe('test useTextField hook', () => {
    test('handleFocus', () => {
        const {result} = renderHook(() => useTextField({
            value: '123',
            label: 'test',
            onChange: jest.fn
        }))

        act(() => {
            result.current.handleFocus()
        })

        expect(result.current.isFocused).toBeTruthy()
        expect(result.current.isBlur).toBeFalsy()
        expect(result.current.classNames).toEqual(expect.stringMatching(css.is_focused))
        expect(result.current.classNames).not.toEqual(expect.stringMatching(css.is_blur))
    })
})
