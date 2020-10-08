import * as React from 'react'
import classnames from 'classnames'
import {v4 as uuid} from 'uuid'
import {ICheckbox} from '../../model'
import css from '../../styles/checkbox.module.scss'
import MessageValidationContainer from '../../../message-validation-container'

const Checkbox = (props: ICheckbox.Props) => {
    const {
        checked: externalChecked = false,
        type = '',
        disabled = false,
        error = [false, null],
        success = [false, null],
        children,
        onChange
    } = props

    const [isError, errorMessage] = error
    const [isSuccess, successMessage] = success

    const [checked, setChecked] = React.useState(externalChecked)
    const [uuidCheckbox, setUuidCheckbox] = React.useState(uuid())

    React.useEffect(() => {
        setChecked(externalChecked)
    }, [externalChecked])

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event)
    }, [])

    const classNames = classnames(
        css.checkbox,
        {[css[type]]: type},
        {[css.is_checked]: checked},
        {[css.is_disabled]: disabled},
        {[css.is_error]: isError},
        {[css.is_success]: isSuccess},
    )

    return (
        <div className={classNames}>
            <label htmlFor={uuidCheckbox} className={css.content}>
                <input type='checkbox'
                    onChange={handleChange}
                    className={css.control}
                    checked={checked}
                    id={uuidCheckbox}
                />
                <div className={css.pseudoControl}/>
                <div className={css.description}>{children}</div>
            </label>

            {isSuccess && successMessage && (
                <MessageValidationContainer parentClass={css.messageContainer}
                                            type={'success'}
                                            messageList={successMessage}/>
            )}
            {isError && errorMessage && (
                <MessageValidationContainer parentClass={css.messageContainer}
                                            type={'error'}
                                            messageList={errorMessage}/>
            )}
        </div>
    )
}

export default React.memo(Checkbox)
