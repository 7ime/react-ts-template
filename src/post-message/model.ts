import {EPostMessageTypes} from './index'

export namespace IPostMessage {
    export interface Data<T> {
        type: EPostMessageTypes
        payload: T
    }
}
