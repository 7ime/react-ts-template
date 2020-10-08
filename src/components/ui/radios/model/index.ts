import * as React from 'react'
import {IFieldValidationStatus} from '../../../../models/field-validation-status'
import {IParentClass} from '@models/shared'

export namespace IRadio {
    interface BaseProps extends IFieldValidationStatus, IParentClass {
        disabled?: boolean
    }

    export interface ButtonProps extends BaseProps {
        value: string
        type?: 'primary' | 'secondary'
        checked?: boolean
        name?: string

        children: React.ReactChild | React.ReactNode

        onChange?(event: React.ChangeEvent<HTMLInputElement>): unknown
    }

    export interface GroupProps extends BaseProps {
        value: string | null
        name: string

        children: React.FunctionComponentElement<ButtonProps>[]

        onChange(event: React.ChangeEvent<HTMLInputElement>): unknown
    }
}
