import * as React from 'react'
import classnames from 'classnames'
import ThemeContext from '@components/context/theme-context'
import ISegment from '../../model'
import css from '../../styles/segment.module.scss'

const Segment = (props: ISegment.Props) => {
    const theme = React.useContext(ThemeContext)

    const {
        children,
        parentClass
    } = props

    const classNames = classnames(
        css.segment,
        parentClass,
        css[theme]
    )

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

export default React.memo(Segment)
