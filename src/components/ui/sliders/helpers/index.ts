import ISlider from '@components/ui/sliders/model'
import {arrayIndexInRange} from '@helpers/array-index-in-range'

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

    const [leftBoundary, rightBoundary] = currentSlide

    let result: [number, number] = isLeft ? [leftBoundary - slidesToScroll, leftBoundary - 1] : [rightBoundary + 1, rightBoundary + slidesToScroll]

    while (!arrayIndexInRange(slidesMetrics, result[0]) && !arrayIndexInRange(slidesMetrics, result[1])) {
        if (isLeft) {
            result = [result[0] + 1, result[1]]
        } else {
            result = [result[0], result[1] - 1]
        }
    }

    return result
}

export const getMetricsSlidesToScroll = (slidesMetrics: ISlider.SlideMetrics[], [leftBoundary, rightBoundary]: [number, number]) => {
    const arr = slidesMetrics.slice(leftBoundary, rightBoundary + 1)

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
