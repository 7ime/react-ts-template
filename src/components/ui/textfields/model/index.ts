import * as React from 'react'
import {FieldValidationStatus} from '@models/ui'

export interface TextFieldBaseProps extends FieldValidationStatus {
    label: string
    value: string

    disabled?: boolean
    autofocus?: boolean

    onChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): unknown
}

export interface TextareaProps extends TextFieldBaseProps {
    rows?: number
}

export interface InputProps extends TextFieldBaseProps {
    onReset?(): unknown
}
