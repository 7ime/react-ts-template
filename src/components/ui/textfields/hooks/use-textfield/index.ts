import {ITextField} from '../../model'
import * as React from 'react'
import classnames from 'classnames'
import css from '../../styles/textfield.module.scss'

export const useTextField = <T extends {value: string, focus(): unknown}>(props: ITextField.BaseProps) => {
    const {
        autofocus = false,
        disabled = false,
        value: externalValue = '',
        error = [false, null],
        success = [false, null],
        onChange
    } = props

    const [isError, errorMessage] = error
    const [isSuccess, successMessage] = success

    const nodeEl = React.useRef<T>(null)
    const [value, setValue] = React.useState(externalValue)
    const [isFocused, setFocus] = React.useState(autofocus)
    const [isBlur, setBlur] = React.useState(true)

    React.useEffect(() => {
        setValue(externalValue)
    }, [externalValue])

    const classNames = classnames(
        css.textfield,
        {[css.is_disabled]: disabled},
        {[css.is_error]: isError},
        {[css.is_success]: isSuccess},
        {[css.is_blur]: isBlur && !value},
        {[css.is_focused]: isFocused},
    )

    const handleFocus = React.useCallback(() => {
        const node = nodeEl.current

        if (node && !disabled) {
            node.focus()
        }

        setBlur(false)
        setFocus(true)
    }, [])

    const handleBlur = React.useCallback(() => {
        const node = nodeEl.current

        setBlur(!(node !== null && node.value))
        setFocus(false)
    }, [])

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(event)
    }, [])

    return {
        handleFocus,
        handleBlur,
        handleChange,
        isError,
        errorMessage,
        isSuccess,
        successMessage,
        isBlur,
        value,
        isFocused,
        nodeEl,
        autofocus,
        classNames
    }
}
