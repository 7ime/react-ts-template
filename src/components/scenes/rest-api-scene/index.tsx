import * as React from 'react'
import {Helmet} from 'react-helmet'
import {IRouting} from '@routing/model'
import RestApi from './components/rest-api'

interface IProps extends IRouting.Props {

}

const RestApiScene = (props: IProps) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Rest Api</title>
            </Helmet>
            <div className={'container'}>
                <RestApi/>
            </div>
        </React.Fragment>
    )
}

export default RestApiScene
