import * as React from 'react'
import classnames from 'classnames'
import IButton from '../../model'
import Loader from '../../../loaders/components/loader'
import {ELoaderPosition} from '@constants/shared'
import css from '../../styles/button.module.scss'

const ButtonLink = (props: IButton.ButtonLinkProps) => {
    const {
        href = '#',
        loader,
        loaderPosition = ELoaderPosition.center,
        type = '',
        shape = '',
        disabled,
        children,
        parentClass,
        ...restProps
    } = props

    const classNames = classnames(
        css.button,
        {[css[type]]: type},
        {[css[shape]]: shape},
        {[css.is_disabled]: disabled},
        {[css.loader]: loader},
        {[css[`loader_${loaderPosition}`]]: loader},
        parentClass
    )

    return (
        <a href={href} className={classNames} {...restProps}>
            {children}
            {loader && <div className={css.loaderComponent}><Loader/></div>}
        </a>
    )
}

export default React.memo(ButtonLink)
