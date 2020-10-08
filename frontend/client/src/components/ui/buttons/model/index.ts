import * as React from 'react'
import {ELoaderPosition} from '@constants/shared'
import {IParentClass} from '@models/shared'

namespace IButton {
    export type LoaderPosition = ELoaderPosition
    export type Target = '_blank' | '_self' | '_parent' | '_top'
    export type HTMLType = 'button' | 'submit' | 'reset'

    interface BaseProps extends IParentClass {
        type?: 'primary' | 'secondary' | 'warning' | 'attention'
        shape?: 'round'
        loader?: boolean
        loaderPosition?: LoaderPosition
        disabled?: boolean
        title?: string
        onMouseDown?(event: React.MouseEvent): unknown
        onMouseUp?(event: React.MouseEvent): unknown
        onClick?(event: React.MouseEvent): unknown
        onFocus?(event: React.FocusEvent): unknown
        onBlur?(event: React.FocusEvent): unknown

        children?: React.ReactChild | React.ReactNode
    }

    export interface ButtonProps extends BaseProps {
        htmlType?: HTMLType
    }

    export interface ButtonLinkProps extends BaseProps {
        href?: string
        target?: Target
    }
}

export default IButton
