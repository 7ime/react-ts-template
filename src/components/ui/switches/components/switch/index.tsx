import * as React from 'react'
import classnames from 'classnames'
import {v4 as uuid} from 'uuid'
import {ISwitch} from '../../model'
import css from '../../styles/switch.module.scss'
import ThemeContext from '@components/context/theme-context'

const Switch = (props: ISwitch.Props) => {
    const theme = React.useContext(ThemeContext)

    const {
        enabled,
        type = '',
        disabled = false,
        onChange,
        parentClass
    } = props

    const [uuidCheckbox] = React.useState(uuid())

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event)
    }, [])

    const classNames = classnames(
        css.switch,
        css[theme],
        {[css[type]]: type},
        {[css.is_enabled]: enabled},
        {[css.is_disabled]: disabled},
        parentClass
    )

    return (
        <label htmlFor={uuidCheckbox} className={classNames}>
            <input type='checkbox'
                   onChange={handleChange}
                   className={css.control}
                   checked={enabled}
                   id={uuidCheckbox}
            />
            <div className={css.pseudoControl}/>
        </label>
    )
}

export default React.memo(Switch)
