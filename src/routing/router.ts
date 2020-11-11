import * as React from 'react'
import Routes from './routes'
import {Router} from './model'

const HomeScene = React.lazy(() => import('@components/scenes/home-scene'))
const RestApiScene = React.lazy(() => import('@components/scenes/rest-api-scene'))

export const routers: Router[] = [
    {
        path: Routes.home.root(),
        exact: true,
        component: HomeScene
    },
    {
        path: Routes.restApi.root(),
        component: RestApiScene
    }
]
