import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'

interface IProps {
    type?: 'error' | 'success'
    parentClass?: string
    messageList: string[]
}

const MessageValidationContainer = (props: IProps) => {
    const {
        type = '',
        parentClass,
        messageList
    } = props

    const classNames = classnames(
        css.list,
        {[css[type]]: type},
        parentClass
    )

    return (
        <div className={classNames}>
            {
                messageList.map((msg) => (<div key={msg} className={css.item}>{msg}</div>))
            }
        </div>
    )
}

export default React.memo(MessageValidationContainer)
