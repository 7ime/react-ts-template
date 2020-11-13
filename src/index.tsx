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
import i18next from '@i18n/index'
import saga from '@store/saga'
import {sagaMiddleware} from '@store/middleware'
import {SwAction} from '@store/sw'
import Theme from '@components/common/theme'
import {UiAction} from '@store/ui'
import {EI18nLanguages} from '@constants/i18n'

sagaMiddleware.run(saga)

const store = getAppStore()
store.dispatch(SwAction.unregister())
store.dispatch(UiAction.initTheme())
store.dispatch(UiAction.setLanguage(i18next.language as EI18nLanguages))

ReactDOM.render((
    <React.StrictMode>
        <Provider store={store}>
            <ServiceContext.Provider value={getService()}>
                <Theme>
                    <BrowserRouter>
                        <HelmetSet/>
                        <App/>
                    </BrowserRouter>
                </Theme>
            </ServiceContext.Provider>
        </Provider>
    </React.StrictMode>
), document.getElementById('root'))
