import * as React from 'react'
import {Helmet} from 'react-helmet'
import classnames from 'classnames'
import {IRouting} from '@routing/model'
//import RestApi from './components/rest-api'
import Slider from '@components/ui/sliders/components/slider'
import Slide from '@components/ui/sliders/components/slide'
import css from './index.module.scss'

interface IProps extends IRouting.Props {

}

const slides = [
    {
        img: 'https://on-desktop.com/wps/World_The_ancient_city_of_Machu_Picchu_in_the_mountains_099543_.jpg'
    },
    {
        img: 'https://wallbox.ru/resize/1920x1080/wallpapers/main/201608/8d13ec8dc987c47.jpg'
    },
    {
        img: 'https://img1.goodfon.ru/wallpaper/nbig/5/93/zakat-gory-vodopad.jpg'
    },
    {
        img: 'https://fb.ru/media/i/3/8/1/3/9/2/i/381392.jpg'
    },
    {
        img: 'https://4.404content.com/1/41/74/622147877513462959/fullsize.jpg'
    },
    {
        img: 'https://img2.akspic.ru/image/131889-gorod-most-arhitektura-orientir-gorodskoj_pejzazh-3840x2160.jpg'
    },
    {
        img: 'https://izobrazhenie.net/photo/0-1/2544_288991092.jpg'
    },
    {
        img: 'https://www.chromethemer.com/download/hd-wallpapers/scottish-cliffs-3840x2160.jpg'
    },
    {
        img: 'https://theecology.net/wp-content/uploads/2019/05/post_5cc8ffd1a3cdf.jpg'
    },
    {
        img: 'https://i.artfile.ru/1920x1080_844367_[www.ArtFile.ru].jpg'
    },
    {
        img: 'https://www.anypics.ru/download.php?file=201210/1920x1080/anypics.ru-15782.jpg'
    },
    {
        img: 'https://wallpapertag.com/wallpaper/full/d/0/6/718514-download-full-hd-wallpaper-1920x1080-hd.jpg'
    },
    {
        img: 'https://files.wallpaperpass.com/2019/10/hawaii%20wallpaper%20074%20-%202560x1440.jpg'
    },
    {
        img: 'https://cdn1.flamp.ru/116ac35a8bcf83c260bba44e9297f14d.jpg'
    }
]

const RestApiScene = (props: IProps) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Rest Api</title>
            </Helmet>

            <div className={'container'}>
                <div className={css.slider}>
                    <Slider slidesToScroll={3}>
                        {
                            slides.map((slide, index) => {
                                const classNames = classnames([
                                    css.slide,
                                    {
                                        [css.slideOdd]: index % 2 === 0
                                    }
                                ])

                                return (
                                    <Slide key={slide.img}>
                                        <div className={classNames}>
                                            <div className={css.content}  style={{backgroundImage: `url(${slide.img})`}}>
                                                <span>{index + 1} - {slides.length}</span>
                                            </div>
                                        </div>
                                    </Slide>
                                )
                            })
                        }
                    </Slider>
                </div>

                {/*<RestApi/>*/}
            </div>
        </React.Fragment>
    )
}

export default RestApiScene
