import * as H from 'history'
import {match} from 'react-router'

export namespace IRouting {
    export interface Props {
        history: H.History
        match: match
        location: H.Location
    }
}
