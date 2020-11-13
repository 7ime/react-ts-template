import * as React from 'react'
import classnames from 'classnames'
import ThemeContext from '@components/context/theme-context'
import Segment from '@components/ui/segment/components/segment'
import css from './index.module.scss'
import Switch from '@components/ui/switches/components/switch'

const Settings = () => {
    const theme = React.useContext(ThemeContext)

    const classNames = classnames(css.settings, css[theme])

    const [value, setValue] = React.useState(true)

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked)
    }, [])

    return (
        <div className={classNames}>
            <Segment>
                <Switch enabled={value} onChange={handleChange}/>
                <br/>
                <Switch enabled={value} type={'primary'} onChange={handleChange}/>
                <br/>
                <Switch enabled={value} type={'secondary'} onChange={handleChange}/>
                <br/>
                <Switch enabled={value} disabled onChange={handleChange}/>
            </Segment>
        </div>
    )
}

export default React.memo(Settings)
