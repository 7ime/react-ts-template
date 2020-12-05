import ISlider from '@components/ui/sliders/model'
import {arrayIndexInRange} from '@helpers/array-index-in-range'

export const initCurrentSlide = (width: number, slidesMetrics: ISlider.SlideMetrics[]): number => {
    return slidesMetrics.reduce((prev: number, item, index) => {
        if (item.x + item.width <= width) return index

        return prev
    }, 0)
}

export const showButtonPrev = (width: number, trackWidth: number, offset: number) => {
    if (width >= trackWidth) return false

    return offset < 0
}

export const showButtonNext = (width: number, trackWidth: number, offset: number) => {
    if (width >= trackWidth) return false

    return trackWidth + offset > width
}

export const getNewCurrentSlide = (slidesMetrics: ISlider.SlideMetrics[], currentSlide: number, slidesToScroll: number, direction: 'left' | 'right'): number => {
    const isLeft = direction === 'left'

    let result = currentSlide + (isLeft ? -slidesToScroll : slidesToScroll)

    while (!arrayIndexInRange(slidesMetrics, result)) {
        if (isLeft) {
            result++
        } else {
            result--
        }
    }

    return result
}

export const getMetricsSlidesToScroll = (slidesMetrics: ISlider.SlideMetrics[], currentSlide: number, newCurrentSlide: number, direction: 'left' | 'right') => {
    const arr = direction === 'left' ? slidesMetrics.slice(newCurrentSlide, currentSlide) : slidesMetrics.slice(currentSlide + 1, newCurrentSlide + 1)

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
    currentSlide: number,
    slidesToScroll: number,
    direction: 'left' | 'right'
) => {
    const newCurrentSlide = getNewCurrentSlide(slidesMetrics, currentSlide, slidesToScroll, direction)

    const metricsSlidesToScroll = getMetricsSlidesToScroll(slidesMetrics, currentSlide, newCurrentSlide, direction)

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
