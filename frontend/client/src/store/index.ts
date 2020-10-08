import {createStore, applyMiddleware, compose, StoreCreator} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {environment} from '@toolbox/environment'
import crashDispatchLoggerMiddleware from '@toolbox/middleware/crash-dispatch-logger'
import {appReducer} from './app-reducer'
import {JsonPlaceholderSaga} from './jsonplaceholder'

const sagaMiddleware = createSagaMiddleware()

const appStore = createStore(appReducer, compose(
    applyMiddleware(sagaMiddleware, crashDispatchLoggerMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && environment.development ?  window.__REDUX_DEVTOOLS_EXTENSION__() : (f: Function) => f
))

sagaMiddleware.run(JsonPlaceholderSaga.rootSaga)

const getAppStore = () => appStore

export default getAppStore
