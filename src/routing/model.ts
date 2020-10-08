import * as React from 'react'
import * as H from 'history'
import {match} from 'react-router'

export namespace IRouting {
    export interface Router {
        exact?: boolean
        path: string
        component: React.LazyExoticComponent<any>
        checkAuth?: boolean
    }

    export interface Props {
        history: H.History
        match: match
        location: H.Location
    }
}