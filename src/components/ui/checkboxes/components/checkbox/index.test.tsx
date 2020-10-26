import * as React from 'react'
import {cleanup, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Checkbox from '@components/ui/checkboxes/components/checkbox/index'

import css from '../../styles/checkbox.module.scss'

describe('test checkbox', () => {
    const checkboxTestText = 'You agree to the privacy policy'

    afterEach(() => {
        cleanup()
    })

    it('primary type', () => {
        const {container} = render(<Checkbox checked type={'primary'} onChange={jest.fn}>{checkboxTestText}</Checkbox>)

        const checkbox = container.querySelector('.checkbox') as HTMLElement

        expect(checkbox.classList.contains(css.primary)).toBeTruthy()
        expect(checkbox.classList.contains(css.secondary)).toBeFalsy()
    })

    it('secondary type', () => {
        const {container} = render(<Checkbox checked type={'secondary'} onChange={jest.fn}>{checkboxTestText}</Checkbox>)

        const checkbox = container.querySelector('.checkbox') as HTMLElement

        expect(checkbox.classList.contains(css.secondary)).toBeTruthy()
        expect(checkbox.classList.contains(css.primary)).toBeFalsy()
    })

    it('checked', () => {
        const {container} = render(<Checkbox checked onChange={jest.fn}>{checkboxTestText}</Checkbox>)

        const checkbox = container.querySelector('.checkbox') as HTMLElement
        const input = container.querySelector('input') as HTMLInputElement

        expect(input.checked).toBeTruthy()
        expect(checkbox.classList.contains(css.is_checked)).toBeTruthy()
    })

    it('disabled', () => {
        const {container} = render(<Checkbox checked disabled onChange={jest.fn}>{checkboxTestText}</Checkbox>)

        const checkbox = container.querySelector('.checkbox') as HTMLElement

        expect(checkbox.classList.contains(css.is_disabled)).toBeTruthy()
    })


    it('error', () => {
        const {container, getByText} = render(<Checkbox checked onChange={jest.fn} error={[true, ['error message']]}>{checkboxTestText}</Checkbox>)

        const checkbox = container.querySelector('.checkbox') as HTMLElement

        expect(getByText(/error/)).toBeInTheDocument()
        expect(checkbox.classList.contains(css.is_error)).toBeTruthy()
        expect(checkbox.classList.contains(css.is_success)).toBeFalsy()
    })

    it('success', () => {
        const {container, getByText} = render(<Checkbox checked onChange={jest.fn} success={[true, ['success message']]}>{checkboxTestText}</Checkbox>)

        const checkbox = container.querySelector('.checkbox') as HTMLElement

        expect(getByText(/success/)).toBeInTheDocument()
        expect(checkbox.classList.contains(css.is_success)).toBeTruthy()
        expect(checkbox.classList.contains(css.is_error)).toBeFalsy()
    })
})

