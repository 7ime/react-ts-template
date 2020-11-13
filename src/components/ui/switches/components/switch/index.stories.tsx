import * as React from 'react'
import Switch from '@components/ui/switches/components/switch/index'

export default {
    title: 'Switch',
    component: Switch,
}

export const Default = () => {
    const [value, setValue] = React.useState(true)

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked)
    }, [])

    return (
        <Switch enabled={value}
                onChange={handleChange}/>
    )
}

export const Primary = () => {
    const [value, setValue] = React.useState(true)

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked)
    }, [])

    return (
        <Switch enabled={value}
                type={'primary'}
                onChange={handleChange}/>
    )
}

export const Secondary = () => {
    const [value, setValue] = React.useState(true)

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked)
    }, [])

    return (
        <Switch enabled={value}
                type={'secondary'}
                onChange={handleChange}/>
    )
}

export const Disabled = () => {
    const [value, setValue] = React.useState(true)

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked)
    }, [])

    return (
        <Switch enabled={value}
                disabled
                onChange={handleChange}/>
    )
}
