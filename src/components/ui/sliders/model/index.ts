import * as React from 'react'
import {IParentClass} from '@models/shared'

namespace ISlider {
    export interface SliderMetrics {
        width: number
        trackWidth: number
    }

    export interface SlideMetrics {
        x: number
        width: number
    }

    export interface SlideProps extends IParentClass {
        children: React.ReactChild | React.ReactNode
    }

    export interface SliderProps extends IParentClass {
        children: React.FunctionComponentElement<SlideProps>[]
        slidesToScroll: number
    }
}

export default ISlider
