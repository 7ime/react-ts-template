import * as React from 'react'
import {IFieldValidationStatus} from '@models/field-validation-status'

export namespace ICheckbox{
    export interface Props extends IFieldValidationStatus {
        checked: boolean
        children: React.ReactChild | React.ReactNode

        type?: 'primary' | 'secondary'
        disabled?: boolean

        onChange(event: React.ChangeEvent<HTMLInputElement>): unknown
    }
}
