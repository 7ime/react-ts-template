import {toNumber} from 'lodash'
import ISlider from '@components/ui/sliders/model'
import {arrayIndexInRange} from '@helpers/array-index-in-range'

export const getScreenWidth = (): number => {
    return window.innerWidth
}

export const getDefaultSettings = (): Required<ISlider.Settings> => {
    return {
        slidesToScroll: 1
    }
}

export const getPropsSettings = (props: ISlider.SliderProps): ISlider.Settings => {
    const result: ISlider.Settings = {}

    if (props.slidesToScroll !== undefined) {
        result.slidesToScroll = props.slidesToScroll
    }

    return result
}

export const getCurrentBreakPoint = (breakPoints: number[]): number | null => {
    const screenWidth = getScreenWidth()

    const sortedBreakPoints = breakPoints.sort((a, b) => a - b)

    const index = sortedBreakPoints.findIndex(item => {
        return item >= screenWidth
    })

    return index !== -1 ? breakPoints[index] : null
}

export const getResponsiveSettings = (responsive?: ISlider.Responsive): ISlider.Settings => {
    if (!responsive) return {}

    const currentBreakPoint = getCurrentBreakPoint(Object.keys(responsive).map(item => toNumber(item)))

    return currentBreakPoint !== null ? responsive[currentBreakPoint] : {}
}

export const getSettings = (propsSettings: ISlider.Settings, responsiveSettings: ISlider.Settings): Required<ISlider.Settings> => {
    return {
        ...getDefaultSettings(),
        ...propsSettings,
        ...responsiveSettings
    }
}

export const initCurrentSlide = (width: number, slidesMetrics: ISlider.SlideMetrics[]): [number, number] => {
    return slidesMetrics.reduce((prev: [number, number], item, index) => {
        if (item.x + item.width <= width) return [0, index]

        return prev
    }, [0, 0])
}

export const showButtonPrev = (width: number, trackWidth: number, offset: number) => {
    if (width >= trackWidth) return false

    return offset < 0
}

export const showButtonNext = (width: number, trackWidth: number, offset: number) => {
    if (width >= trackWidth) return false

    return trackWidth + offset > width
}

export const getNewCurrentSlide = (slidesMetrics: ISlider.SlideMetrics[], currentSlide: [number, number], slidesToScroll: number, direction: 'left' | 'right'): [number, number] => {
    const isLeft = direction === 'left'

    const [from, to] = currentSlide

    let result: [number, number] = isLeft ? [from - slidesToScroll, from - 1] : [to + 1, to + slidesToScroll]

    while (!arrayIndexInRange(slidesMetrics, result[0]) || !arrayIndexInRange(slidesMetrics, result[1])) {
        if (isLeft) {
            result = [result[0] + 1, result[1]]
        } else {
            result = [result[0], result[1] - 1]
        }
    }

    return result
}

export const getMetricsSlidesToScroll = (slidesMetrics: ISlider.SlideMetrics[], [from, to]: [number, number]) => {
    const arr = slidesMetrics.slice(from, to + 1)

    return {
        x: arr[0].x,
        width: arr.reduce((prev, item) => prev + item.width, 0)
    }
}

export const getIndent = (sliderWidth: number, slidesWidth: number) => {
    if (slidesWidth >= sliderWidth) return 0

    return Math.floor((sliderWidth - slidesWidth) / 2)
}

export const getOffset = (
    sliderMetrics: ISlider.SliderMetrics,
    slidesMetrics: ISlider.SlideMetrics[],
    currentSlide: [number, number],
    slidesToScroll: number,
    direction: 'left' | 'right'
) => {
    const newCurrentSlide = getNewCurrentSlide(slidesMetrics, currentSlide, slidesToScroll, direction)

    const metricsSlidesToScroll = getMetricsSlidesToScroll(slidesMetrics, newCurrentSlide)

    const indent = getIndent(sliderMetrics.width, metricsSlidesToScroll.width)

    let newOffset = (metricsSlidesToScroll.x + metricsSlidesToScroll.width - sliderMetrics.width + indent) * -1

    if (newOffset > 0) {
        newOffset = 0
    }

    if (sliderMetrics.trackWidth - sliderMetrics.width < Math.abs(newOffset)) {
        newOffset = (sliderMetrics.trackWidth - sliderMetrics.width) * -1
    }

    return {
        currentSlide: newCurrentSlide,
        offset: newOffset
    }
}
