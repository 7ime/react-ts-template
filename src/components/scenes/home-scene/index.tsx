import * as React from 'react'
import {Helmet} from 'react-helmet'
import HomePresentation from './components/home-presentation'
import {IRouting} from '@routing/model'

interface IProps extends IRouting.Props {

}

const HomeScene = (props: IProps) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <div className={'container'}>
                <HomePresentation/>
            </div>
        </React.Fragment>
    )
}

export default HomeScene
