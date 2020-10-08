import * as React from 'react'
import {IRadio} from '../../model'
import {v4 as uuid} from 'uuid'
import classnames from 'classnames'
import css from '../../styles/radio.module.scss'

const Radio = (props: IRadio.ButtonProps) => {
    const {
        checked: externalChecked = false,
        type = '',
        disabled = false,
        error = [false, null],
        success = [false, null],
        value,
        children,
        name,
        onChange,
        parentClass
    } = props

    const [isError] = error
    const [isSuccess] = success

    const [checked, setChecked] = React.useState(externalChecked)
    const [uuidRadio, setUuidRadio] = React.useState(uuid())

    React.useEffect(() => {
        setChecked(externalChecked)
    }, [externalChecked])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event)
    }

    const classNames = classnames(
        css.radio,
        {[css[type]]: type},
        {[css.is_checked]: checked},
        {[css.is_disabled]: disabled},
        {[css.is_error]: isError},
        {[css.is_success]: isSuccess},
        parentClass
    )

    return (
        <div className={classNames}>
            <input type='radio'
                value={value}
                name={name}
                onChange={handleChange}
                className={css.control}
                id={uuidRadio}
            />

            <label htmlFor={uuidRadio} className={css.content}>
                <div className={css.pseudoControl}/>
                <div className={css.description}>{children}</div>
            </label>
        </div>
    )
}

export default React.memo(Radio)
