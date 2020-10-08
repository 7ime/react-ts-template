import * as React from 'react'
import Textarea from '@components/ui/textfields/components/textarea/index'

export default {
    title: 'Textarea',
    component: Textarea,
}

export const Default = () => {
    const [value, setValue] = React.useState('')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <Textarea label={'Default'}
               value={value}
               onChange={handleChange}/>
    )
}

export const Autofocus = () => {
    const [value, setValue] = React.useState('')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <Textarea label={'Autofocus'}
                  value={value}
                  autofocus
                  onChange={handleChange}/>
    )
}

export const WithValue = () => {
    const [value, setValue] = React.useState('test value')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <Textarea label={'With value'}
                  value={value}
                  onChange={handleChange}/>
    )
}

export const SetCertainRows = () => {
    const [value, setValue] = React.useState('test value')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <Textarea label={'Set certain rows'}
                  rows={10}
                  value={value}
                  onChange={handleChange}/>
    )
}

export const Disabled = () => {
    const [value, setValue] = React.useState('')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <Textarea label={'Disabled'}
               value={value}
               disabled
               onChange={handleChange}/>
    )
}

export const Success = () => {
    const [value, setValue] = React.useState('')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <Textarea label={'Success'}
               value={value}
               success={[true, ['Test success message']]}
               onChange={handleChange}/>
    )
}

export const Error = () => {
    const [value, setValue] = React.useState('')

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    return (
        <Textarea label={'Error'}
               value={value}
               error={[true, ['Test error message']]}
               onChange={handleChange}/>
    )
}
