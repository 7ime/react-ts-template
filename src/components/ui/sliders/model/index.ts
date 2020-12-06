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

    export interface Settings {
        slidesToScroll?: number
    }

    export type Responsive = Record<number, Settings>

    export interface SliderProps extends IParentClass, Settings {
        children: React.FunctionComponentElement<SlideProps>[]
        responsive?: Responsive
    }
}

export default ISlider
