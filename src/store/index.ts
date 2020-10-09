import {configureStore} from '@reduxjs/toolkit'
import {environment} from '@toolbox/environment'
import {appReducer} from './app-reducer'
import {getMiddleware} from '@store/middleware'

const appStore = configureStore({
    reducer: appReducer,
    devTools: environment.development,
    middleware: getMiddleware()
})

const getAppStore = () => appStore

export default getAppStore
