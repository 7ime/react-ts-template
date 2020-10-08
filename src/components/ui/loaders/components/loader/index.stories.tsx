import * as React from 'react'
import Loader from '@components/ui/loaders/components/loader/index'

export default {
    title: 'Loader',
    component: Loader
}

export const Default = () => {
    return <Loader/>
}

export const Primary = () => {
    return <Loader type={'primary'}/>
}

export const Secondary = () => {
    return <Loader type={'secondary'}/>
}

export const Large = () => {
    return <Loader type={'primary'} size={'large'}/>
}

export const Small = () => {
    return <Loader type={'secondary'} size={'small'}/>
}

