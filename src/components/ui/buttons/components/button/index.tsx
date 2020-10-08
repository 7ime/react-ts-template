import * as React from 'react'
import classnames from 'classnames'
import IButton from '../../model'
import Loader from '../../../loaders/components/loader'
import {ELoaderPosition} from '@constants/shared'
import css from '../../styles/button.module.scss'

const Button = (props: IButton.ButtonProps) => {
    const {
        loader,
        loaderPosition = ELoaderPosition.center,
        type = '',
        shape = '',
        htmlType = 'button',
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
        <button className={classNames} {...restProps} type={htmlType}>
            {children}
            {loader && <div className={css.loaderComponent}><Loader/></div>}
        </button>
    )
}

export default React.memo(Button)
