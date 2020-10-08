import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import '@styles/global.scss'

import getAppStore from './store'
import getService from './services'
import ServiceContext from './components/context/service-context'
import HelmetSet from './components/common/helmet-set'
import App from './components/app'
import '@i18n/index'

ReactDOM.render((
    <Provider store={getAppStore()}>
        <ServiceContext.Provider value={getService()}>
            <BrowserRouter>
                <HelmetSet/>
                <App/>
            </BrowserRouter>
        </ServiceContext.Provider>
    </Provider>
), document.getElementById('root'))
