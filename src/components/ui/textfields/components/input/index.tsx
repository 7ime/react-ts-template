import * as React from 'react'
import classnames from 'classnames'
import {ITextField} from '../../model'
import css from '../../styles/textfield.module.scss'
import {useTextField} from '../../hooks/use-textfield'
import MessageValidationContainer from '../../../message-validation-container'

const Input = (props: ITextField.InputProps) => {
    const {
        onReset,
        label
    } = props

    const {
        handleFocus,
        handleBlur,
        handleChange,
        isError,
        errorMessage,
        isSuccess,
        successMessage,
        value,
        isFocused,
        nodeEl,
        autofocus,
        classNames
    } = useTextField<HTMLInputElement>(props)

    const handleReset = React.useCallback(() => {
        onReset && onReset()
    }, [])

    return (
        <div className={classNames}>
            <label className={css.label}>{label}</label>
            <div className={classnames(css.controlWrap, css.controlWrapInput)}
                 onFocus={handleFocus}
                 onBlur={handleBlur}
                 tabIndex={0}>
                <input className={classnames(css.control, css.controlInput)}
                       onChange={handleChange}
                       autoFocus={autofocus}
                       ref={nodeEl}
                       value={value}
                       tabIndex={-1}
                       type={'text'}/>
                {
                    isFocused && onReset && (
                        <div className={css.triggers}>
                            <div className={classnames(css.trigger, css.triggerClear)} onMouseDown={handleReset}/>
                        </div>
                    )
                }
            </div>

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

export default React.memo(Input)
