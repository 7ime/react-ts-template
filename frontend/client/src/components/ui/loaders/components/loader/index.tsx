import * as React from 'react'
import ILoader from '../../model'
import css from '../../styles/loader.module.scss'
import classnames from 'classnames'

const Loader = (props: ILoader.Props) => {
    const {
        type = '',
        size = ''
    } = props

    const classNames = classnames(
        css.loader,
        {[css[type]]: type},
        {[css[size]]: size}
    )

    return(
        <div className={classNames}>
            <svg className={css.circular} viewBox='25 25 50 50'>
                <circle className={css.path} cx='50' cy='50' r='20' fill='none' strokeMiterlimit='10'/>
            </svg>
        </div>
    )
}

export default React.memo(Loader)
