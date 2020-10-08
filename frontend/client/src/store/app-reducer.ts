import {combineReducers} from 'redux'
import {JsonPlaceholderState, JsonPlaceholderReducer} from './jsonplaceholder'

export interface IAppState {
    jsonPlaceholder: JsonPlaceholderState.IState
}

export const appReducer = combineReducers<IAppState>({
    jsonPlaceholder: JsonPlaceholderReducer.reducer
})
