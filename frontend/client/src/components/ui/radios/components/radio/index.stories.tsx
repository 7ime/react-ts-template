import * as React from 'react'
import Radio from '@components/ui/radios/components/radio'

export default {
    title: 'Radio',
    component: Radio,
}

export const Default = () => {
    return (
        <Radio value={'+'}>Plus</Radio>
    )
}

export const Primary = () => {
    return (
        <Radio value={'+'} checked type={'primary'}>Plus</Radio>
    )
}

export const Secondary = () => {
    return (
        <Radio value={'+'} checked type={'secondary'}>Secondary</Radio>
    )
}

export const Disabled = () => {
    return (
        <Radio value={'+'} checked disabled type={'secondary'}>Secondary</Radio>
    )
}

