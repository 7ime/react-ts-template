import * as React from 'react'
import {Helmet} from 'react-helmet'

const HelmetSet: React.FC = () => {
    return (
        <Helmet>
            <link rel="shortcut icon" href={require('@images/favicon/apple-icon-60x60.png')} sizes='60x60' type='image/x-icon' />
        </Helmet>
    )
}

export default HelmetSet
