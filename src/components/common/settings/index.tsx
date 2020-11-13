import * as React from 'react'
import classnames from 'classnames'
import ThemeContext from '@components/context/theme-context'
import Segment from '@components/ui/segment/components/segment'
import css from './index.module.scss'

const Settings = () => {
    const theme = React.useContext(ThemeContext)

    const classNames = classnames(css.settings, css[theme])

    return (
        <div className={classNames}>
            <Segment>
                123
            </Segment>
        </div>
    )
}

export default React.memo(Settings)
