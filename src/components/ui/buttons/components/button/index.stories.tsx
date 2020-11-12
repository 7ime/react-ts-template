import * as React from 'react'
import Button from '@components/ui/buttons/components/button/index'
import ThemeContext from '@components/context/theme-context'
import {ETheme} from '@constants/theme'

export default {
    title: 'Button',
    component: Button,
}

export const Default = () => {
    return <Button>Default</Button>
}

export const Link = () => {
    return <Button href={'#'}>Link</Button>
}

export const Primary = () => {
    return <Button type={'primary'}>Primary</Button>
}

export const PrimaryThemeDark = () => {
    return (
        <ThemeContext.Provider value={ETheme.dark}>
            <Button type={'primary'}>Primary</Button>
        </ThemeContext.Provider>
    )
}

export const Secondary = () => {
    return <Button type={'secondary'}>Secondary</Button>
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

export const Loader = () => {
    return <Button loader type={'primary'}>Loader</Button>
}

