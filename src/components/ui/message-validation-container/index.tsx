import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import {ParentClass} from '@models/ui'

interface Props extends ParentClass {
    type?: 'error' | 'success'
    messageList: string[]
}

const MessageValidationContainer = (props: Props) => {
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
