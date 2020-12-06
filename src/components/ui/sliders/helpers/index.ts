import {toNumber} from 'lodash'
import ISlider from '@components/ui/sliders/model'
import {arrayIndexInRange} from '@helpers/array-index-in-range'

export const fitIndexToArraySize = (arr: unknown[], index: number): number => {
    if (index < 0) return 0

    let result = index

    while (!arrayIndexInRange(arr, result)) {
        result--
    }

    return result
}

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

export const checkSlideInRangeWidth = (width: number, sliderX: number, slideWidth: number, offset: number): boolean => {
    const xEndRegardingOffset = sliderX + slideWidth - Math.abs(offset)

    return xEndRegardingOffset >= slideWidth && xEndRegardingOffset <= width
}

export const initCurrentSlide = (width: number, slidesMetrics: ISlider.SlideMetrics[], offset: number): [number, number] => {
    const first = slidesMetrics.findIndex(item => {
        return checkSlideInRangeWidth(width, item.x, item.width, offset)
    })

    const second = slidesMetrics.reduce((prev, item, index) => {
        if (checkSlideInRangeWidth(width, item.x, item.width, offset)) return index

        return prev
    }, 0)

    return [fitIndexToArraySize(slidesMetrics, first), fitIndexToArraySize(slidesMetrics, second)]
}

export const showButtonPrev = (width: number, trackWidth: number, offset: number) => {
    if (width >= trackWidth) return false

    return offset < 0
}

export const showButtonNext = (width: number, trackWidth: number, offset: number) => {
    if (width >= trackWidth) return false

    return trackWidth + offset > width
}

export const getNewCurrentSlide = (slidesMetrics: ISlider.SlideMetrics[], [from, to]: [number, number], slidesToScroll: number, direction: 'left' | 'right'): [number, number] => {
    const isLeft = direction === 'left'

    const [first, second]: [number, number] = isLeft ? [from - slidesToScroll, from - 1] : [to + 1, to + slidesToScroll]

    return [fitIndexToArraySize(slidesMetrics, first), fitIndexToArraySize(slidesMetrics, second)]
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
