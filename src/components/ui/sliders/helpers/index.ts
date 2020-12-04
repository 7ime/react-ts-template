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

export const getOffset = (
    sliderMetrics: ISlider.SliderMetrics,
    slidesMetrics: ISlider.SlideMetrics[],
    currentSlide: number,
    slidesToScroll: number,
    direction: 'left' | 'right'
) => {
    const newCurrentSlide = getNewCurrentSlide(slidesMetrics, currentSlide, slidesToScroll, direction)
    const newCurrentSlideElem = slidesMetrics[newCurrentSlide]
    let newOffset = (newCurrentSlideElem.x + newCurrentSlideElem.width - sliderMetrics.width) * -1

    if (newOffset > 0) {
        newOffset = 0
    }

    return {
        currentSlide: newCurrentSlide,
        offset: newOffset
    }
}
