import * as React from 'react'
import {FieldValidationStatus} from '@models/ui'

export interface CheckboxProps extends FieldValidationStatus {
    checked: boolean
    children: React.ReactChild | React.ReactNode

    type?: 'primary' | 'secondary'
    disabled?: boolean

    onChange(event: React.ChangeEvent<HTMLInputElement>): unknown
}
