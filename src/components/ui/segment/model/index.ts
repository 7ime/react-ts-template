import * as React from 'react'
import {IParentClass} from '@models/shared'


namespace ISegment {
    export interface Props extends IParentClass {
        children: React.ReactNode
    }
}

export default ISegment
