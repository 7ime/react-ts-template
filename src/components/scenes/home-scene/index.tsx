import * as React from 'react'
import {Helmet} from 'react-helmet'
import HomePresentation from './components/home-presentation'
import {RouterProps} from '@routing/model'

interface Props extends RouterProps {

}

const HomeScene = (props: Props) => {
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
