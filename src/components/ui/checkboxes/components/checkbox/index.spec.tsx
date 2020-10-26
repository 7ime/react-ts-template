import * as React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Checkbox from '@components/ui/checkboxes/components/checkbox/index'

describe('test checkbox', () => {
    const text = 'You agree to the privacy policy'

    it('render', () => {
        const {getByText} = render(<Checkbox checked onChange={jest.fn}>{text}</Checkbox>)

        expect(getByText(text)).toBeInTheDocument()
    })
})

