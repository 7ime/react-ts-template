import * as React from 'react'
import Checkbox from '@components/ui/checkboxes/components/checkbox/index'

export default {
    title: 'Checkbox',
    component: Checkbox,
}

export const Default = () => {
    const [value, setValue] = React.useState(true)

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked)
    }, [])

    return (
        <Checkbox checked={value}
                  onChange={handleChange}>You agree to the privacy policy</Checkbox>
    )
}

export const Primary = () => {
    const [value, setValue] = React.useState(true)

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked)
    }, [])

    return (
        <Checkbox checked={value}
                  type={'primary'}
                  onChange={handleChange}>You agree to the privacy policy</Checkbox>
    )
}

export const Secondary = () => {
    const [value, setValue] = React.useState(true)

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked)
    }, [])

    return (
        <Checkbox checked={value}
                  type={'secondary'}
                  onChange={handleChange}>You agree to the privacy policy</Checkbox>
    )
}

export const Disabled = () => {
    const [value, setValue] = React.useState(true)

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked)
    }, [])

    return (
        <Checkbox checked={value}
                  type={'secondary'}
                  disabled
                  onChange={handleChange}>You agree to the privacy policy</Checkbox>
    )
}

export const Success = () => {
    const [value, setValue] = React.useState(true)

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked)
    }, [])

    return (
        <Checkbox checked={value}
                  type={'secondary'}
                  success={[true, ['test success message']]}
                  onChange={handleChange}>You agree to the privacy policy</Checkbox>
    )
}

export const Error = () => {
    const [value, setValue] = React.useState(false)

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked)
    }, [])

    return (
        <Checkbox checked={value}
                  type={'secondary'}
                  error={[true, ['test error message']]}
                  onChange={handleChange}>You agree to the privacy policy</Checkbox>
    )
}

