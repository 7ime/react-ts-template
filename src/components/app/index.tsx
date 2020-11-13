import * as React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import classnames from 'classnames'
import Header from '../common/header'
import css from './index.module.scss'
import Routes from '@routing/routes'
import Loader from '../ui/loaders/components/loader'
import {useDispatch} from 'react-redux'
import {UiAction} from '@store/ui'
import {WebNotificationAction} from '@store/web-notification'
import ThemeContext from '@components/context/theme-context'
import {useTranslation} from 'react-i18next'

const HomeScene = React.lazy(() => import('@components/scenes/home-scene'))
const RestApiScene = React.lazy(() => import('@components/scenes/rest-api-scene'))

const getLoaderElem = () => {
    return (
        <div>
            <Loader/>
        </div>
    )
}

const App = () => {
    useTranslation()
    const dispatch = useDispatch()
    const theme = React.useContext(ThemeContext)

    React.useEffect(() => {
        dispatch(UiAction.removePreloader())
        dispatch(WebNotificationAction.requestPermission())
    }, [])

    const classNames = classnames(css.app, css[theme])

    return (
        <div className={classNames}>
            <div className={css.content}>
                <div className={css.header}>
                    <Header />
                </div>
                <React.Suspense fallback={getLoaderElem()}>
                    <Switch>
                        <Route path={Routes.home.root()} component={HomeScene} exact/>
                        <Route path={Routes.restApi.root()} component={RestApiScene}/>
                        <Redirect from='*' to={Routes.home.root()} exact/>
                    </Switch>
                </React.Suspense>
            </div>
        </div>
    )
}

export default App
