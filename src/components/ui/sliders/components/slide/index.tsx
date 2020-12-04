import * as React from 'react'
import classnames from 'classnames'
import css from '../../styles/slider.module.scss'
import ThemeContext from '@components/context/theme-context'
import ISlider from '../../model'

const Slide = (props: ISlider.SlideProps) => {
    const theme = React.useContext(ThemeContext)

    const {
        children,
        parentClass
    } = props

    const classNames = classnames(
        css.slide,
        parentClass,
        theme
    )

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

export default React.memo(Slide)
