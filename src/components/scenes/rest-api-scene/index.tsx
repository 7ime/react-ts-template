import * as React from 'react'
import {Helmet} from 'react-helmet'
import {RouterProps} from '@routing/model'
import RestApi from './components/rest-api'

interface Props extends RouterProps {

}

const RestApiScene = (props: Props) => {
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
