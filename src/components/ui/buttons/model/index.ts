import * as React from 'react'
import {LinkTarget, ParentClass} from '@models/ui'

export type ButtonHtmlType = 'button' | 'submit' | 'reset'

export interface ButtonProps extends ParentClass {
    htmlType?: ButtonHtmlType
    href?: string
    target?: LinkTarget
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
