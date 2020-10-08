import * as React from 'react'
import RadioGroup from '@components/ui/radios/components/radio-group/index'
import Radio from '@components/ui/radios/components/radio'

export default {
    title: 'Radio Group',
    component: RadioGroup,
}

export const Default = () => {
    const [value, setValue] = React.useState('+')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <RadioGroup value={value} onChange={handleChange} name={'default'}>
            <Radio value={'+'} type={'primary'}>Plus</Radio>
            <Radio value={'/'} type={'primary'}>Divided by</Radio>
            <Radio value={'*'} type={'primary'}>Times</Radio>
            <Radio value={'-'} type={'primary'}>Minus</Radio>
        </RadioGroup>
    )
}

export const Success = () => {
    const [value, setValue] = React.useState('+')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <RadioGroup value={value} onChange={handleChange} name={'success'} success={[true, ['test success message']]}>
            <Radio value={'+'} type={'primary'}>Plus</Radio>
            <Radio value={'/'} type={'primary'}>Divided by</Radio>
            <Radio value={'*'} type={'primary'}>Times</Radio>
            <Radio value={'-'} type={'primary'}>Minus</Radio>
        </RadioGroup>
    )
}

export const Error = () => {
    const [value, setValue] = React.useState('')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <RadioGroup value={value} onChange={handleChange} name={'error'} error={[true, ['test error message']]}>
            <Radio value={'+'} type={'primary'}>Plus</Radio>
            <Radio value={'/'} type={'primary'}>Divided by</Radio>
            <Radio value={'*'} type={'primary'}>Times</Radio>
            <Radio value={'-'} type={'primary'}>Minus</Radio>
        </RadioGroup>
    )
}

export const Disabled = () => {
    const [value, setValue] = React.useState('+')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <RadioGroup value={value} disabled onChange={handleChange} name={'disabled'}>
            <Radio value={'+'} type={'primary'}>Plus</Radio>
            <Radio value={'/'} type={'primary'}>Divided by</Radio>
            <Radio value={'*'} type={'primary'}>Times</Radio>
            <Radio value={'-'} type={'primary'}>Minus</Radio>
        </RadioGroup>
    )
}

