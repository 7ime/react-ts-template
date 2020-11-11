import * as React from 'react'
import classnames from 'classnames'
import {ButtonProps} from '../../model'
import Loader from '../../../loaders/components/loader'
import css from '../../styles/button.module.scss'

const Button = (props: ButtonProps) => {
    const {
        href,
        target = '_self',
        htmlType = 'button',
        loader,
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
        parentClass
    )

    const TagName = href ? 'a' : 'button'

    const propsDependingOnTag: Record<string, string> = {}

    if (href) {
        propsDependingOnTag.href = href
        propsDependingOnTag.target = target
    } else {
        propsDependingOnTag.type = htmlType
    }

    return (
        <TagName className={classNames} {...restProps} {...propsDependingOnTag}>
            {children}
            {loader && <div className={css.loaderComponent}><Loader size={'small'}/></div>}
        </TagName>
    )
}

export default React.memo(Button)
