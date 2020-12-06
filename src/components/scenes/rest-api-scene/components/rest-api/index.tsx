import * as React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import css from './index.module.scss'
import {JsonPlaceholderAction, JsonPlaceholderSelector} from '../../../../../store/jsonplaceholder'
import {IJsonPlaceholder} from '@entities/jsonplaceholder'
import {Maybe} from '@toolbox/custom-types'
import ServiceContext from '../../../../context/service-context'
import Slider from '@components/ui/sliders/components/slider'
import classnames from 'classnames'
import Slide from '@components/ui/sliders/components/slide'

const images = [
    'https://on-desktop.com/wps/World_The_ancient_city_of_Machu_Picchu_in_the_mountains_099543_.jpg',
    'https://wallbox.ru/resize/1920x1080/wallpapers/main/201608/8d13ec8dc987c47.jpg',
    'https://img1.goodfon.ru/wallpaper/nbig/5/93/zakat-gory-vodopad.jpg',
    'https://fb.ru/media/i/3/8/1/3/9/2/i/381392.jpg',
    'https://4.404content.com/1/41/74/622147877513462959/fullsize.jpg',
    'https://img2.akspic.ru/image/131889-gorod-most-arhitektura-orientir-gorodskoj_pejzazh-3840x2160.jpg',
    'https://izobrazhenie.net/photo/0-1/2544_288991092.jpg',
    'https://www.chromethemer.com/download/hd-wallpapers/scottish-cliffs-3840x2160.jpg',
    'https://theecology.net/wp-content/uploads/2019/05/post_5cc8ffd1a3cdf.jpg',
    'https://i.artfile.ru/1920x1080_844367_[www.ArtFile.ru].jpg'
]

interface IProps {

}

const RestApi = (props: IProps) => {
    const dispatch = useDispatch()
    const {jsonPlaceholderService} = React.useContext(ServiceContext)

    const countOfPosts: Maybe<number> = useSelector(JsonPlaceholderSelector.getTotalCountOfPosts)
    const posts: Maybe<IJsonPlaceholder.Model[]> = useSelector(JsonPlaceholderSelector.makeGetCertainNumberOfPosts(10))


    React.useEffect(() => {
        const fetchData = async() => {
            dispatch(JsonPlaceholderAction.getPosts())

            await jsonPlaceholderService.deletePost(1)
        }

        fetchData()
    }, [])

    React.useEffect(() => {
        return () => {
            dispatch(JsonPlaceholderAction.resetState())
        }
    }, [])

    return (
        <div className={css.content}>
            {
                countOfPosts !== null ? <h4>Count of posts: {countOfPosts}</h4> : null
            }
            {
                posts && (
                    <div className={css.slider}>
                        <Slider slidesToScroll={2} responsive={{
                            1024: {
                                slidesToScroll: 2
                            },
                            768: {
                                slidesToScroll: 1
                            }
                        }}>
                            {
                                posts.map((post, index) => {
                                    const classNames = classnames([
                                        css.slide,
                                        {
                                            [css.slideOdd]: index % 2 === 0
                                        }
                                    ])

                                    return (
                                        <Slide key={post.id}>
                                            <div className={classNames}>
                                                <div className={css.slideContentWrap}  style={{backgroundImage: `url(${images[+index.toString().slice(-1)]})`}}>
                                                   <div className={css.slideContent}>
                                                       <span className={css.count}>{index + 1} - {posts.length}</span>
                                                       <span className={css.title}>{post.title}</span>
                                                       <span className={css.body}>{post.body}</span>
                                                   </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                )
            }
        </div>
    )
}

export default RestApi
