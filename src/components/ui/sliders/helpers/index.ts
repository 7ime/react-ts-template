import ISlider from '@components/ui/sliders/model'

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

export const getOffset = (
    sliderMetrics: ISlider.SliderMetrics,
    slidesMetrics: ISlider.SlideMetrics[],
    currentSlide: number,
    slidesToScroll: number,
    currentOffset: number,
    direction: 'left' | 'right'
) => {
    return {
        currentSlide: 0,
        offset: 0
    }
}
