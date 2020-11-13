import * as React from 'react'
import {IParentClass} from '@models/shared'

export namespace ISwitch {
    export interface Props extends IParentClass {
        enabled: boolean
        type?: 'primary' | 'secondary'
        disabled?: boolean

        onChange(event: React.ChangeEvent<HTMLInputElement>): unknown
    }
}
