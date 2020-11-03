import * as React from 'react'
import {IParentClass} from '@models/shared'

namespace IButton {
    export type Target = '_blank' | '_self' | '_parent' | '_top'
    export type HTMLType = 'button' | 'submit' | 'reset'

    export interface Props extends IParentClass {
        htmlType?: HTMLType
        href?: string
        target?: Target
        type?: 'primary' | 'secondary' | 'warning'
        shape?: 'round'
        loader?: boolean
        disabled?: boolean
        title?: string
        onMouseDown?(event: React.MouseEvent): unknown
        onMouseUp?(event: React.MouseEvent): unknown
        onClick?(event: React.MouseEvent): unknown
        onFocus?(event: React.FocusEvent): unknown
        onBlur?(event: React.FocusEvent): unknown
        children?: React.ReactChild | React.ReactNode
    }
}

export default IButton
