import * as React from 'react'
import classnames from 'classnames'
import ThemeContext from '@components/context/theme-context'
import Segment from '@components/ui/segment/components/segment'
import css from './index.module.scss'

const Ecosystem = () => {
    const theme = React.useContext(ThemeContext)

    const classNames = classnames(css.ecosystem, css[theme])

    return (
        <div className={classNames}>
           <Segment>Ecosystem</Segment>
        </div>
    )
}

export default React.memo(Ecosystem)
