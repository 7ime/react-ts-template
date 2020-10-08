import * as React from 'react'
import {ELoaderPosition} from '@constants/shared'
import ButtonLink from '@components/ui/buttons/components/button-link/index'

export default {
    title: 'Button Link',
    component: ButtonLink,
}

export const Default = () => {
    return <ButtonLink href={'#'}>Default</ButtonLink>
}

export const Primary = () => {
    return <ButtonLink href={'#'} type={'primary'}>Primary</ButtonLink>
}

export const Secondary = () => {
    return <ButtonLink href={'#'} type={'secondary'}>Secondary</ButtonLink>
}

export const Attention = () => {
    return <ButtonLink href={'#'} type={'attention'}>Attention</ButtonLink>
}

export const Warning = () => {
    return <ButtonLink href={'#'} type={'warning'}>Warning</ButtonLink>
}

export const Disabled = () => {
    return <ButtonLink href={'#'} disabled>Disabled</ButtonLink>
}

export const Round = () => {
    return <ButtonLink href={'#'} shape={'round'}>Round</ButtonLink>
}

export const LoaderLeft = () => {
    return <ButtonLink href={'#'} loader loaderPosition={ELoaderPosition.left} type={'primary'}>Loader Left</ButtonLink>
}

export const LoaderMiddle = () => {
    return <ButtonLink href={'#'} loader type={'primary'}>Loader Middle</ButtonLink>
}

export const LoaderRight = () => {
    return <ButtonLink href={'#'} loader loaderPosition={ELoaderPosition.right} type={'primary'}>Loader Right</ButtonLink>
}

