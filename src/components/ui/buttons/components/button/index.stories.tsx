import * as React from 'react'
import Button from '@components/ui/buttons/components/button/index'
import {ELoaderPosition} from '@constants/shared'

export default {
    title: 'Button',
    component: Button,
}

export const Default = () => {
    return <Button>Default</Button>
}

export const Primary = () => {
    return <Button type={'primary'}>Primary</Button>
}

export const Secondary = () => {
    return <Button type={'secondary'}>Secondary</Button>
}

export const Attention = () => {
    return <Button type={'attention'}>Attention</Button>
}

export const Warning = () => {
    return <Button type={'warning'}>Warning</Button>
}

export const Disabled = () => {
    return <Button disabled>Disabled</Button>
}

export const Round = () => {
    return <Button shape={'round'}>Round</Button>
}

export const LoaderLeft = () => {
    return <Button loader loaderPosition={ELoaderPosition.left} type={'primary'}>Loader Left</Button>
}

export const LoaderMiddle = () => {
    return <Button loader type={'primary'}>Loader Middle</Button>
}

export const LoaderRight = () => {
    return <Button loader loaderPosition={ELoaderPosition.right} type={'primary'}>Loader Right</Button>
}

