import {Action, Dispatch, Store} from 'redux'

const crashDispatchLoggerMiddleware: any = (store: Store) => (next: Dispatch) => (action: Action) => {
    try {
        return next(action)
    } catch (error) {
        console.error(action.type + ' - This action worked with an error')
        console.error(error)
        throw error
    }
}

export default crashDispatchLoggerMiddleware