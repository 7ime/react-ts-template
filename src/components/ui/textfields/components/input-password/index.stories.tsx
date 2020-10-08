import * as React from 'react'
import InputPassword from '@components/ui/textfields/components/input-password/index'

export default {
    title: 'InputPassword',
    component: InputPassword,
}

export const Default = () => {
    const [value, setValue] = React.useState('')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <InputPassword label={'Default'}
               value={value}
               onReset={() => {setValue('')}}
               onChange={handleChange}/>
    )
}

export const Autofocus = () => {
    const [value, setValue] = React.useState('')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <InputPassword label={'Autofocus'}
                       value={value}
                       autofocus
                       onReset={() => {setValue('')}}
                       onChange={handleChange}/>
    )
}

export const WithValue = () => {
    const [value, setValue] = React.useState('test value')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <InputPassword label={'With value'}
                       value={value}
                       onReset={() => {setValue('')}}
                       onChange={handleChange}/>
    )
}

export const Disabled = () => {
    const [value, setValue] = React.useState('')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <InputPassword label={'Disabled'}
               value={value}
               disabled
               onReset={() => {setValue('')}}
               onChange={handleChange}/>
    )
}

export const Success = () => {
    const [value, setValue] = React.useState('')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <InputPassword label={'Success'}
               value={value}
               success={[true, ['Test success message']]}
               onReset={() => {setValue('')}}
               onChange={handleChange}/>
    )
}

export const Error = () => {
    const [value, setValue] = React.useState('')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <InputPassword label={'Error'}
               value={value}
               error={[true, ['Test error message']]}
               onReset={() => {setValue('')}}
               onChange={handleChange}/>
    )
}
