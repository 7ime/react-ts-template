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
import saga from '@store/saga'
import {sagaMiddleware} from '@store/middleware'
import {SwAction} from '@store/sw'

sagaMiddleware.run(saga)

const store = getAppStore()
store.dispatch(SwAction.register())

ReactDOM.render((
    <React.StrictMode>
        <Provider store={store}>
            <ServiceContext.Provider value={getService()}>
                <BrowserRouter>
                    <HelmetSet/>
                    <App/>
                </BrowserRouter>
            </ServiceContext.Provider>
        </Provider>
    </React.StrictMode>
), document.getElementById('root'))
