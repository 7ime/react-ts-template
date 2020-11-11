import * as React from 'react'
import {FieldValidationStatus, ParentClass} from '@models/ui'

interface BaseProps extends FieldValidationStatus, ParentClass {
    disabled?: boolean
}

export interface RadioProps extends BaseProps {
    value: string
    type?: 'primary' | 'secondary'
    checked?: boolean
    name?: string

    children: React.ReactChild | React.ReactNode

    onChange?(event: React.ChangeEvent<HTMLInputElement>): unknown
}

export interface RadioGroupProps extends BaseProps {
    value: string | null
    name: string

    children: React.FunctionComponentElement<RadioProps>[]

    onChange(event: React.ChangeEvent<HTMLInputElement>): unknown
}
