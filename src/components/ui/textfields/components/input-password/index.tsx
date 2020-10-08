import * as React from 'react'
import classnames from 'classnames'
import {ITextField} from '../../model'
import css from '../../styles/textfield.module.scss'
import {useTextField} from '../../hooks/use-textfield'
import MessageValidationContainer from '../../../message-validation-container'

enum EType {
    password = 'password',
    text = 'text',
}

const InputPassword = (props: ITextField.InputProps) => {
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

    const [type, setType] = React.useState(EType.password)

    const handlerChangeType = React.useCallback(() => {
        const newType = type === EType.password ? EType.text : EType.password

        setType(newType)
    }, [type])

    const handleReset = React.useCallback(() => {
        onReset && onReset()
    }, [])

    const classNamesForTriggerPassword = classnames(
        css.trigger,
        {[css.triggerEye]: type === EType.text},
        {[css.triggerEyeOff]: type === EType.password},
    )

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
                       type={type}/>
                {
                    isFocused && onReset && (
                        <div className={css.triggers}>
                            <div className={classNamesForTriggerPassword} onMouseDown={handlerChangeType}/>
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

export default React.memo(InputPassword)
