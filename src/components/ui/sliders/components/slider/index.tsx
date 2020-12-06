import * as React from 'react'
import classnames from 'classnames'
import css from '../../styles/slider.module.scss'
import ThemeContext from '@components/context/theme-context'
import ISlider from '../../model'
import {
    getDefaultSettings,
    getOffset, getPropsSettings, getResponsiveSettings, getSettings,
    initCurrentSlide,
    showButtonNext,
    showButtonPrev
} from '@components/ui/sliders/helpers'

const Slider = (props: ISlider.SliderProps) => {
    const theme = React.useContext(ThemeContext)
    const ref = React.useRef<HTMLDivElement>(null)

    const [sliderMetrics, setSliderMetric] = React.useState<ISlider.SliderMetrics | null>(null)
    const [slidesMetrics, setSlideMetrics] = React.useState<ISlider.SlideMetrics[]>([])
    const [offset, setOffset] = React.useState(0)
    const [currentSlide, setCurrentSlide] = React.useState<[number, number]>([0, 0])
    const [settings, setSettings] = React.useState<Required<ISlider.Settings>>(getDefaultSettings())
    const [timeStampResize, setTimeStampResize] = React.useState(0)

    const {
        children,
        parentClass,
        responsive
    } = props

    React.useEffect(() => {
        const handleResize = (event: UIEvent) => {
            setTimeStampResize(event.timeStamp)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    React.useEffect(() => {
        const node = ref.current

        if (!node) return

        const trackNode = node.querySelector<HTMLDivElement>('[data-slider-track]')

        if (!trackNode) return

        const newSliderMetric: ISlider.SliderMetrics = {
            width: node.offsetWidth,
            trackWidth: trackNode.scrollWidth
        }

        setSliderMetric(newSliderMetric)

        const slideMetricsBlank: ISlider.SlideMetrics[] = []

        let x = 0

        trackNode.childNodes.forEach((childNode) => {
            const width = (childNode as HTMLDivElement).offsetWidth

            slideMetricsBlank.push({
                x,
                width
            })

            x = x + width
        })

        setSettings(getSettings(
            getPropsSettings(props),
            getResponsiveSettings(responsive)
        ))

        setSlideMetrics(slideMetricsBlank)
        setCurrentSlide(initCurrentSlide(newSliderMetric.width, slideMetricsBlank, offset))
    }, [timeStampResize])

    const classNames = classnames(
        css.slider,
        parentClass,
        theme
    )

    const calculation = React.useCallback((direction: 'right' | 'left') => {
        if (!sliderMetrics) return

        const result = getOffset(sliderMetrics, slidesMetrics, currentSlide, settings.slidesToScroll, direction)

        setOffset(result.offset)
        setCurrentSlide(result.currentSlide)
    }, [sliderMetrics, currentSlide, offset])

    return (
        <div className={classNames} ref={ref}>
            <div className={css.sliderTrack} data-slider-track={true} style={{
                transform: `translateX(${offset}px)`
            }}>
                {children}
            </div>

            {
                sliderMetrics &&
                showButtonPrev(sliderMetrics.width, sliderMetrics.trackWidth, offset) &&
                <button className={css.prev} onClick={() => calculation('left')}/>
            }

            {
                sliderMetrics &&
                showButtonNext(sliderMetrics.width, sliderMetrics.trackWidth, offset) &&
                <button className={css.next} onClick={() => calculation('right')}/>
            }
        </div>
    )
}

export default React.memo(Slider)
