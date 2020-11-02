import createSagaMiddleware from 'redux-saga'
import crashDispatchLoggerMiddleware from '@toolbox/middleware/crash-dispatch-logger'

export const sagaMiddleware = createSagaMiddleware()

export const getMiddleware = () => {
    return [
        sagaMiddleware,
        crashDispatchLoggerMiddleware
    ]
}
